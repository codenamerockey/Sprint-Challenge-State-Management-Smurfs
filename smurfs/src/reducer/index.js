import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAIL
} from '../components/action/index';

const initialValue = {
  smurfs: [],
  isFetching: false,
  error: ''
};

const reducer = (state = initialValue, action) => {
  console.log(state);
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: ''
      };

    case FETCH_SMURF_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
