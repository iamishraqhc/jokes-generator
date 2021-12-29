import { useRef, useState } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

const App = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setFirstName] = useState("James");
  const [lastName, setLastName] = useState("Wilson");
  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <center>
        <h1>Joke Generator</h1>
        <h4>Enter your name and we will generate a joke</h4>
        <form>
          <input type="text" placeholder="First Name" ref={firstNameRef} />
          <input type="text" placeholder="Last Name" ref={lastNameRef} />
          <input type="submit" onClick={generateJoke} value="Generate Joke" />
        </form>
        <h3>{joke}</h3>
      </center>
    </div>
  );
};

export default App;
