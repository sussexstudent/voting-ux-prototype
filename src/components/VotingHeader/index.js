import React from 'react';

import './VotingHeader.css';

function VotingHeader(props) {
  if (!props.isVoting) {
    return (
      <header className="VotingHeader">
        <span className="VotingHeader__title">Voting</span>
  
        <span>You've voted for 0/8 available positions.</span>
        <button className="VotingHeader__finish">Back to main site</button>
      </header>
    );
  }

  return (
    <header className="VotingHeader">
      <span className="VotingHeader__title">
        Voting <span className="VotingHeader__title-for">for {props.position}</span>
      </span>

      <span>You don't have to vote for every candidate.</span>
      <button className="VotingHeader__finish" onClick={props.onReturn}>Cast vote</button>
    </header>
  );
}

export default VotingHeader;