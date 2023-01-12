import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import Result from './components/Result';

function App() {
  const [num, setNum] = useState(0)
 

  const minus =() =>{
    setNum(num - 1)
    }

  const plus =() =>{
      setNum(num + 1)
  }
      
  return (
   
    <div className="App">
      <h1>{num}</h1>
      <button onClick={minus}>-</button>
      <button onClick={plus}>+</button>
      <Result/>
    </div>
    
  );
}

export default App;
