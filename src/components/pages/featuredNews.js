import React, { Component } from 'react';

class FeaturedNews extends Component {

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
          <div>
            <a class="btn-floating btn-small waves-effect hideOnMaxDevice pull-right">
              <i class="material-icons pink darken-1">navigate_next</i>
            </a>
            <h5 class="m-l-md fontColor fontBold">FEATURED NEWS
              <small>
                <a href="#" class="fontColor pull-right animate hideOnMobile p-r-sm">VIEW MORE >></a>
              </small>
            </h5>
            <div class="m-b-sm m-t-md" id="headingLine"></div>
            <div class="row">
              <div class="carousel">
                {
                  this.state.articles.map((article, key) =>
                    <a class="carousel-item" href={article.urlToImage}>
                      <img src={article.urlToImage}/>
                    </a>
                  )
                }
              </div>
            </div>
         </div>
       );
    }
}


export default FeaturedNews;
