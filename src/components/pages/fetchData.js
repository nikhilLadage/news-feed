import React, { Component } from 'react';
import Request from 'superagent';
import _ from 'lodash';
class HomePage extends Component {
  constructor(){
    super();
    this.state = {};
  }
  componentWillMount(){
    var url = '';
    Request.get(url).then((res)=> {
      this.state({
        articles : res.articles
      });
    });
  }
  render() {
    var articles = _.map(this.state.articles, (article) => {
      return <li>{article.title}</li>;
    });
        return (
      <section>
          <div class="container">
              <h3>Home Page</h3>
              <p>"Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."</p>
              <ul>{articles}</ul>
          </div>
      </section>
    );
  }
}
