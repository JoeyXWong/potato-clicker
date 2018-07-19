import React, { Fragment } from "react";
import Potato from "../../Potato";
import Counter from "../Counter";
import Upgrades from "../../Upgrades";

const Layout = props => {
  return (
    <Fragment>
      <Potato clickedPotato={props.clicked} />
      <Counter counter={props.totalPotatoes} counterText={`Total Potatoes: `} />
      <Upgrades
        upgradesList={props.upgradesList}
        totalPotatoes={props.totalPotatoes}
        upgradeItem={props.handleUpgrade}
      />
    </Fragment>
  );
};

export default Layout;
