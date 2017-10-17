import React from 'react';
import cx from 'classnames';

import './Manifesto.css';

export default function Manifesto(props) {
  return (
    <div>
      <div className={cx('Manifesto', { 'Manifesto--open': props.isOpen })}>
        <header className="Manifesto__header">
          <h1 className="Manifesto__name">{props.name}</h1>
          <div className="Manifesto__for">for</div>
          <div className="Manifesto__position">{props.position.name}</div>
        </header>
        <hr className="Manifesto__divider" />
        <div dangerouslySetInnerHTML={{ __html: props.body || '' }} />
      </div>
      {props.isOpen ? <div className="Backdrop" onClick={props.onBackdrop} /> : null}
    </div>
  );
}
