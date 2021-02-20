import './App.css';
import {useState,useEffect} from 'react';

const URL = 'http://localhost/PHP/index.php'

function App() {
  const [message, setMessage] = useState('Initial value in React app.');
  
  useEffect(() => {
    fetch(URL)
    .then(res => res.text())
    .then(
      (res) => {
        setMessage(res);
      }, (error) => {
        alert(error)
      }
    )
  }, [])

  return (
    <div>
      <h3>Test PHP backend</h3>
      <p>{message}</p>
    </div>
  );
}

export default App;
