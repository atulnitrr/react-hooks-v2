import React, { useState } from "react";
import "./App.css";
import Joke from "./Joke";
import Stories from "./Stories";
import Task from "./Task";
import Gallary from "./Gallary";

function App() {
  const [userQuery, setQuery] = useState("");
  const [showGallery, setShowGallery] = useState(true);

  const queryHandler = (e) => {
    setQuery(e.target.value);
    console.log(userQuery);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };
  return (
    <>
      <h1>Hello Atul</h1>
      <div className="form">
        <input
          type="text"
          onChange={queryHandler}
          onKeyPress={handleKeyPress}
          placeholder="Google search "
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />

      <hr />

      <Task></Task>
      <hr />
      <div>
        {showGallery ? <Gallary></Gallary> : ""}
        <button onClick={toggleGallery}>
          {" "}
          {showGallery ? "Hide" : "Show"} Gallery
        </button>
      </div>
      <hr />
      <Stories />
    </>
  );
}

export default App;
