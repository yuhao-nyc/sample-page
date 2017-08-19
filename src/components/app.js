import React, { Component } from 'react';
import NavBar from './navbar';
import SliderComponent from './slider';
import Masonry from './masonry-block';
import Footer from './footer';

export default class App extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <SliderComponent />
          <Masonry />
          <Footer />
      </div>
    );
  }
}
