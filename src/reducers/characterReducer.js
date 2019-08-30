import { FETCH_CHARACTERS_LOADING, FETCH_CHARACTERS } from '../actions/characterActions';

const initialState = {
  characters: [],
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_CHARACTERS_LOADING:
      return { ...state, loading: true };
    case FETCH_CHARACTERS:
      return { ...state, characters: action.payload, loading: false };
    default:
      return state;
  }
};
