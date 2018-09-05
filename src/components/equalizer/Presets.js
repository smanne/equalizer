import React, { Component } from 'react'
import Select from '../Select';

export default class Presets extends Component {
  render() {
    const {presetLabels} = this.props;
    return (
      <div>
        <Select className="presets" onChange={this.props.onPresetChange} options={presetLabels} placeholder="Presets" />
      </div>
    )
  }
}
