/* eslint-disable */


import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    fighter1:{
      score: 0,
      fault: 0,
      advantage:0,

    },
    fighter2: {
      score: 0,
      fault: 0,
      advantage:0,
    },
    chronometer: {
      playing: false,
      time: 300,
    },
  },
  getters:{
    fighter1(state){
      return state.fighter1;
    },
    fighter2(state){
      return state.fighter2;
    },

  },
  mutations: {
    change (state, pay ) {
      const target = pay.target;
      const value = pay.value;
      const atribute = pay.atribute;

      if(state[target][atribute] + value < 0){
        state[target][atribute] = 0;
      } else {
        state[target][atribute] += value;
      }
    },
  }
})
