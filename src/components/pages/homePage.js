import React, { Component } from 'react';

class HomePage extends Component {

  constructor(props){
    super();
    this.state ={
      articles:[]
    };
  }
  componentDidMount(){
    var url = "https://newsapi.org/v1/articles?source=techcrunch&apiKey=da0d51d88e7449deb13089b0d30ed727";
    fetch(url)
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
          <a class="btn-floating btn-small waves-effect hideOnMaxDevice pull-right"><i class="material-icons pink darken-1">navigate_next</i></a>
          <h5 class="m-l-md p-t-sm fontColor fontBold">LATEST NEWS
          <small><a href="#" class="p-r-sm fontColor pull-right animate hideOnMobile">VIEW MORE >></a></small></h5>
          <div class="m-b-sm m-t-md" id="headingLine"></div>
          {
          this.state.articles.map((article, key) =>
                <div class="row m-b-xs">
                    <div class="col s12 m4 l3">
                      <img class="responsive-img sidebarImage" src={article.urlToImage}/>
                    </div>
                    <div class="col s9">
                      <h5 class="header fontBold animate">{article.title}</h5>
                      <div class="card-content">
                        <p id="articleDescription">{article.description}</p>
                        <h6> {this.time(article.publishedAt)}  | by  {article.author}</h6>
                      </div>
                    </div>
                </div>
          )
         }
         </div>
       );
  }
  time(time){
    var position = time.indexOf('T');
    var date = time.substring(0, position);
    var finalTime = time.substring(position+1,16);
      return date+" | "+finalTime;

  }
}


export default HomePage;
