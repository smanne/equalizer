import 'rc-slider/assets/index.css';
import React, { Component } from 'react'
import RCSlider from 'rc-slider';

export default class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      railColor: '#37EF50'
    }
  }

  componentWillReceiveProps(newProps) {
    const { value } = this.props;
    if (newProps.value !== value) {
      this.setState({value: newProps.value, railColor: this.getRailColor(newProps.value)});
    }
  }

  getRailColor = (value) => {
    let railColor;
    if (value < -6) {
      railColor = "#ff0000";
    } else if (value < 8 ) {
      railColor = "#37EF50"
    } else {
      railColor = "#696969"
    }
    return railColor;
  }

  onSliderChange = (value) => {
    this.setState({value: -value, railColor: this.getRailColor(value)});
    this.props.onChange(this.props.label, -value);
  }

  render() {
    const { label } = this.props;
    return (
      <div className="equalizer-sliderContainer">
        <RCSlider
          value={-this.state.value}
          vertical
          min={-12}
          max={12}
          railStyle={{ width: '10px', backgroundColor: '#DCDCDC'}}
          trackStyle={{ width: '10px', backgroundColor: this.state.railColor }}
          handleStyle={{ width: '20px', height: '20px' }}
          onChange={this.onSliderChange}
          defaultValue={0}
        />
        <div className="equalizer-sliderLabel">{label}</div>
      </div>
    )
  }
}
