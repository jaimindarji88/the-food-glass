import React, { Component } from 'react';


export default class Canvas extends Component {

  render() {
    const {width, height} = this.props;
    console.log(width, height)
    return <canvas id='video' width={width} height={height} />
  }
}