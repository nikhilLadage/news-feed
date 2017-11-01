import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer class="page-footer pink darken-4">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">NewsBuzz</h5>
                <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">About Us</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Privacy Policy</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Newsletter</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Sitemap</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright pink darken-1">
            <div class="container">
            Copyright © 2017 newsBuzz.com All rights reserved
            </div>
          </div>
        </footer>

    );
  }
}

export default Footer;
