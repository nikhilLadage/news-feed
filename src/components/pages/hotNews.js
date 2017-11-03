import React, { Component } from 'react';

class HotNews extends Component {

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
        return (
          <div class="news pink darken-1">
              <span class="p-t-n hide-on-med-and-down">HOT NEWS</span>
              <span class="p-t-n hide-on-med-and-up show-on-medium-and-down">
                  <i class="material-icons">whatshot</i>
              </span>
              <ul>
                {
                  this.state.articles.map((article, key) =>
                    <li class="m-l-md">
                        <a href="#">{article.title}</a>
                    </li>
                  )
                 }
              </ul>
         </div>
       );
    }
}


export default HotNews;
