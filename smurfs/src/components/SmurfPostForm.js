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
          <div className="ui left icon right labeled input">
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Name your smurf"
              onChange={this.changeHandler}
            />
            <i aria-hidden="true" class="add circle icon"></i>
            <div class="ui tag label label">Add Smurf</div>
          </div>
          <div className="ui left icon right labeled input">
            <input
              type="text"
              name="age"
              value={age}
              placeholder="Smurf that age"
              onChange={this.changeHandler}
            />
            <i aria-hidden="true" class="adn icon"></i>
            <div class="ui tag label label">Add Age</div>
          </div>
          <div className="ui left icon right labeled input">
            <input
              type="text"
              name="height"
              value={height}
              placeholder="Smurf's height"
              onChange={this.changeHandler}
            />
            <i aria-hidden="true" class="arrows alternate vertical icon"></i>
            <div class="ui tag label label">Smurf Height</div>
          </div>

          <button type="submit" class="ui red inverted button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SmurfPostForm;
