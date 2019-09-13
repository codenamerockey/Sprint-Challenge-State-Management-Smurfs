import React from 'react';
import { connect } from 'react-redux';
import SmurfCard from './SmurfCard';
import { getSmurf } from './action';

const SmurfList = ({ state, getSmurf }) => {
  console.log(state);
  return (
    <div>
      <div className="smurfTurf">
        {state.smurfs.map(smurf => {
          return <SmurfCard smurf={smurf} key={smurf.id} />;
        })}
      </div>

      <button onClick={() => getSmurf()} class="ui blue inverted button">
        Get Your Smurf
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(
  mapStateToProps,
  { getSmurf }
)(SmurfList);
