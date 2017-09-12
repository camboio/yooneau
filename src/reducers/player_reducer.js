import * as types from '../actions/types';

// player: {
//   id: key
//   name: string
//   cards: array
//   active: bool
// }

export default function(state = {}, action){
   let nextState, nextCards, key, player, x;

   switch(action.type){
      case types.ADD_AI_PLAYER:
         nextState = { ...state };
         key = Object.keys(nextState).length + 1;
         player = {
            id: key,
            name: action.payload,
            cards: [],
            active: false
         }
         nextState[key] = player;
         return nextState;
      case types.DRAW_CARD:
         nextState = { ...state };
         key = action.payload.player.id;
         nextState[key].cards.push(action.payload.card);
         return nextState;
      case types.PLAY_CARD:
         nextState = { ...state };
         key = action.payload.player.id;
         nextCards = [];
         x = true;
         for(let i = 0; i < nextState[key].cards.length; i++){
            if(x && nextState[key].cards[i] == action.payload.card){
               x = !x; continue;
            }
            nextCards.push(nextState[key].cards[i]);
         }
         nextState[key].cards = nextCards;
         return nextState;
      case types.GAME_FIRST_PLAYER:
         nextState = { ...state };
         key = Object.keys(nextState);
         player = 0;
         nextState[key[player]].active = true;
         return nextState;
      case types.GAME_NEXT_PLAYER:
         nextState = { ...state };
         x = true;
         key = Object.keys(nextState);
         player = 0;
         //check if player is active
         for(let i = 0; i < key.length; i++){
            if(x && nextState[key[i]].active){
               x = false;
               nextState[key[i]].active = false;
               player = (i + 1) % key.length;
            }
         }
         nextState[key[player]].active = true;
         return nextState;
   }
   return state;
}
