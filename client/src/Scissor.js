import React from "react";
import scissor from "./assets//scisssor.gif";

const Scissor = () => (
  <img src={scissor} alt="Loading..." style={spinnerStyle} />
);

const spinnerStyle = {
  width: "80px",
  display: "block",
  margin: "auto",
};

export default Scissor;


