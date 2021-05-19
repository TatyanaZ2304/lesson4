import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    alert("Компонент открывается");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    alert("Компонент закрывается");
  }

  tick() {
    this.setState({
      date: new Date(),
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>{this.state.date.toLocaleTimeString()}</h2>
        <h3>{this.state.counter}</h3>
      </div>
    );
  }
}


export default Clock;