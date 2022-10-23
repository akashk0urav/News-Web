import React, { Component } from "react";
import NewsItem from "./NewsItem";
import "./NewsComponent.css";
import loader from "./loader3.gif";
import InfiniteScroll from "react-infinite-scroll-component";
export class NewsComponent extends Component {
  // props = this.props;
  articles = [
    // {
    //   source: {
    //     id: null,
    //     name: "WABC-TV",
    //   },
    //   author: null,
    //   title:
    //     "NYC Crime: Suspect arrested in unprovoked stabbing death in Bronx subway station - WABC-TV",
    //   description:
    //     "Police have made an arrest in the deadly, unprovoked stabbing of a man in the subway on Thursday.",
    //   url: "https://abc7ny.com/subway-crime-slashing-saquan-lemons-charles-moore/12306010/",
    //   urlToImage:
    //     "https://cdn.abcotvs.com/dip/images/12302315_100722-wabc-subway-attack-bronx-img.jpg?w=1600",
    //   publishedAt: "2022-10-09T06:05:23Z",
    //   content:
    //     "MORRIS HEIGHTS, Bronx (WABC) -- Police have made an arrest in the deadly stabbing of a man in a Bronx subway station on Thursday.\r\nSaquan Lemons, 27, of the Bronx was arrested Saturday afternoon on c… [+2583 chars]",
    // },
  ];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      page: 1,
      length: 0,
      loading: true,
      results: this.totalResults,
    };
    document.title = this.props.category;
  }
  updateNews = async () => {
    this.props.setprogress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${
      this.props.pageSize
    }&category=${this.props.category}`;
    let data = await fetch(url);
    this.props.setprogress(50);
    let parsData = await data.json();
    this.props.setprogress(70);
    console.log(parsData);
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsData.articles),
      length: this.articles.length,
      loading: false,
    });
    this.props.setprogress(100);
    console.log(this.articles);
  };
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    this.updateNews();
  };
  // previousPage = async () => {
  //   this.updateNews(-1);
  // };
  // nextPage = async () => {
  //   this.updateNews(1);
  // };
  render() {
    return (
      <div>
        <h1 className="text-center">Top {this.props.category} Headlines </h1>
        <div>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={
              <div className="container text-center">
                <img src={loader} alt="Loading" className="gif" />
              </div>
            }
          >
            <div className="container">
              <div className="d-flex row">
                {this.state.articles.map((element, index) => {
                  return (
                    <div key={index} className="col-md-4">
                      <NewsItem
                        title={element.title ? element.title.slice(0, 30) : " "}
                        description={
                          element.description
                            ? element.description.slice(0, 45)
                            : " "
                        }
                        source={element.source.name}
                        imageUrl={
                          element.urlToImage
                            ? element.urlToImage
                            : "https://images.pond5.com/news-animation-intro-footage-055718338_iconl.jpeg"
                        }
                        newsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>
        {/* <div className="d-flex justify-content-between">
        <button
        disabled={this.state.page <= 1}
        type="button"
        className="btn btn-dark my-2"
          onClick={this.previousPage}
          >
          &larr; Previous
          </button>
          <button
          type="button"
          className="btn btn-dark mx-3 my-2"
          onClick={this.nextPage}
          disabled={
            this.state.page + 1 >
            Math.ceil(this.state.results / this.props.pageSize)
          }
          >
          Next &rarr;
          </button>
        </div> */}
      </div>
    );
  }
}

export default NewsComponent;
