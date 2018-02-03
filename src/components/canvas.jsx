import React, { Component } from 'react';
import { decode } from 'base64-stream';

import './canvas.css';

export default class Canvas extends Component {

  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');
    const video = this.refs.video;
    let that = this;

    navigator.getUserMedia({
      video: true
    },(stream) => {
      video.src = window.URL.createObjectURL(stream);
      video.play()
    },(err) => {
      console.log(err);
    });

    video.addEventListener('play', function() {
      setInterval(() => {
        ctx.drawImage(this, 0, 0);
        that.findObjects(canvas);
      }, 1000/30);
      
    });
    video.style.display = 'none';
  }

  async findObjects(canvas) {
    const data = canvas.toDataURL().slice(22);
    const imageFile = decode(data);
  }

  render() {
    const { width, height } = this.props;
    
    return (
      <div>
        <video ref='video' width={width} height={height} />
        <canvas ref='canvas' width={width} height={height} />
      </div>
    );
  }
}