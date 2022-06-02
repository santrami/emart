import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import React, { useEffect, useState } from 'react'

function App() {
  /* const apiUrl='https://api.nasa.gov/planetary/apod?api_key=jhJByMUpDjKPcKcfPUgZ6QoIdjbbsmmbv8GMf7b4'

  const [imageOfDay, setImageOfDay] = useState([])

  useEffect(() => {
    const fetchApi= async ()=>{
      const response= await fetch(apiUrl);
      setImageOfDay(...imageOfDay,await response.json())
      
    }

    fetchApi()
  }, [])
  
  console.log(imageOfDay) */
  return (
    <>
    <Navbar />
    <Home />
    </>
  );
}

export default App;
