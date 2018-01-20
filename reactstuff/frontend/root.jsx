import React from 'react';
import Clock from "./clock";

class Root extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log("You've won!");
    return (
      <div>
        <h1>Dolla dolla bills y'all</h1>
        <Clock />
      </div>

    );
  }
}

export default Root;
