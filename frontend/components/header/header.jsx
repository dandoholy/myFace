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
          <div className='header-logo-div'>
            <img className='header-logo' src={mf_logo}/>
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
          <div className='header-nav-bar'>
            <div className='header-prof-link'></div>
            <div className='header-feed-link'></div>
          </div>
          <div className='header-notifications'>
            <div className='request-notifications'></div>
            <div className='notifications'></div>
          </div>
          <div className='logout-div'>
            <button className='logout-button' onClick={this.props.logout}>Log Out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
