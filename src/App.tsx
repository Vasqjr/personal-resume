import React from 'react';
import Banner from './components/Banner.tsx';
import bannerImage from '/src/assets/images/IMG_3541.jpeg'
import './App.css'

function App() {

  return (
    <>
      <Banner imageUrl={bannerImage}></Banner>
      <div id="headerContent">
        <h1>Jonathan R. Vasquez</h1>
        <h2>
          Front-End Engineer
        </h2>
        <p className="elevatorParagraph">Hello, my name is Jonathan Vasquez, and I’m a Computer Science graduate and front-end engineer. 
          I specialize in building custom web components and improving website accessibility with vanilla JavaScript.
          My professional experience focuses on delivering fast, accessible components across multiple sites without relying on frameworks. 
          I’m now seeking a front-end developer role where I can expand my skills in modern JavaScript frameworks. </p>
      </div>
      
    </>
  )
}

export default App
