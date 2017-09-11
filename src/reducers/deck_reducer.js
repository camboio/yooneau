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
   switch(action.type){
      case types.SHUFFLE_DECK:
         return { ...state, unplayedCards: shuffleDeck(action.payload)};
      case types.PLAY_FROM_DECK:
         let pfdUnplayed = state.unplayedCards.splice(1, state.unplayedCards.length-1);
         let pfdPlayed = [...state.playedCards, state.unplayedCards[0]];

         return { ...state, unplayedCards: pfdUnplayed, playedCards: pfdPlayed };
      case types.REBUILD_DECK:
         return {
            ...state,
            unplayedCards: state.playedCards.splice(0, state.playedCards.length-1),
            playedCards: [state.playedCards.pop()]
         }
      case types.DRAW_CARD:
         let dcUnplayed = state.unplayedCards.splice(1, state.unplayedCards.length-1);
         return { ...state, unplayedCards: dcUnplayed }
   }
   return state;
}
