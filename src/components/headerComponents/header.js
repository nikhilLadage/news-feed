import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Header extends Component {
    render() {
      return (
        <header>
            <nav>
              <div class="nav-wrapper pink darken-4">
                <h6>
                  <a href="#!" class="brand-logo p-l-sm m-t-sm">
                    <img height="40" width="40" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/RSAF_Roundel_%281990%E2%80%93present%29.svg/1024px-RSAF_Roundel_%281990%E2%80%93present%29.svg.png"/>
                    <small>NewsFeed</small>
                  </a>
                </h6>
                <a href="#" data-activates="mobile-demo" class="button-collapse" ref="toggle"><i class="material-icons">menu</i></a>
                  <ul class="right hide-on-med-and-down">
                    <li><a class="grey-text text-lighten-3" href="#!">City</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">India</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">World</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Business</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Tv</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Entertainment</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Sports</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Blogs</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Gallery</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Life & style</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Live Tv</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Apps</a></li>
                  </ul>
                  <ul class="side-nav navigation" id="mobile-demo">
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">City</a></li>
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">India</a></li>
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">World</a></li>
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">Business</a></li>
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">Tv</a></li>
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">Entertainment</a></li>
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">Sports</a></li>
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">Blogs</a></li>
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">Gallery</a></li>
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">Life & style</a></li>
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">Live Tv</a></li>
                    <li><a class="nav-item grey-text text-lighten-3" href="#!">Apps</a></li>
                  </ul>
              </div>
            </nav>
        </header>
      );
   }
}

export default Header;
