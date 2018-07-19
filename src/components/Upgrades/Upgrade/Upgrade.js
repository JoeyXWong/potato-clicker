import React, { Fragment } from "react";

const Upgrade = props => {
  return (
    <Fragment>
      <div>Upgrade name: {props.name}</div>
      <div>Cost: {props.cost} </div>
      <div>Increase Potato Generation by: {props.increase}</div>
      <button
        disabled={props.cost > props.totalPotatoes}
        onClick={props.upgradeItem}
      >
        Upgrade
      </button>
    </Fragment>
  );
};

export default Upgrade;
