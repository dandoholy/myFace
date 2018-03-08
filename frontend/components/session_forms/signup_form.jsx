import React from 'react';
import { merge } from 'lodash';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.date = new Date();
    const currYear = String(this.date.getFullYear());
    let currMo = String(this.date.getMonth()+1);
    if (currMo < 10) { currMo = `0${currMo}`}
    let currDay = String(this.date.getDate());
    if (currDay < 10) { currDay = `0${currDay}`}

    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      birthday: `${currYear}-${currMo}-${currDay}`,
      gender: ''
    };
    this.birthday = [currYear, currMo, currDay];
    // debugger

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateBirthday = this.updateBirthday.bind(this);
    this.update = this.update.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  updateBirthday(idx) {
    return (e) => {
      let res = e.currentTarget.value
      this.birthday[idx] = res;
      const birthday = this.birthday.join('-');
      this.setState({ birthday })
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = merge({}, this.state);
    debugger
    this.props.signup(user);
  }

  render() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthsOpts = months.map((mo, idx) => {
      return ( <option key={idx}  value={(idx+1 < 10 ) ? `0${idx+1}` : String(idx+1)}>{mo}</option>);
    });
    const daysOpts = Array.from(new Array(31), (x,i) => String(i+1)).map((day) => {
      return ( <option key={day} value={(day < 10 ) ? `0${day}` : day}>{day}</option> )
    })
    const yearsOpts = Array.from(new Array(114), (x,i) => String(i+this.date.getFullYear()-113)).reverse().map((year) => {
      return ( <option key={year} value={year}>{year}</option> )
    })
    // debugger
    const errors = this.props.errors.map( (err, idx) => {
      return (<li key={idx}>{err}</li>)
    });
    return(
      <div className='signup-form-container'>
        <ul>{errors}</ul>
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
              {monthsOpts}
            </select>
            <select value={this.birthday[2]} onChange={this.updateBirthday(2)}>
              {daysOpts}
            </select>
            <select value={String(this.birthday[0]-25)} onChange={this.updateBirthday(0)}>
              {yearsOpts}
            </select>
          </label>
            <div className='gender-buttons'>
              <label>
                <input type='radio' value='female' onChange={this.update('gender')}></input>
                Female
              </label>
              <label>
                <input type='radio' value='male' onChange={this.update('gender')}></input>
                Male
              </label>
            </div>
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
