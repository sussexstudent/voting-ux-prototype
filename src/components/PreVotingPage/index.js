import React from 'react';

import './PreVotingPage.css';

function PreVotingPage({ startVoting }) {
  return (
    <div className="PreVotingPage">
      <h1>Voting UX Prototype</h1>
      <button className="PreVotingPage__button" onClick={startVoting}>
        Start voting
      </button>
    </div>
  );
}

export default PreVotingPage;