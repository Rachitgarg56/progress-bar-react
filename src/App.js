
import { useState } from 'react';
import './App.css';
import ProgressBar from './ProgressBar/ProgressBar.js';

function App() {

  const [message, setMessage] = useState('Loading...');

  const handleMessage = () => {
    setMessage('Completed!');
  }

  return (
    <div className='app'>
      <h2>Progress Bar</h2>
      <ProgressBar handleMessage={handleMessage}/>
      <p>{message}</p>
    </div>
  );
}

export default App;
