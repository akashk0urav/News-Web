import React, { Component } from "react";
import "./NewsItem.css";
export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div
        className="container my-3 mx-4"
        style={{
          height: "25rem",
        }}
      >
        <div
          className="card "
          style={{ width: "18rem", height: "26rem", margin: "auto" }}
        >
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description} ...</p>
            <p className="card-text">
              <small className="text-warning">
                {" "}
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
