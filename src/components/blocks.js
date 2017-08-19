import React, { Component } from 'react';

export default class Blocks extends Component {

  render() {

    const imgId = [1, 2, 3, 4, 5, 6];
    const date = ['FEBRUARY 10 2017'];
    const desc = ['Bureaux exquisite delightful carefully curated soft power.'];
    const author = ['LOREM IPSUM'];

    return (
      <div className="col-sm-4">
          <div>
            <img src="../style/img/img1.png" /> <br />
            FEBRUARY 10 2017
            Bureaux exquisite delightful carefully curated soft power.
            Presented by <a href="#">LOREM IPSUM</a>
          </div>

          <div>
            <img src="../style/img/img2.png" /> <br />
            FEBRUARY 10 2017
            Bureaux exquisite delightful carefully curated soft power.
            Presented by <a href="#">LOREM IPSUM</a>
          </div>
      </div>
    )
  }
}
