import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: " ",
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    return (
      <div>
        Latitude: {this.state.lat}
        <br />
        Error: {this.errorMessage}
      </div>
    );
  }
}

export default App;
