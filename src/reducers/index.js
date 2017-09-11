import { combineReducers } from 'redux';
import deckReducer from './deck_reducer';
import playerReducer from './player_reducer';
import gameReducer from './game_reducer';

const rootReducer = combineReducers({
  deck: deckReducer,
  players: playerReducer,
  game: gameReducer
});

export default rootReducer;
