import React from 'react';
import { getOrdinal } from '../../utils';

import './CanidateCard.css';

function CanidateCard(props) {
  return (
    <div className="CanidateCard">
      <h3 className="CanidateCard__name">{props.name}</h3>
      <p className="CanidateCard__description">{props.tagline}</p>
      <button className="CanidateCard__cta" onClick={props.onViewManifesto}>View Manifesto</button>
      {props.votedAs === -1 ? <button className="CanidateCard__cta" onClick={props.onSelect}>
        Make {getOrdinal(props.count + 1)} choice</button> : <span>Voted as {getOrdinal(props.votedAs + 1)} choice</span>
      }
    </div>
  );
}

export default CanidateCard;