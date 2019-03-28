import React from 'react';

import '../css/Modal.css';

const modal = props => {
  return (
    <div>
      <div
        className='modal-wrapper'
        style={{
          transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0'
        }}
      >
        <div className='modal-header'>
          <h3>Modal Header</h3>
          <button className='close-modal-btn' onClick={props.close}>
            ×
          </button>
        </div>
        <div className='modal-body'>
          <p>{props.children}</p>
        </div>
        <div className='modal-footer'>
          <button className='btn-cancel' onClick={props.close}>
            CLOSE
          </button>
          <button className='btn-continue'>CONTINUE</button>
        </div>
      </div>
    </div>
  );
};

export default modal;