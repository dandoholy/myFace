import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getFriendStatus } from '../../reducers/selectors';
import {
  createFriendship, updateFriendship, destroyFriendship
} from '../../actions/user_actions';

class FriendButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hovered: false
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter () {
    this.setState({ hovered: true });
  }

  handleMouseLeave () {
    this.setState({ hovered: false });
  }

  render() {
    const { status, text, disabled, buttonAction } = this.props;
    const hoverStatus = (this.state.hovered) ? "shown" : "hidden";
    const disabledClass = (disabled) ? "disabled" : "enabled"
    return (status == "pendingIn") ? (
      <button className={`friend-request-button ${disabledClass}`}
        onClick={buttonAction[status]}
        disabled={disabled}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}>
        {text}
        <div className='dropdown-positioner'>
          <ul className={`request-response-dropdown ${hoverStatus}`}>
            <li onClick={ () => buttonAction[status](1) }>Accept</li>
            <li onClick={ () => buttonAction[status](2) }>Reject</li>
          </ul>
        </div>
      </button>
    ) : (
      <button className={`friend-request-button ${disabledClass}`}
        onClick={buttonAction[status]}
        disabled={disabled} >
        {text}
      </button>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const buttonProps = { accepted: { disabled: false, text: 'Friends'},
    pendingOut: { disabled: true, text: "Friend Request Sent" },
    pendingIn: { disabled: false, text: "Respond to Friend Request" },
    rejected: { disabled: false, text: "Add Friend" },
    none: { disabled: false, text: "Add Friend" },
  };
  const currentUser = state.entities.users[state.session.currentUser.id];
  const profileUser = state.entities.users[ownProps.match.params.userId];
  const status = getFriendStatus(currentUser, profileUser.id);
  return {
    text: buttonProps[status].text,
    disabled: buttonProps[status].disabled,
    status
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const userId = ownProps.match.params.userId;
  return {
    buttonAction: { accepted: () => dispatch(destroyFriendship(userId)),
      pendingOut: () => ({}),
      pendingIn: (status) => dispatch(updateFriendship(userId, status)),
      rejected: () => dispatch(updateFriendship(userId, 0)),
      none: () => dispatch(createFriendship(userId)),
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FriendButton));
