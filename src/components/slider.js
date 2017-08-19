import React, { Component } from 'react';
import Slider from 'react-slick';

export default class SliderComponent extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 1250,
      autoplay: true,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
      className: 'sliders',
      touchMove: true
    };
    return (
      <Slider {...settings}>
        <div>
          <img className="img-fluid" src="../style/img/landing1.png" />
        </div>
        <div>
          <img className="img-fluid" src="../style/img/landing2.png" />
        </div>
        <div>
          <img className="img-fluid" src="../style/img/landing3.png" />
        </div>
      </Slider>
    );
  }
}
