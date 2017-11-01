import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

import $ from 'jquery';

class Header extends Component {

  render() {
  //  $(".button-collapse").sideNav();
    return (
      <header>
      <nav>
        <div class="nav-wrapper pink darken-4">
          <a href="#!" class="brand-logo p-l-sm">NewsBuzz</a>
          <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
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
          <ul class="side-nav" id="mobile-demo">
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
        </div>
      </nav>
      </header>
    );
  }
}

export default Header;
