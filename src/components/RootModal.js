/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ConfirmModal from './ConfirmModal';
import { hideModal } from '../actions/modals';

const MODAL_TYPES = {
  CONFIRM_MODAL: ConfirmModal,
};

const RootModal = ({ modalType, modalProps, hideModal }) => {
  if (!modalType) {
    return null;
  }

  const Modal = MODAL_TYPES[modalType];

  return <Modal onClose={hideModal} {...modalProps} />;
};

const mapStateToProps = state => ({
  modalType: state.modals.modalType,
  modalProps: state.modals.modalProps,
});

RootModal.propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object,
  hideModal: PropTypes.func,
};

export default connect(mapStateToProps, { hideModal })(RootModal);
