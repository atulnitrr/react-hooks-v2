import React, { useEffect, useState } from "react";

const Joke = (props) => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then((res) => res.json())
      .then((res) => setJoke(res));
  }, []);

  const { setup, punchline } = joke;
  return (
    <div>
      <h3>Joke of the session</h3>
      <p>{setup}</p>
      <p>
        <em>
          <strong>{punchline}</strong>
        </em>
      </p>
    </div>
  );
};

export default Joke;
