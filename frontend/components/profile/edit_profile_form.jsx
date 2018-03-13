import React from 'react';
import { merge } from 'lodash';

class EditProfileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: this.props.profile.nickname,
      work: this.props.profile.work,
      phone_number: this.props.profile.phone_number,
      address: this.props.profile.address,
      college: this.props.profile.college,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const profile = merge({}, this.state);
    this.props.updateProfile(profile);
    this.props.closeModal();
  }

  update (field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  render () {
    return(
      <div className='edit-form-div'>
        <form onSubmit={this.handleSubmit} className='edit-prof-form'>
          <ul className='profile-row-list'>
            <li className='profile-row'>
              <div className='edit-prof-label'>Nickname: </div>
              <div className='edit-profile-div'>
                <input type='text'
                  value={this.state.nickname || ''}
                  onChange={this.update('nickname')}
                  className='profile-input' />
              </div>
            </li>
            <li className='profile-row'>
              <div className='edit-prof-label'>Address: </div>
              <div className='edit-profile-div'>
                <input type='text'
                  value={this.state.address || ''}
                  onChange={this.update('address')}
                  className='profile-input' />
              </div>
            </li>
            <li className='profile-row'>
              <div className='edit-prof-label'>Phone: </div>
              <div className='edit-profile-div'>
                <input type='text'
                  value={this.state.phone_number || ''}
                  onChange={this.update('phone_number')}
                  className='profile-input' />
              </div>
            </li>
            <li className='profile-row'>
              <div className='edit-prof-label'>Work: </div>
              <div className='edit-profile-div'>
                <input type='text'
                  value={this.state.work || ''}
                  onChange={this.update('work')}
                  className='profile-input' />
              </div>
            </li>
            <li className='profile-row'>
              <div className='edit-prof-label'>College: </div>
              <div className='edit-profile-div'>
                <input type='text'
                  value={this.state.college || ''}
                  onChange={this.update('college')}
                  className='profile-input' />
              </div>
            </li>
          </ul>
          <div className='edit-profile-submit-div'>
            <button className='save-button' type='submit'>Save Changes</button>
            <button className='cancel-button' onClick={this.props.closeModal}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProfileForm;
