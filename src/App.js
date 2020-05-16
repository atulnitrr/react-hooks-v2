import React, { useState } from "react";
import "./App.css";
import Joke from "./Joke";
import Stories from "./Stories";
import Task from "./Task";

function App() {
  const [userQuery, setQuery] = useState("");

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
      <Stories />
    </>
  );
}

export default App;
