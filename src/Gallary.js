import React, { useState, useEffect } from "react";

import PICTURES from "./data/pictures";
const SECONDS = 1000;

function Gallary() {
  const [index, setIndex] = useState(0);

  const [delay, setDealy] = useState(3 * SECONDS);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + increment) % PICTURES.length);
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [delay, increment]);

  return (
    <div className="Gallery">
      <img src={PICTURES[index].image} alt="gallry pick" />
      <div className="multiform">
        <div>
          Gallery transition delay in (seoncds):
          <input
            onChange={(e) =>
              setDealy(
                Number(e.target.value) <= 0
                  ? SECONDS
                  : Number(e.target.value) * SECONDS
              )
            }
            type="number"
            name=""
            id=""
          />
        </div>

        <div>
          Increment value:
          <input
            type="number"
            onChange={(e) => {
              const value = Number(e.target.value);
              setIncrement(value < 1 ? 1 : value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallary;
