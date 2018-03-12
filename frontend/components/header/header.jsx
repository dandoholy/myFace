import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchVal: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ searchVal: event.currentTarget.value });
  }

  render() {
    return (
      <div className='header'>
        <div className='header-content'>
          <div className='logo-and-search'>
            <div className='header-logo-div'>
              <a href='/'><img className='header-logo' src={mf_logo}/></a>
            </div>
            <div className='header-search-div'>
              <input
                className='header-search-bar'
                onChange={this.handleInput}
                value={this.state.inputVal}
                placeholder='Search' />
              <div className='header-search-icon'>
                <i className="material-icons">search</i>
              </div>
            </div>
          </div>
          <div className='header-nav'>
            <div className='header-nav-links'>
              <div className='header-prof-link'>
                <div className='header-border-div'>
                  <a href={`/#/u/${this.props.currentUser.id}`}>Demo</a>
                </div>
              </div>

              <div className='header-feed-link'>
                  <a href={`/`}>Home</a>
              </div>
            </div>
            <div className='header-nav-notifs'>
              <div className='header-nav-notif-el'>
                <img className='nav-bar-logo' src={f_req_logo} />
              </div>
              <div className='header-nav-notif-el'>
                <img className='nav-bar-logo' src={f_mess_logo} />
              </div>
              <div className='header-nav-notif-el'>
                <img className='nav-bar-logo' src={f_notif_logo} />
              </div>
            </div>
            <div className='logout-div'>
              <button className='logout-button' onClick={this.props.logout}>Log Out</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
