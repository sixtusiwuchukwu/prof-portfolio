import React, { createContext } from "react";

export const SampleContext = createContext();

export const SampleProvider = (props) => {
  const storage = JSON.parse(window.sessionStorage.getItem("local"));

  return (
    <SampleContext.Provider value={{ storage }}>
      {props.children}
    </SampleContext.Provider>
  );
};
