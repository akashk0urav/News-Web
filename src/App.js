import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import LoadingBar from "react-top-loading-bar";
import NewsComponent from "./Components/NewsComponent";
import { BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";
// 46bed2362890412aa99dfe1b47094e2c
// f6a66865f73f414ea0f5eb3308ef3ef8;
// 291c7235d7334846a451f4942a439414
export default class App extends Component {
  key = process.env.REACT_APP_KEY;
  state = {
    progress: 0,
  };
  setprogress = (pro) => {
    this.setState({
      progress: pro,
    });
  };
  render() {
    return (
      <div className="main-app">
        <Router>
          <LoadingBar
            color="blue"
            progress={this.state.progress}
            height="6px"
            // onLoaderFinished={this.setprogress(0)}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <NewsComponent
                  key="general"
                  pageSize={6}
                  country="us"
                  apiKey={this.key}
                  setprogress={this.setprogress}
                  category="General"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <NewsComponent
                  key="health"
                  pageSize={6}
                  country="in"
                  apiKey={this.key}
                  setprogress={this.setprogress}
                  category="Health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <NewsComponent
                  key="health"
                  pageSize={6}
                  country="in"
                  setprogress={this.setprogress}
                  apiKey={this.key}
                  category="Science"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <NewsComponent
                  key="business"
                  pageSize={6}
                  country="in"
                  apiKey={this.key}
                  setprogress={this.setprogress}
                  category="Business"
                />
              }
            />
          {/* this code is for doccumentat */}
          {/* hello my name is raghvendra */}
            <Route
              exact
              path="/technology"
              element={
                <NewsComponent
                  key="technology"
                  pageSize={6}
                  country="in"
                  apiKey={this.key}
                  setprogress={this.setprogress}
                  category="Technology"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <NewsComponent
                  key="sports"
                  pageSize={6}
                  country="in"
                  apiKey={this.key}
                  setprogress={this.setprogress}
                  category="Sports"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <NewsComponent
                  key="Entertainment"
                  pageSize={6}
                  country="in"
                  apiKey={this.key}
                  setprogress={this.setprogress}
                  category="entertainment"
                />
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
