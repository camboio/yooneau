import * as types from '../actions/types';

// player: {
//   id: key
//   name: string
//   cards: array
// }

export default function(state = {}, action){
   let nextState, key, player;

   switch(action.type){
      case types.ADD_AI_PLAYER:
         nextState = { ...state };
         key = Object.keys(nextState).length + 1;
         player = { id: key, name: action.payload, cards: [] }
         nextState[key] = player;
         return nextState;
      case types.DRAW_CARD:
         nextState = { ...state };
         key = action.payload.player.id;
         nextState[key].cards.push(action.payload.card);
         return nextState;
   }
   return state;
}
