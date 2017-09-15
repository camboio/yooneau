import _ from 'lodash';

import * as types from '../actions/types';

// player: {
//   id: key
//   name: string
//   cards: array
// }
// active: string

export default function(state = {active: null, players: {}}, action){
   let nextState, nextCards, key, player, x, card;

   switch(action.type){
      case types.ADD_AI_PLAYER:
         nextState = { ...state };
         key = Object.keys(nextState.players).length;
         player = {
            id: key,
            name: action.payload,
            cards: [],
            active: false
         }
         nextState.players[key] = player;
         return nextState;
      case types.DRAW_CARD:
         nextState = { ...state };
         key = action.payload.player.id;
         nextState.players[key].cards.push(action.payload.card);
         return nextState;
      case types.PLAY_CARD:
         nextState = { ...state };
         key = action.payload.player.id;
         card = action.payload.card;
         x = true;
         nextCards = nextState.players[key].cards.map((c) =>{
            if(x && c.colour == card.colour && c.value == card.value){
               x = false;
               return null;
            }
            return c;
         });
         nextState.players[key].cards = _.compact(nextCards);
         return nextState;
      case types.GAME_FIRST_PLAYER:
         nextState = { ...state };
         key = Object.keys(nextState.players);
         nextState.active = key[0];
         return nextState;
      case types.GAME_NEXT_PLAYER:
         nextState = { ...state };
         key = Object.keys(nextState.players);
         player = action.payload;
         nextState.active = key[player];
         return nextState;
   }
   return state;
}
