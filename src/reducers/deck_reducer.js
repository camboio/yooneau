import Game from '../components/game';
import * as types from '../actions/types';

const initialDeckState = {
   unplayedCards: initialiseDeck(),
   playedCards: []
}

function initialiseDeck(){
   let init = [];

   Game.SUITE_COLOURS.map((colour) => {
      Game.SUITE_VALUES.map((value) => {
         init.push({colour, value});
      })
   });
   Game.DANGER_VALUES.map((value) => {
      const colour = Game.DANGER_COLOUR;
      init.push({colour, value});
   });

   return shuffleDeck(init);
}

function shuffleDeck(deck){
   let shuffle = deck;
   let currentIndex = deck.length;
   let randomIndex, temp;

   while(currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temp = shuffle[currentIndex];
      shuffle[currentIndex] = shuffle[randomIndex];
      shuffle[randomIndex] = temp;
   }

   //this shuffle never touches the first card, so in order to
   //avoid having the same first card always, cut the deck
   let cut = Math.floor(Math.random() * shuffle.length)
   let cutDeck = shuffle.splice(cut, shuffle.length - cut);

   //magically never make the top card black
   while(cutDeck[0].colour == 'black'){
      const temp = cutDeck[0];
      cutDeck = cutDeck.splice(1, cutDeck.length-1);
      cutDeck = [...cutDeck, temp];
   }

   return [...cutDeck, ...shuffle];
}

export default function(state = initialDeckState, action){
   let played, unplayed, nextState;

   switch(action.type){
      case types.SHUFFLE_DECK:
         return { ...state, unplayedCards: shuffleDeck(action.payload)};
      case types.PLAY_FROM_DECK:
         let x = 0;
         while(state.unplayedCards[x].value >= 10){
            //we don't want any special cards to kick off the game
            x++;
         }
         unplayed = state.unplayedCards.splice(x+1, state.unplayedCards.length-x+1);
         played = [...state.playedCards];
         for(let i = 0; i <= x; i++){
            played.push(state.unplayedCards[i]);
         }
         return { ...state, unplayedCards: unplayed, playedCards: played };
      case types.REBUILD_DECK:
         played = [...state.playedCards].map((c) => {
            if(c.value >= 13){
               c.colour = "black";
            }
            return c;
         });
         return {
            ...state,
            unplayedCards: played.splice(0, played.length-1),
            playedCards: [played.pop()]
         }
      case types.DRAW_CARD:
         unplayed = state.unplayedCards.splice(1, state.unplayedCards.length-1);
         return { ...state, unplayedCards: unplayed }
      case types.PLAY_CARD:
         nextState = { ...state };
         nextState.playedCards.push(action.payload.card);
         return nextState;
   }
   return state;
}
