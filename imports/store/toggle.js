import { Store } from "laco";

// Creating a new store with an initial state { count: 0 }
export const ToggleStore = new Store({ toggle: false }, "ToggleStore");

// Implementing some actions to update the store
export const toggle = () =>
  ToggleStore.set(
    state => ({
      toggle: !state.toggle
    }),
    "Toggle"
  );
