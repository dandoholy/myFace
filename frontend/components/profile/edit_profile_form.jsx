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
          <div className='edit-nickname-div'>
            <div className='nickname-label'>Nickname: </div>
            <input type='text'
              value={this.state.nickname || ''}
              onChange={this.update('nickname')}
              className='nickname-input' />
          </div>
          <div className='edit-address-div'>
            <div className='address-label'>Address: </div>
            <input type='text'
              value={this.state.address || ''}
              onChange={this.update('address')}
              className='address-input' />
          </div>
          <div className='edit-phone-div'>
            <div className='phone-label'>Phone: </div>
            <input type='text'
              value={this.state.phone_number || ''}
              onChange={this.update('phone_number')}
              className='phone-input' />
          </div>
          <div className='edit-work-div'>
            <div className='work-label'>Work: </div>
            <input type='text'
              value={this.state.work || ''}
              onChange={this.update('work')}
              className='work-input' />
          </div>
          <div className='edit-college-div'>
            <div className='college-label'>College: </div>
            <input type='text'
              value={this.state.college || ''}
              onChange={this.update('college')}
              className='college-input' />
          </div>
          <div className='edit-profile-submit-div'>
            <button type='submit'>Update Profile</button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditProfileForm;
