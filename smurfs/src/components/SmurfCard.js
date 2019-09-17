import React from 'react';
import Smurfs from '../the_smurfs.jpg';

const SmurfCard = ({ smurf }) => {
  return (
    <div className="ui card">
      <div className="image">
        <img src={Smurfs} alt="smurf" />
      </div>
      <div className="content">
        <div className="header">{smurf.name}</div>
        <div className="meta">
          <span className="date">Age: {smurf.age} years old</span>
        </div>
        <div className="description">
          <span>Height: {smurf.height}</span>
        </div>
      </div>
      <div className="extra content">
        <a href="https://www.smurf.com/" target="_blank">
          <i aria-hidden="true" className="user icon"></i>
          Lives in Smurf Village
        </a>
      </div>
    </div>
  );
};

export default SmurfCard;
