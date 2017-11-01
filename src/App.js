import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponents/header';
import Footer from './components/footerComponents/footer';
import Sidebar from './components/sidebarComponent/sidebar';
import HomePage from './components/pages/homePage';
import FeaturedNews from './components/pages/featuredNews';
import Trending from './components/pages/trendingNews';
import HotNews from './components/pages/hotNews';
//includes
import './Assets/css/default.min.css';
import './Assets/css/margins.min.css';
import $ from 'jquery';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
              <div class="col s12">
                  <HotNews />
              </div>
              <div class="row">
                  <div id="newsPage" class="col s12 m9">
                      <Trending />
                      <Route exact path='/' component={HomePage} />
                  </div>
                  <div class="col s12 m3">
                      <Sidebar/>
                  </div>
              </div>
              <div class="row">
                    <FeaturedNews/>
              </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
