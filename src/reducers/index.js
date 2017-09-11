import { combineReducers } from 'redux';
import deckReducer from './deck_reducer';

const rootReducer = combineReducers({
  deck: deckReducer
});

export default rootReducer;
