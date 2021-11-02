import { useRef, useState } from 'react';
import './App.css';
import useRandomJoke from './useRandomJoke';

function App() {
  const firstNameRef = useRef(null)
  const lastNameRef = useRef(null)

  const [firstName, setFirstName] = useState('James')
  const [lastName, setLastName] = useState('Wilson')
  const joke = useRandomJoke(firstName, lastName)

  const generateJoke = e => {
    e.preventDefault()
    setFirstName(firstNameRef.current.value)
    setLastName(lastNameRef.current.value)
  }

  return (
    <div className="App">
      <center>
        <h1>Joke Generator</h1>
        <form>
          <input placeholder="First Name" ref={firstNameRef} />
          <input placeholder="Last Name" ref={lastNameRef} />
        </form>
        <button onClick={generateJoke}>Generate Joke</button>
        <h3>{joke}</h3>
      </center>
    </div>
  );
}

export default App;
