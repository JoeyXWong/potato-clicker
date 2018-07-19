import React, { Fragment } from "react";
import Upgrade from "./Upgrade";

const Upgrades = props => {
  return (
    <Fragment>
      <h1>Upgrades</h1>
      {props.upgradesList.map((item, index) => {
        return (
          <Upgrade
            key={index}
            totalPotatoes={props.totalPotatoes}
            upgradeItem={() => props.upgradeItem(item)}
            {...item}
          />
        );
      })}
    </Fragment>
  );
};

export default Upgrades;
