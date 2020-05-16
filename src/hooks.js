import react, { useState, useEffect } from "react";

export const useFetch = (url, initialValue) => {
  const [response, setResponse] = useState(initialValue);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setResponse(res));
  }, []);

  return response;
};
