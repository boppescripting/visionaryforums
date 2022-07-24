import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from "axios";

// Components
import Nav from './components/Nav';

function App() {
  const [userCount, setUserCount] = useState(0);

  const insert = () => {
    const const_vals = ['test', 'testPassword', 'testEmail']
    Axios.post(process.env.REACT_APP_APILINK + 'insert/user', {values: const_vals}).then(() => {})
    setUserCount((prev) => prev + 1)
  }

  useEffect(() => {
    Axios.get(process.env.REACT_APP_APILINK + 'get/users').then((response) => {
      setUserCount(response.data.length)
    });
  }, [])

  return (
    <div className="App">
      {/* <Nav /> */}
      <p>User Count: {userCount}</p>
      <button onClick={insert}>Add user</button>
    </div>
  );
}

export default App;
