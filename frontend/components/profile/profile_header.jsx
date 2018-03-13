import React from 'react';

class ProfileHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    <div className='profile-header-div'>
      <div className='profile-cover-div'>
        <div className='profile-cover-pic'>
          <img src={this.state.imageUrl} />
          <div className='cover-pic-uploader'>
            <input type='file' onChange={this.updateFile}></input>
            <input type='submit' value='Update Cover Photo' />
          </div>
        </div>
        <div className='profile-name'>{this.props.fullName}</div>
      </div>
      <div className='profile-nav-bar'></div>
      <div className='profile-pic-div'>

      </div>
    </div>
  }
}

export default ProfileHeader;
