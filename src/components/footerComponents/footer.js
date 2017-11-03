import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer pink darken-4">
          <div class="container">
            <div class="row">
              <div class="col l5 s12">
                  <a href="#!" class="brand-logo p-l-sm m-t-sm"><img height="40" width="40" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/RSAF_Roundel_%281990%E2%80%93present%29.svg/1024px-RSAF_Roundel_%281990%E2%80%93present%29.svg.png"/>
                      <span class="white-text">NewsFeed</span>
                  </a>
                  <p class="grey-text text-lighten-4">123 6th St.
                    Melbourne, FL 32904</p>
              </div>
              <div class="col l3 offset-12 s12">
                  <h5 class="white-text">Links</h5>
                  <ul>
                    <li><a class="grey-text text-lighten-3" href="#!">About Us</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Newsletter</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Sitemap</a></li>
                  </ul>
              </div>
              <div class="col l4 offset-12 s12">
                <h5 class="white-text">More</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Entertainment</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Sports</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Tv</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Gallery</a></li>
                </ul>
              </div>
            </div>
          </div>
          <h5 class="m-l-md center">FOLLOW US</h5>
          <div class="m-b-sm m-t-md" id="headingLine"></div>
          <div class="row center">
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-twitter"></a>
              <a href="#" class="fa fa-google"></a>
              <a href="#" class="fa fa-linkedin"></a>
              <a href="#" class="fa fa-instagram"></a>
              <a href="#" class="fa fa-pinterest"></a>
          </div>
          <div class="footer-copyright pink darken-1">
            <div class="container center">
                Copyright © 2017 newsBuzz.com All rights reserved.
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
