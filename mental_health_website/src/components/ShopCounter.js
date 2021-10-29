import React, { Component } from 'react';

import {Button} from './ShopCounterButton';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

  }

  handleCount(value) {
    this.setState((prevState) => ({ count: prevState.count + value }));
  }

  render() {


    return (
      <div className = "ButtonCounterContainer">
        <Button sign="+" count={this.state.count} updateCount={this.handleCount.bind(this)} />
        &nbsp;&nbsp;&nbsp;{this.state.count}&nbsp;&nbsp;&nbsp;
        <Button sign="-" count={this.state.count} updateCount={this.handleCount.bind(this)} />
      </div>
    );
  }
}

export default App;
