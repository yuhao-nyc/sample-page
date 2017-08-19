import React, { Component } from 'react';

export default class Masonry extends Component {
  render() {
    return (
      <div className="container">
        <div className="sliders-text">
          <h1>Screening: <br />DVF Secret Agent Part 2</h1>
          <h4>October 15, 2017</h4>
          <h6>Join us for a private screening of DVF Secret Agent Part 2 with our special guest, director Peter Lindberg.</h6>
        </div>
        <div className="row blocks-container">
           <div className="col-lg-4 col-md-6">
              <div className="blocks">
                <img src="../style/img/img1.png" className="img-fluid" /> <br />
                <div>FEBRUARY 10 2017</div>
                <h1><a href="#">Bureaux exquisite delightful carefully curated soft power.</a></h1>
                <p>Presented by <a href="#">LOREM IPSUM</a></p>
                <hr />
              </div>
              <div className="blocks">
                <img src="../style/img/img2.png" className="img-fluid" /> <br />
                <div>JANUARY 21 2017</div>
                <h1><a href="#">Esse auroirt vebuan ryokan soft power</a></h1>
                <p>Presented by <a href="#">LOREM IPSUM</a></p>
                <hr />
              </div>
          </div>
          <div className="col-lg-4 col-md-6">
              <div className="blocks">
                <img src="../style/img/img3.png" className="img-fluid" /> <br />
                <div>FEBRUARY 2 2017</div>
                <h1><a href="#">Sharp bureaux sleepy k-pop carefully curated.</a></h1>
                <p>Presented by <a href="#">LOREM IPSUM</a></p>
                <hr />
              </div>
              <div className="blocks">
                <img src="../style/img/img4.png" className="img-fluid" /> <br />
                <div>JANUARY 18 2017</div>
                <h1><a href="#">K-pop extraordinary.</a></h1>
                <p>Presented by <a href="#">LOREM IPSUM</a></p>
                <hr />
              </div>
          </div>
          <div className="col-lg-4 col-md-6">
              <div className="blocks">
                <img src="../style/img/img5.png" className="img-fluid" /> <br />
                <div>JANUARY 27 2017</div>
                <h1><a href="#">St Moritz uniforms Beams</a></h1>
                <p>Presented by <a href="#">LOREM IPSUM</a></p>
                <hr />
              </div>
              <div className="blocks">
                <img src="../style/img/img6.png" className="img-fluid" /> <br />
                <div>JANUARY 12 2017</div>
                <h1><a href="#">Artisanal iconic cutting-edge business class.</a></h1>
                <p>Presented by <a href="#">LOREM IPSUM</a></p>
                <hr />
              </div>
          </div>
        </div>
      </div>
    )
  }
}
