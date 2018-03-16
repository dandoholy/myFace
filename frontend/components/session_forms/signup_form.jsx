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
    this.props.signup(user);
  }

  render() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthsOpts = months.map((mo, idx) => {
      return ( <option key={idx}  value={(idx+1 < 10 ) ? `0${idx+1}` : String(idx+1)}>{mo}</option>);
    });
    const daysOpts = Array.from(new Array(31), (x,i) => String(i+1)).map((day) => {
      return ( <option key={day} value={(day < 10 ) ? `0${day}` : day}>{day}</option> )
    })
    const yearsOpts = Array.from(new Array(114), (x,i) => String(i+this.date.getFullYear()-113)).reverse().map((year) => {
      return ( <option key={year} value={year}>{year}</option> )
    })
    const errors = this.props.errors.map( (err, idx) => {
      return (<li key={idx}>{err}</li>)
    });
    return(
      <div className='signup-form-container'>
        <ul>{errors}</ul>
        <div className='signup-header-box'>
          <div className='signup-header-line1'>Sign Up</div>
          <div className='signup-header-line2'>It’s free and always will be.</div>
        </div>
        <form onSubmit={this.handleSubmit} className='signup-form-box'>
          <div className='signup-full-name-div'>
            <div className='signup-fname-div'>
              <input type='text'
                value={this.state.first_name}
                onChange={this.update('first_name')}
                className='signup-name-input'
                placeholder='First name'
                />
            </div>
            <div className='signup-lname-div'>
              <input type='text'
                value={this.state.last_name}
                onChange={this.update('last_name')}
                className='signup-name-input'
                placeholder='Last name'
                />
            </div>
          </div>
          <div className='signup-input-div'>
            <input type='text'
              value={this.state.email}
              onChange={this.update('email')}
              className='signup-input'
              placeholder='Email address'
              />
          </div>
          <div className='signup-input-div'>
            <input type='password'
              value={this.state.password}
              onChange={this.update('password')}
              className='signup-input'
              placeholder='New password'
              />
          </div>
          <div className='birthday-div'>
            <div className='birthday-label'>Birthday</div>
            <div className='birthday-select-div'>
              <select className='birthday-select' value={this.birthday[1]} onChange={this.updateBirthday(1)}>
                {monthsOpts}
              </select>
              <select className='birthday-select' value={this.birthday[2]} onChange={this.updateBirthday(2)}>
                {daysOpts}
              </select>
              <select className='birthday-select' value={String(this.birthday[0]-25)} onChange={this.updateBirthday(0)}>
                {yearsOpts}
              </select>
            </div>
          </div>
          <div className='gender-buttons'>
            <span className='gender-span'>
              <input className='gender-radio' type='radio' value='female' onChange={this.update('gender')}></input>
              <label className='gender-label'>Female</label>
            </span>
            <span className='gender-span'>
              <input className='gender-radio' type='radio' value='male' onChange={this.update('gender')}></input>
              <label className='gender-label'>Male</label>
            </span>
          </div>
          <button className='signup-submit'
            type='submit'
          >{this.props.formType}</button>
        </form>
      </div>
    );
  }

}


export default SignupForm;
