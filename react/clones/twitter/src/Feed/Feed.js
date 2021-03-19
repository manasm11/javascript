import React from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import ReactList from "react-list";

function Feed() {
  return (
    <div className="feed">
      {/** Header */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/** TweetBox */}
      <TweetBox />
      {/* <ReactList itemRenderer={()=>Post} length={1000} type="uniform" /> */}

      {/** Post */}
      {/** Post */}
      {/** Post */}
      {/** Post */}
      {/** Post */}
      {/** Post */}
      {/** Post */}
      {/** Post */}
    </div>
  );
}

export default Feed;
