import './App.css';
import {useState, useEffect} from 'react'
import Header from './components/Header'
import UserProfile from './components/UserProfile'

function App() {
  const [user, setUser] = useState({})

  // Fetching the github API test
  useEffect(() => {
    fetch('https://api.github.com/users/cperry24')
    .then(res => res.json())
    .then(obj => setUser(obj))
    .catch(error => console.log(error))
  }, [])

  return (
    <main class="main-container">
      <Header />
      <div className="search-container">
        <input 
          type="test" 
          name="search"
          placeholder="Search Github username..."
        />
        <button value="submit">Search</button>
      </div>
      <UserProfile user={user} />
    </main>
  );
}

export default App;
