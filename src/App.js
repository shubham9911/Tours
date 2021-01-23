import './App.css';
import React, { useState, useEffect} from 'react';
import Loading from './Loading';

function App() {
  const [loading, setLoading] = useState(true);
  const [ tours, setTours] =useState([]);
  if(loading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
