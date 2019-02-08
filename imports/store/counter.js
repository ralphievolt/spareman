import { Store } from "laco";

// Creating a new store with an initial state { count: 0 }
export const CounterStore = new Store({ count: 0, data: [] }, "CounterStore");

// Implementing some actions to update the store
export const increment = () =>
  CounterStore.set(state => ({ count: state.count + 1 }), "Increment");

export const decrement = () =>
  CounterStore.set(state => ({ count: state.count - 1 }), "Decrement");
