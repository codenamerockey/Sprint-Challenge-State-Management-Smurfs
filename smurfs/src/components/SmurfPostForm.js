import React, { Component } from 'react';
import axios from 'axios';

class SmurfPostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    //on a post request the first argument is the url you sending the post to, the second argument is the data that needs to be sent.
    axios
      .post('http://localhost:3333/smurfs', this.state)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    const { name, age, height } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="age"
              value={age}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="height"
              value={height}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default SmurfPostForm;
