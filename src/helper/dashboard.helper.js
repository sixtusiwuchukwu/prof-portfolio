import React from "react";

export const ReduceWidth = () => {
  document.querySelector(".body-content ").style = "width:94.99%";
  document.querySelector(".extend-btn").style = "display:block";
  document.querySelector(".reduce-btn").style = "display:none";
  document.querySelector(".open-close-btn-div  ").style =
    "justify-content: flex-start";
};
export const ExtendWidth = () => {
  document.querySelector(".body-content ").style = "width:80%";
  document.querySelector(".open-close-btn-div  ").style =
    "justify-content: flex-end";
  document.querySelector(".extend-btn").style = "display:none";
  document.querySelector(".reduce-btn").style = "display:block";
};
