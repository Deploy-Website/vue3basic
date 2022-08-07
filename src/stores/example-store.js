import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => {
      if (state.counter % 2 === 0) {
        return 'old';
      }
      return 'even';
    },
  },
  actions: {
    increment() {
      this.counter++;
    },
    decreament() {
      this.counter--;
    },
  },
});
