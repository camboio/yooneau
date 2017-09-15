import * as types from '../actions/types';

const initialGameState = { state: null, lastMove: null, clockwise: true };

export default function(state = initialGameState, action){
   switch(action.type){
      case types.GAME_INITIALISE:
         return { ...state, state: types.GAME_INITIALISE };
      case types.GAME_DEAL:
         return { ...state, state: types.GAME_DEAL };
      case types.GAME_NEXT_PLAYER:
         return { ...state, state: types.GAME_NEXT_PLAYER };
      case types.GAME_EVALUATE_MOVE:
         return { ...state, state: types.GAME_EVALUATE_MOVE };
      case types.GAME_FIRST_PLAYER:
         return { ...state, state: types.GAME_FIRST_PLAYER };
      case types.GAME_PLAYER_PLAYING:
         return { ...state, state: types.GAME_PLAYER_PLAYING };
      case types.DRAW_CARD:
         return { ...state, lastMove: types.DRAW_CARD };
      case types.PLAY_CARD:
         let nextState = { ...state }, card = action.payload.card;
         nextState.lastMove = types.PLAY_CARD;
         //identify last card played to see if play direction needs to change
         if(card.value == 10){
            nextState.clockwise = !nextState.clockwise;
         }
         return nextState;
   }
   return state;
}
