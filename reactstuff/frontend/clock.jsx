import React from 'react';

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }

  render() {
    let hours = this.state.time.getHours().toString();
    let minutes = this.state.time.getMinutes().toString();
    let seconds = this.state.time.getSeconds().toString();
    console.log(this.interval);

    if (hours.length === 1) {hours = "0" + hours; }
    if (minutes.length === 1) {minutes = "0" + minutes; }
    if (seconds.length === 1) {seconds = "0" + seconds; }

    let str = hours + ":" + minutes + ":" + seconds;
    return (
      <div className="clock">
      <h1> suhh duuh</h1>
      {this.state.time.toDateString()}
      {str}
      </div>
    );
  }

  tick() {
    this.setState({time: new Date() });
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }
}

export default Clock;
