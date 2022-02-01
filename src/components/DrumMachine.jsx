import React from "react";
import "./DrumMachine.css";

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayText: "",
      clipName: [
        "Heater 1",
        "Heater 2",
        "Heater 3",
        "Heater 4",
        "Clap",
        "Open HH",
        "Kick n hat",
        "Kick",
        "Closed HH",
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    for (let i = 0; i < 9; i++) {
      const element = document.getElementsByClassName("drum-pad")[i];
      element.addEventListener("click", () => {
        this.setState({
          displayText: this.state.clipName[i],
        });
        let elementText = element.textContent;
        document.getElementById(elementText).play();
      });
    }
  }
  render() {
    return (
      <div id="drum-machine">
        <h1 class="drum-title">Drum Machine</h1>
        <div className="container">
          <div className="buttonDiv">
            <button
              className="drum-pad"
              id="heater1"
              onClick={this.handleClick}
            >
              Q
              <audio
                className="clip"
                id="Q"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              ></audio>
            </button>

            <button
              className="drum-pad"
              id="heater2"
              onClick={this.handleClick}
            >
              W
              <audio
                className="clip"
                id="W"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              ></audio>
            </button>
            <button
              className="drum-pad"
              id="heater3"
              onClick={this.handleClick}
            >
              E
              <audio
                className="clip"
                id="E"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              ></audio>
            </button>
            <button
              className="drum-pad"
              id="heater4"
              onClick={this.handleClick}
            >
              A
              <audio
                className="clip"
                id="A"
                src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
              ></audio>
            </button>
            <button className="drum-pad" id="clap" onClick={this.handleClick}>
              S
              <audio
                className="clip"
                id="S"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              ></audio>
            </button>
            <button
              className="drum-pad"
              id="open_hh"
              onClick={this.handleClick}
            >
              D
              <audio
                className="clip"
                id="D"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              ></audio>
            </button>
            <button
              className="drum-pad"
              id="kick_n_hat"
              onClick={this.handleClick}
            >
              Z
              <audio
                className="clip"
                id="Z"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              ></audio>
            </button>
            <button className="drum-pad" id="kick" onClick={this.handleClick}>
              X
              <audio
                className="clip"
                id="X"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              ></audio>
            </button>
            <button
              className="drum-pad"
              id="closed_hh"
              onClick={this.handleClick}
            >
              C
              <audio
                className="clip"
                id="C"
                src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
              ></audio>
            </button>
          </div>
          <div id="display">{this.state.displayText}</div>
        </div>
      </div>
    );
  }
}

export default DrumMachine;
