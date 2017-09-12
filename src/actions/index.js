import * as types from './types';

export function playFromDeck(){
   return {type: types.PLAY_FROM_DECK};
}

export function rebuildDeck(){
   return {type: types.REBUILD_DECK};
}

export function addAiPlayer(name){
   return {type: types.ADD_AI_PLAYER, payload: name};
}

export function drawCard(player, card){
   // console.log(player, card);
   return {type: types.DRAW_CARD, payload: {player, card}};
}

export function playCard(player, card){
   console.log(player, card);
   return {type: types.PLAY_CARD, payload: {player, card}};
}

export function gameInitialise(){
   return {type: types.GAME_INITIALISE};
}

export function gameDeal(){
   return {type: types.GAME_DEAL};
}

export function gameFirstPlayer(){
   return {type: types.GAME_FIRST_PLAYER};
}

export function gameNextPlayer(){
   return {type: types.GAME_NEXT_PLAYER};
}

export function gamePlayerPlaying(){
   return {type: types.GAME_PLAYER_PLAYING};
}
