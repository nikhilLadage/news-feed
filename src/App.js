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
import Popular from './components/pages/popular';
import HotNews from './components/pages/hotNews';
import NewsGrid from './components/pages/newsGrid';
//includes
import './Assets/css/default.min.css';
import './Assets/css/margins.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
              <div class="col s12">
                  <HotNews />
                  <NewsGrid />
              </div>
              <div class="row">
                  <div id="newsPage" class="col s12 m9">
                      <Popular />
                      <HomePage />
                  </div>
                  <div class="col s12 m3">
                      <Sidebar/>
                  </div>
              </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
