import React, { Component } from 'react'
import Slider from './Slider';

export default class SliderGroup extends Component {

  render() {
    const { value } = this.props;  
    return (
      <div className="equalizer-sliderGroup">
        <div className="equalizer-sliderGroupLabels">
            <div className="equalizer-sliderGroupLabel equalizer-sliderGroupLabel--top">
                -12 db
            </div>
            <div className="equalizer-sliderGroupLabel equalizer-sliderGroupLabel--middle">
                0 db
            </div>
            <div className="equalizer-sliderGroupLabel equalizer-sliderGroupLabel--bottom">
                +12 db
            </div>
        </div>
        {Object.keys(value).map((sliderLabel, sliderIndex) => {
            return <Slider value={value[sliderLabel]} key={sliderIndex} onChange={this.props.onChange} index={sliderIndex} label={sliderLabel} />
        })}
      </div>
    )
  }
}
