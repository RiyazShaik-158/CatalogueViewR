import React, { useEffect, useState } from 'react';
import './App.css'
import { images } from './images';
import Header from './Components/Header';
import Viewer from './Components/Viewer';
import Slider from './Components/Slider';

function App() {

  const [index,setIndex] = useState(0)
  const [data, setData] = useState([])
  
  useEffect(()=> {
    setData(images)
  },[])

  return (
      <div className="app">
        <Header />
        <div className='app_body'>
          <div className='app_container'>
            <Viewer data={data} index={index} />
            <Slider 
              data={data}  
              index={index} 
              setIndex={setIndex}
            />
          </div>
        </div>
      </div>
    
  )
}

export default App
