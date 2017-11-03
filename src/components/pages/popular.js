import React, { Component } from 'react';

class Popular extends Component {

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
          <div class="hoverable">
            <a class="btn-floating btn-small waves-effect hideOnMaxDevice pull-right">
                <i class="material-icons pink darken-1">navigate_next</i>
            </a>
            <h5 class="m-l-md p-t-sm fontColor fontBold">POPULAR
              <small>
                  <a href="#" class="fontColor pull-right animate hideOnMobile p-r-sm">VIEW MORE >></a>
              </small>
            </h5>
            <div class="m-b-sm m-t-md" id="headingLine"></div>
            <div class="row">
                {
                  this.state.articles.map((article, key) =>
                  <div class="col s12 m6 13">
                    <div class="card small">
                      <div class="card-image">
                        <img class="responsive-img" src={article.urlToImage}/>
                        <div class="card-title">
                            <h6 class="header fontBold">{article.title}</h6>
                        </div>
                      </div>
                      <div class="card-content p-xs">
                          <h6 class="header fontBold">{article.description}</h6>
                          <a href={article.url} class="waves-effect waves-light btn pull-right">full story</a>
                      </div>
                    </div>
                  </div>
                  )
                }
            </div>
         </div>
       );
   }
}


export default Popular;
