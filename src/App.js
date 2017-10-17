import React, { Component } from 'react';
import PreVotingPage from './components/PreVotingPage';
import VotingApp from './components/VotingApp';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVoting: true,
    };
  }

  handleStartVoting() {
    this.setState({ isVoting: true });
  }

  render() {
    const { isVoting } = this.state;

    return (
      <div>
        {!isVoting ? <PreVotingPage startVoting={this.handleStartVoting.bind(this)} /> : <VotingApp />}
      </div>
    );
  }
}

export default App;
