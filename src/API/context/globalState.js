import React, { createContext, useState } from "react";

export const SampleContext = createContext();

export const SampleProvider = (props) => {
  const [activeuser, setActiveuser] = useState({});
  const [collections, setcollections] = useState({});

  const Updatestate = (newstate) => {
    setActiveuser(newstate);
  };

  return (
    <SampleContext.Provider value={{ activeuser, Updatestate }}>
      {props.children}
    </SampleContext.Provider>
  );
};
