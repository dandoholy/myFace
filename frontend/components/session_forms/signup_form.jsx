import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: '',
      gender: ''
    };
    this.birthday = ['0000', '00', '00'];

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  updateBirthday(idx) {
    return (e) => {
      let res = e.currentTarget.value
      if (res < 10) { res = `0${res}`}
      this.birthday[idx] =res ;
      const birthday = this.birthday.join('-');
      this.setState({ birthday })
    }
  }

  handleSubmit () {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.signup(user);
  }

  render() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthOpts = months.map((mo, idx) => {
      return ( <option key={idx} value={idx+1}>{mo}</option>);
    })
    return(
      <div className='signup-form-container'>
        <div className='signup-header-box'>
          <div className='signup-header-line1'>Create a New Account</div>
          <div className='signup-header-line2'>It’s free and always will be.</div>
        </div>
        <form onSubmit={this.handleSubmit} className='signup-form-box'>
          <input type='text'
            value={this.state.first_name}
            onChange={this.update('first_name')}
            className='signup-name-input'
            placeholder='First name'
          />
          <input type='text'
            value={this.state.last_name}
            onChange={this.update('last_name')}
            className='signup-name-input'
            placeholder='Last name'
          />
          <input type='text'
            value={this.state.email}
            onChange={this.update('email')}
            className='signup-input'
            placeholder='Email address'
          />
          <input type='password'
            value={this.state.password}
            onChange={this.update('password')}
            className='signup-input'
            placeholder='New password'
          />
          <label>Birthday
            <select value={this.birthday[1]} onChange={this.updateBirthday(1)}>
              {monthOpts}
            </select>
            <input type='date'
              value={this.state.birthday}
              onChange={this.update('birthday')}
              className='signup-birthday-input'
            />
          </label>
          <input className='signup-submit'
            type='submit'
            value={this.props.formType}
          />
        </form>
      </div>
    );
  }

}


export default SignupForm;
