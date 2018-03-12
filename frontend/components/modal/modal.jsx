import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import CreatePostForm from '../posts/create_post_container';
import EditProfileContainer from '../profile/edit_profile_container';

function Modal({ closeModal, component: Component }) {
  if (!Component) {
    return null;
  }
  // let component;
  // switch (modal) {
  //   case 'create_post':
  //     component = <CreatePostForm />;
  //     break;
  //   case 'edit_profile':
  //     component = <EditProfileContainer />;
  //     break;
  //   default:
  //     return null;
  // }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { Component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    component: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
