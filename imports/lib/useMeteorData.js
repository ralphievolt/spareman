import React, { memo, useState, useEffect, useCallback } from "react";

export const useMeteorSubscription = publication => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let returnFunction;
    let handle;

    computation = Tracker.nonreactive(() =>
      Tracker.autorun(c => {
        handle = Meteor.subscribe(publication);
        setLoading(!handle.ready());
      })
    );

    return () => {
      handle.stop();
      computation.stop();
    };
  });

  return loading;
};

export const useMeteorData = getMeteorData => {
  const [meteorData, setMeteorData] = useState({});

  useEffect(() => {
    let returnFunction;

    computation = Tracker.nonreactive(() =>
      Tracker.autorun(c => {
        setMeteorData(getMeteorData());
      })
    );

    return () => {
      computation.stop();
    };
  });

  return meteorData;
};

// function myPage(props) {
//   const [ loading ] = useMeteorSubscription('entries');
//   const { entries } = useMeteorData(() => ({
//     entries: Entry.find().fetch()
//   }));

//   if(loading) return (<div>Loading entries ...</div>);

//   return (
//     <ul>
//       {entries.map((entry) => (
//         <li>Entry: {entry.title}</li>
//       ))}
//     </ul>
//   );
// }
// https://github.com/leoc/react-meteor-hooks-example
