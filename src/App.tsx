import React from 'react';
import Banner from './components/Banner.tsx';
import bannerImage from '/src/assets/images/IMG_3541.jpeg';
import './App.css';

function App() {

  return (
    <>
      <Banner imageUrl={bannerImage} altText="Photo of Jonathan performing Piano at an Open Mic Night"></Banner>
      <div id="headerContent">
        <h1>Jonathan R. Vasquez</h1>
        <h2>
          Front-End Engineer
        </h2>
        <p className="elevatorParagraph">Hello, my name is Jonathan Vasquez, and I’m a Computer Science graduate and front-end engineer.
          I specialize in building custom web components and improving website accessibility with vanilla JavaScript.
          My professional experience focuses on delivering fast, accessible components across multiple sites without relying on frameworks.
          I’m now seeking a front-end developer role where I can expand my skills in modern JavaScript practices.
        </p>
      </div>
      <div id="aboutSection">
        <h2>
          About Me
        </h2>
        <p className='smallIndent'>
          I’m happiest when I finish the day having accomplished something. Whether it’s refining this website, recording for my YouTube channel, practicing piano, or getting a gym session in, I like to end each day a little better than I started. Relaxation has its place, but steady progress—one day at a time—is what matters most to me.</p>
      </div>

      <div id="workExperienceSection">
        <h2>Education & Work Experience</h2>

        <div className='smallIndent'>
          <h3>Bachelor of Science in Computer Science at SUNY Farmingdale</h3>
          <div className="leftSideImage">
            <img className="square-container" src='src/assets/images/college-grad.jpeg' alt="Photo of Jonathan with College Graduate Friends" />
          </div>
          <div>
            <h4>2020-2024</h4>
            <p>
                
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
