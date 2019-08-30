import { getCharacters } from '../services/airbenderApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const FETCH_CHARACTERS_LOADING = 'FETCH_CHARACTERS_LOADING';

export const fetchCharacters = () => ({
  type: FETCH_CHARACTERS,
  payload: getCharacters(),
  pendingType: FETCH_CHARACTERS_LOADING
});
