import * as types from './types';

export function playFromDeck(){
   return {type: types.PLAY_FROM_DECK};
}

export function rebuildDeck(){
   return {type: types.REBUILD_DECK};
}
