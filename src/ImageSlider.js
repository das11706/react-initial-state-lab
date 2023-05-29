// your ImageSlider code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {
  constructor() {
    super();
    this.state = {
      currentSlideIndex: 0,
    };
  };

  updateSlide = () => {
    const newCurrentSlideIndex = this.state.currentSlideIndex + 1;
    this.setState({
      currentSlideIndex: newCurrentSlideIndex,
    });
  };


  render() {
    return (
      <div onClick={this.updateSlide}>I am on slide {this.state.currentSlideIndex}</div>
    );
  }
}

