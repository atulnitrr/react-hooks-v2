import React from "react";

function SingleStory(props) {
  const { by, title, url, id, time } = props.story;
  return (
    <div>
      <a href={url}>{title}</a>
      <div>
        by {by} - {new Date(time * 1000).toLocaleString()}
      </div>
    </div>
  );
}

export default SingleStory;
