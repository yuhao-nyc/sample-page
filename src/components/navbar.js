import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
        <nav className="navbar navbar-light sticky-top  header-navbar">
          <div className="container">
              <img className="img-fluid" src="../style/img/logo.png" />
              <div className="float-right menu-icon">
                <span className="d-xs-none">212.555.5555</span>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                LOGIN
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="#"><img src="../style/img/hamburg.png" /></a>
              </div>
            </div>
        </nav>
    )
  }
}
