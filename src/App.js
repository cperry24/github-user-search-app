import './App.css';
import {useState, useEffect} from 'react'

function App() {
  const [user, setUser] = useState({})

  // Fetching the github API test
  useEffect(() => {
    fetch('https://api.github.com/users/cperry24')
    .then(res => res.json())
    .then(obj => setUser(obj))
  }, [])

  return (
    <div className="App">
      <h1>{user.name}</h1>
    </div>
  );
}

export default App;
