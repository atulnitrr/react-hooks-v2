import React, { useState, useEffect } from "react";

import SingleStory from "./SingleStory";
import { useFetch } from "./hooks";

function Stories() {
  const stories = useFetch(
    "https://news-proxy-server.appspot.com/topstories",
    []
  );

  return (
    <div className="Stories">
      <h3>Stories</h3>
      {stories.map((story) => {
        const { id } = story;
        return <SingleStory story={story} key={id}></SingleStory>;
      })}
    </div>
  );
}

export default Stories;
