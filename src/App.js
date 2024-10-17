import React from 'react';
import './style.css'; // Ensure to import the CSS file

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div id='main'>
        <div className="clock-container">
          <h1 style={{ color: "wheat", margin: "0" }}>Digital Clock</h1>
          <div className="clock">
            {this.state.time}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
