import React from 'react';
import './App.css';
import Clock from './Clock';
import WrappedCounter from './Counter';


class Data extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      isClock: true
    }
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ isClock: !this.state.isClock })}>Click me</button>
        <WrappedCounter />
        {this.state.isClock && <Clock />}
      </div>
    )
  }
}

const App = () => {
  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;

