import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';

class Sidebar extends Component {
  constructor(props){
    super();
    this.state ={
      articles:[]
    };
  }
  componentDidMount(){
    var url = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=da0d51d88e7449deb13089b0d30ed727";
    fetch(url) // Call the fetch function passing the url of the API as a parameter
    .then((res) => res.json())
    .then((res) => {
      if (res.status >= 400) {
        throw new Error("Bad response from server");
      }
      if(res.articles){
        return this.setState({
          articles : res.articles
        });
      }
    })
  }
  render() {
    //$(".button-collapse").sideNav();
    return (
      <div class="row show-on-large" id="">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
              <div class="col s10">
                  <input placeholder="Search" id="icon_prefix" type="text" class="validate"/>
              </div>
              <div class="col s2" id="searchKeyword">
                <a class="btn-floating btn-medium waves-effect pink darken-1"><i class="material-icons">search</i></a>
              </div>
          </div>
        </div>
      </form>
      <div class="p-sm center">
          <h5 class="fontColor fontBold">TOP NEWS</h5>
      </div>
      {
        this.state.articles.map((article, key) =>
          <div class="row">
              <div class="divider"></div>
              <div class="section">
                  <div class="col s12">
                      <div class="col s3 p-n p-l-xs">
                        <img class="responsive-img sidebarImage" src={article.urlToImage}/>
                      </div>
                      <div class="col s9">
                        <h6 class="header fontBold">{article.title}</h6>
                        <div class="card-content">
                          <h6><small>by  {article.author}</small></h6>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        )
      }
      </div>
    );
  }
}

export default Sidebar;
