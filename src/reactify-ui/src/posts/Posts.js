import React, { Component } from "react";
import "whatwg-fetch";
import cookies from "react-cookies";
import PostInLine from "./PostInLine";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.togglePostsListClass = this.togglePostsListClass.bind(this);
  }
  state = {
    posts: [],
    postsListClass: "card"
  };

  loadPosts() {
    const endpoint = "api/posts";
    let thisComp = this;
    let lookupOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(endpoint, lookupOptions)
      .then(function(response) {
        return response.json();
      })
      .then(function(responseData) {
        console.log(responseData);
        thisComp.setState({
          posts: responseData
        });
      })
      .catch(function(error) {
        console.log("error", error);
      });
  }

  createPosts() {
    const endpoint = "api/posts";
    const csrfToken = cookies.load("csrftoken");
    let data = {
      slug: "",
      title: "",
      content: "",
      draft: false,
      publish: null
    };
    if (csrfToken !== undefined) {
      let lookupOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrfToken
        },
        body: JSON.stringify(data),
        credentials: "include"
      };
      fetch(endpoint, lookupOptions)
        .then(function(response) {
          return response.json();
        })
        .then(function(responseData) {
          console.log(responseData);
        })
        .catch(function(error) {
          console.log("error", error);
        });
    }
  }

  togglePostsListClass(event) {
    event.preventDefault();
    let currentListClass = this.state.postsListClass;
    if (currentListClass === "") {
      this.setState({
        postsListClass: "card"
      });
    } else {
      this.setState({
        postsListClass: ""
      });
    }
  }

  componentDidMount() {
    this.setState({
      posts: [],
      postsListClass: "card"
    });
    this.loadPosts();
  }
  render() {
    const { posts } = this.state;
    const { postsListClass } = this.state;
    return (
      <div>
        <h1>hello world อิอิ</h1>
        <button onClick={this.togglePostsListClass}>Toggle Class</button>
        {posts.length > 0 ? (
          posts.map((postItem, index) => {
            return <PostInLine post={postItem} elClass={postsListClass} />;
          })
        ) : (
          <p>No Posts Found</p>
        )}
      </div>
    );
  }
}

export default Posts;
