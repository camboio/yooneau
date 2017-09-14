import * as types from '../actions/types';

// player: {
//   id: key
//   name: string
//   cards: array
// }
// active: string

export default function(state = {active: null, players: {}}, action){
   let nextState, nextCards, key, player, x;

   switch(action.type){
      case types.ADD_AI_PLAYER:
         nextState = { ...state };
         key = Object.keys(nextState.players).length + 1;
         player = {
            id: key,
            name: action.payload.name,
            cards: [],
            active: action.payload.active
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
         nextCards = [];
         x = true;
         for(let i = 0; i < nextState.players[key].cards.length; i++){
            if(x && nextState.players[key].cards[i] == action.payload.card){
               x = !x; continue;
            }
            nextCards.push(nextState.players[key].cards[i]);
         }
         nextState.players[key].cards = nextCards;
         return nextState;
      case types.GAME_FIRST_PLAYER:
         nextState = { ...state };
         key = Object.keys(nextState.players);
         player = 0;
         nextState.active = key[player];
         return nextState;
      case types.GAME_NEXT_PLAYER:
         //next player should come in action.payload when implementing directional shifts
         nextState = { ...state };
         key = Object.keys(nextState.players);
         player = 0;
         key.map((k, index) => {
            if(k == nextState.active){
               player = (index + 1) % key.length;
            }
         });
         nextState.active = key[player];
         return nextState;
   }
   return state;
}
