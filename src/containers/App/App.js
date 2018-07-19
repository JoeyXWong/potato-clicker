import React, { Component } from "react";
import Layout from "../../components/UI/Layout";

class App extends Component {
  state = {
    totalPotatoes: 0,
    potatoGeneration: 0,
    clickUpdateAmount: 1.0,
    upgradesList: [{ name: "Potato Farmer", cost: 25, increase: 1 }]
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.generatePotatoes(), 1000);
  }

  generatePotatoes = () => {
    this.setState(prevState => {
      return {
        totalPotatoes: prevState.totalPotatoes + prevState.potatoGeneration
      };
    });
  };

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  handleIncrementClickCounter = () => {
    this.setState(prevState => {
      return {
        totalPotatoes: prevState.totalPotatoes + prevState.clickUpdateAmount
      };
    });
  };

  handleUpgrade = upgrade => {
    this.setState(prevState => {
      const indexOfChange = [...prevState.upgradesList].findIndex(item => {
        return item.name === upgrade.name;
      });
      console.log("Index of change", indexOfChange);
      const changedUpgrades = [...prevState.upgradesList];
      console.log("New Obj", changedUpgrades);
      changedUpgrades[indexOfChange] = {
        name: upgrade.name,
        cost: (upgrade.cost * 1.1).toFixed(0),
        increase: (upgrade.increase * 1.1).toFixed(2)
      };
      return {
        potatoGeneration: prevState.potatoGeneration + upgrade.increase,
        totalPotatoes: prevState.totalPotatoes - upgrade.cost,
        upgradesList: changedUpgrades
      };
    });
  };

  render() {
    return (
      <Layout
        clicked={this.handleIncrementClickCounter}
        totalPotatoes={this.state.totalPotatoes}
        upgradesList={this.state.upgradesList}
        handleUpgrade={this.handleUpgrade}
      />
    );
  }
}

export default App;
