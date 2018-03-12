import React from 'react';
import { merge } from 'lodash';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.login(user);
  }

  render() {
    return (
      <div className='login-form-container'>
        <form onSubmit={this.handleSubmit} className='login-form-box'>
            <div className='login-input-labels'>
              <div className='login-label'>Email</div>
              <div className='login-label'>Password</div>
            </div>
            <div className='login-inputs-div'>
              <div className='login-inputs'>
                <input type='text'
                  value={this.state.email}
                  onChange={this.update('email')}
                  className='login-input'
                  />
              </div>
              <div className='login-inputs'>
                <input type='password'
                  value={this.state.password}
                  onChange={this.update('password')}
                  className='login-input'
                  />
              </div>
              <div className='session-submit-button'>
                <button className='session-submit'
                  type='submit'
                  >{this.props.formType}</button>
              </div>
              <div className='demo-button'>
                <button className='demo-submit'
                  onClick={() => this.props.demo()}
                  >Guest</button>
              </div>
            </div>
        </form>
      </div>
    );
  }

}

export default LoginForm;
