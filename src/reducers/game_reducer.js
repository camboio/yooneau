import * as types from '../actions/types';

const initialGameState = { state: null };

export default function(state = initialGameState, action){
   switch(action.type){
      case types.GAME_INITIALISE:
         return { ...state, state: types.GAME_INITIALISE };
      case types.GAME_DEAL:
         return { ...state, state: types.GAME_DEAL };
      case types.GAME_NEXT_PLAYER:
         return { ...state, state: types.GAME_NEXT_PLAYER };
      case types.GAME_FIRST_PLAYER:
         return { ...state, state: types.GAME_FIRST_PLAYER };
      case types.GAME_PLAYER_PLAYING:
         return { ...state, state: types.GAME_PLAYER_PLAYING };
   }
   return state;
}
