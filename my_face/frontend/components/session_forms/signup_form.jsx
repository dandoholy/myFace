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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  update(field){
    return (e) => {
      this.setState({ [field]: e.target.value })
    };
  }

  handleSubmit () {
    e.preventDefault();
    const user = merge({}, this.state);
    this.props.signup(user);
  }

  render() {
    return(
      <div className='signup-form-container'>
        
        <form onSubmit={this.handleSubmit} className='signup-form-box'>
        </form>
      </div>
    );
  }

}


export default SignupForm;
