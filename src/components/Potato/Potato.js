import React from "react";
import potatoImage from "../../assets/potato.jpg";

const Potato = props => {
  return <img src={potatoImage} alt="" onClick={props.clickedPotato} />;
};

export default Potato;
