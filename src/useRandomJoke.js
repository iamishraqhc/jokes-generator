import { useState, useEffect } from "react";
import axios from "axios";

const useRandomJoke = (firstName, lastName) => {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    const fetchJoke = async () => {
      await axios
        .get(
          `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`
        )
        .then((res) => res.data)
        .then((data) => {
          setJoke(data.value.joke);
        });
    };

    fetchJoke();
  }, [firstName, lastName]);

  return joke;
};

export default useRandomJoke;
