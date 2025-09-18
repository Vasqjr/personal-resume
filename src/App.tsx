import React from 'react';
import Banner from './components/Banner.tsx';
import bannerImage from '/src/assets/images/IMG_3541.jpeg'
import './App.css'

function App() {

  return (
    <>
      <Banner imageUrl={bannerImage}></Banner>
      <div id="headerContent">
        <h1>Jonathan Vasquez</h1>
        <p>
          Front-End Engineer
        </p>
      </div>
      
    </>
  )
}

export default App
