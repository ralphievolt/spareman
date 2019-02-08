import React, { memo, useState, useEffect, useCallback } from "react";
import { useStore } from "laco-react";

import {
  CounterStore,
  increment,
  decrement,
  data
} from "/imports/store/counter";
import { ToggleStore, toggle } from "/imports/store/toggle";
import { Items } from "/imports/api/items";

import {
  useMeteorSubscription,
  useMeteorData
} from "meteor/react-meteor-hooks";

export const App = function(props) {
  const loading = useMeteorSubscription("ItemsList");
  const links = useMeteorData(() => Items.find().fetch());

  const counterState = useStore(CounterStore);
  const toggleState = useStore(ToggleStore);

  if (loading) return <div>Loading links ...</div>;

  console.log("Data", links);

  return (
    <div>
      <div>
        <button onClick={increment}>+</button>
        <span>{counterState.count}</span>
        <button onClick={decrement}>-</button>
      </div>
      <div>
        <button onClick={toggle}>toggle</button>
        <span>{toggleState.toggle + ""}</span>
      </div>

      <ul>
        {links.map(link => (
          <li key={link._id}>
            <a href={link.username} target="_blank">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
