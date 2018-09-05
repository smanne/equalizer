import React, { Component } from 'react';

export default class Select extends Component {

  constructor(props, context) {
    super(props, context);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  renderOptions(options, placeholder) {
    var optionsDom = [];
    if (placeholder) {
      optionsDom.push(<option key="" value="">{placeholder}</option>);
    }
    if (options !== undefined) {
      options.map(option => {
        return optionsDom.push(<option key={option} value={option}>{option}</option>);  
      })
    }
    return optionsDom;
  }

  render() {
    return (
      <select ref="selectBox" value={this.props.value} className={this.props.className} onChange={this.handleChange}>
        {this.renderOptions(this.props.options, this.props.placeholder)}
      </select>
    );
  }
}
