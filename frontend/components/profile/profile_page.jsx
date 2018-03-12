import React from 'react';
// this.props.currentUserId
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: '',
      nickname: '',
      address: '',
      phone_number: '',
      work: '',
      college: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const post = merge({}, this.state);
    // this.props.updateProfile(post);
  }

  update (field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  componentDidMount() {
    this.props.fetchProfile(this.props.userId);
  }

  render() {
    const profile = this.props.profile;

    if (!profile) { return null; }

    return (
      <div className='total-profile-div'>
        <div className='profile-header-div'>
          <div className='profile-cover-div'></div>
          <div className='profile-nav-bar'></div>
        </div>
        <div className='profile-main-div'>
          <div className='profile-posts-div'>
            <div className='profile-post-form-div'></div>
            <div className='profile-posts-div'>
              <ol className='profile-posts-list'></ol>
            </div>
          </div>
          <div className='profile-info-div'>
            <div className='profile-info-details-div'>
              <div className='profile-details-content'>
                <div className='profile-detail'>Nickname: {profile.nickname || "click here to add" }</div>
                <div className='profile-detail'>Address: {profile.address || "click here to add" }</div>
                <div className='profile-detail'>Phone: {profile.phone_number || "click here to add" }</div>
                <div className='profile-detail'>Work: {profile.work || "click here to add" }</div>
                <div className='profile-detail'>College: {profile.college || "click here to add" }</div>
              </div>
            </div>
            <div className='profile-info-photos-div'>Photos</div>
            <div className='profile-info-friends-div'>Friends</div>
          </div>
        </div>
      </div>

    );
  }

}

export default ProfilePage;
