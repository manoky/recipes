import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ConfirmModal = ({ message, onSubmit, onClose }) => (
  <div className="flex items-center justify-center bg-black-muted absolute t0 l0 full-width full-height">
    <div className="p2 center bg-white rounded max-width-2">
      <h2>{message}</h2>
      <Button className="mr1" onClick={onClose}>
        Cancel
      </Button>
      <Button
        onClick={() => {
          onSubmit();
          onClose();
        }}
      >
        OK
      </Button>
    </div>
  </div>
);

ConfirmModal.propTypes = {
  message: PropTypes.string,
  onSubmit: PropTypes.func,
  onClose: PropTypes.func,
};

export default ConfirmModal;
