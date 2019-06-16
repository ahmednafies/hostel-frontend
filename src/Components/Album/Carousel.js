import React, { Component } from 'react'
import BackgroundSlider from 'react-background-slider'
import { common } from './Photos/Common';
 
class Carousel extends Component {

  render () {

    return (
      <div>
        <BackgroundSlider images={common.map(photo => photo.src)} duration={3} transition={2} />
      </div>
    )
  }
}

export default Carousel