import React from 'react';
import { merge } from 'lodash';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.defaultPost;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    const post = merge({}, this.state);
    this.props.action(post);
  }

  update (field) {
    return e => {
      this.setState({ [field]: e.target.value });
    }
  }

  render () {
    return (
      <div className='total-post-form-div'>
        <div className='post-form-header'></div>
        <div className='post-form-main'>
          <div className='post-form-body'>
            <div className='post-form-pic-div'></div>
            <div className='post-form-textarea-div'>
              <form onSubmit={this.handleSubmit} className='post-form-form'>
                <textarea onChange={this.update('body')} value={this.state.body} placeholder={`What's on your mind`}></textarea>
                <input type='submit' value='Post' />
              </form>
            </div>
          </div>
          <div className='post-form-footer'>
            <div className='post-form-pic-upload-div'></div>
          </div>
        </div>
      </div>
    );
  }
}

export default PostForm;
