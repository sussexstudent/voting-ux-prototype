import React from 'react';
import merge from 'lodash/merge';
import keyBy from 'lodash/keyBy';

import VotingHeader from '../VotingHeader';
import PositionCard from '../PositionCard';
import CandidateCard from '../CandidateCard';
import Manifesto from '../Manifesto';
import DATA from './data';

import './VotingApp.css';

const BY_POSITION_ID = merge(...DATA.groups.map(group => keyBy(group.positions, 'id')));
console.log(BY_POSITION_ID);

class VotingApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'LIST',
      position: null,
      votesMap: {},
      manifestoOpen: false,
      candidate: null,
    };
  }

  handleSelectPosition(positionId) {
    this.setState({ view: 'VOTE', position: positionId });
  }

  handleSelectCandidate(cId) {
    const prevVote = this.state.votesMap.hasOwnProperty(this.state.position) ? this.state.votesMap[this.state.position] : [];
    this.setState({ votesMap: {...this.state.votesMap, [this.state.position]: [...prevVote, cId] } });
  }

  handleCast(cId) {
    this.setState({ view: 'LIST' });
  }

  handleViewManifesto(cId) {
    this.setState({ manifestoOpen: true, candidate: cId });
  }

  handleBackdrop(cId) {
    this.setState({ manifestoOpen: false });
  }

  handleResetChoices(cId) {
    this.setState({ votesMap: { ...this.state.votesMap, [this.state.position]: [] } });
  }

  render() {
    if (this.state.view === 'VOTE') {
      const position = BY_POSITION_ID[this.state.position];
      const voteMap = this.state.votesMap[position.id];
      return (
        <div className="VotingApp">
          <VotingHeader isVoting position={position.name} onReturn={this.handleCast.bind(this)} />
          <main className="VotingApp__container">
            <div style={{ overflow: 'hidden ' }}>
            {position.candidates.map((candidate, index) => <CandidateCard
              votedAs={voteMap ? voteMap.indexOf(index) : -1}
              count={voteMap ? voteMap.length : 0}
              name={candidate.name}
              tagline={candidate.tagline}
              onSelect={this.handleSelectCandidate.bind(this, index)}
              onViewManifesto={this.handleViewManifesto.bind(this, index)}
              />)}
              </div>
            <div>
              <button className="VotingApp__reset" onClick={this.handleResetChoices.bind(this)}>Reset choices</button>
            </div>
          </main>

          <Manifesto
            position={position}
            name={this.state.candidate !== null ? position.candidates[this.state.candidate].name : ''}
            body={this.state.candidate !== null ? position.candidates[this.state.candidate].manifesto : ''}
            isOpen={this.state.manifestoOpen}
            onBackdrop={this.handleBackdrop.bind(this)}
          />
        </div>
      );
    }

    return (
      <div className="VotingApp">
        <VotingHeader />
        <main className="VotingApp__container">
          {DATA.groups.map(group => (<div className="VotingApp__group">
            <h1>{group.name}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tecum optime, deinde etiam cum mediocri amico. Bestiarum vero nullum iudicium puto.</p>
            {group.positions.map(position => (
            <PositionCard
              hasVoted={this.state.votesMap.hasOwnProperty(position.id)}
              name={position.name}
              description={position.description}
              onSelect={this.handleSelectPosition.bind(this, position.id)}
            />
            ))}
          </div>))}
        </main>
      </div>
    );
  }
}

export default VotingApp;
