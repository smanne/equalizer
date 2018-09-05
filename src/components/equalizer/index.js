import React, { Component } from 'react'
import './equalizer.css';
import SliderGroup from './SliderGroup';
import Presets from './Presets';
import presetConstants from '../../constants/presets';

export default class Equalizer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      equalizerValues: {
        "60": 0,
        "310": 0,
        "1k": 0,
        "6k": 0,
        "16k": 0
    }
    }
  }

  onSliderGroupChange = (key, value) => {
    let equalizerValues = this.state.equalizerValues;
    equalizerValues[key] = value;
    this.setState({equalizerValues});
  }

  onPresetChange = (preset) => {
    if (presetConstants[preset])
    this.setState({equalizerValues: presetConstants[preset]})
  }

  render() {
    return (
      <div className="equalizer">
        <Presets onPresetChange={this.onPresetChange} presetLabels={Object.keys(presetConstants)} />
        <SliderGroup onChange={this.onSliderGroupChange} value={this.state.equalizerValues} />
        <div className="equalizer-values">Values: {JSON.stringify(this.state.equalizerValues)}</div>
      </div>
    )
  }
}
