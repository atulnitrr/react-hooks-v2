import React, { useState, useEffect } from "react";

function Stories() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://news-proxy-server.appspot.com/topstories")
      .then((res) => res.json())
      .then((res) => {
        console.log("Response data", res);
        setStories(res);
      });
  }, []);
  return (
    <div className="Stories">
      <h3>Stories</h3>
      {stories.map((story) => {
        const { by, title, url, id, time } = story;
        return (
          <div key={id}>
            <a href={url}>{title}</a>
            <div>
              by {by} - {new Date(time * 1000).toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
