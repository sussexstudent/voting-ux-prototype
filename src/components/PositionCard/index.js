import React from 'react';
import cx from 'classnames';

import './PositionCard.css';

function PositionCard(props) {
  return (
    <div className={cx('PositionCard', { 'PositionCard--voted': props.hasVoted })}>
      <h3 className="PositionCard__name">
        {props.name} {props.hasVoted ? <small className="PositionCard__voted">Voted!</small> : null}
      </h3>
      <p className="PositionCard__description">
        {props.description}
      </p>
      <button
        className="PositionCard__cta"
        onClick={props.onSelect}
      >
        View the candidates
      </button>
    </div>
  );
}

export default PositionCard;