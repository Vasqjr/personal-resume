import React from 'react';
import Banner from './components/Banner.tsx';
import bannerImage from '/src/assets/images/IMG_3541.jpeg';
import Timeline from './components/Timeline.tsx';
import collegeGradImage from '/src/assets/images/college-grad.jpeg';
import farmingdaleStateCollegeImage from '/src/assets/images/farmingdale-fountain.jpg';
import moesProjectImage from '/src/assets/images/moesProject.jpeg'
import lincolnImage from '/src/assets/images/lincolnIT.jpg';
import stateOfNewYorkImage from '/src/assets/images/StateOfNY.png'
import './App.css';

function App() {
  const timelineData = [
    { date: 'Fall 2020', title: 'Starting in Computer Engineering', description: 'Started my first program in the prime of the pandemic. Switched into Computer Science when I took a single coding class in CE.', position: 'left', image: `${farmingdaleStateCollegeImage}`, altText: 'Photo of Farmingdale State College Campus'},
    { date: 'Spring 2022', title: 'Moving to Computer Science', description: 'Started my Computer Science program. Met my greatest study group and my current roommate, with whom I took many major classes with.', position: 'right', image: `${moesProjectImage}`, altText: 'Photo of College Group Studying at Moes'},
    { date: 'Spring 2023 - Summer 2024', title: 'Interning for Lincoln IT', description: 'Earned my first job in the field working as an intern for Lincoln IT, before being promoted to a Network Operations Center Engineer.', position: 'left', image: `${lincolnImage}`, altText: 'Photo of Lincoln IT logo'},
    { date: 'Spring 2024', title: 'Graduating from SUNY Farmingdale', description: 'Graduated from Farmingdale State College with a Bachelor of Science in Computer Science.', position: 'right', image: `${collegeGradImage}`, altText: 'Photo of College Graduation'},
    { date: 'Fall 2024 - Present', title: 'Coding for New York State', description: 'Moved to Albany, New York to take up a position as a Front-End Developer for the State of NY.', position: 'left', image: `${stateOfNewYorkImage}`, altText: 'Photo of New York State logo'}
  ]

  return (
    <>
      <Banner imageUrl={bannerImage} altText="Photo of Jonathan performing Piano at an Open Mic Night"></Banner>
      <div id="headerContent">
        <h1>Jonathan R. Vasquez</h1>
        <h2>
          Frontend Engineer
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
        <p>
          I’m happiest when I finish the day having accomplished something. Whether it’s refining this website, recording for my YouTube channel, practicing piano, or getting a gym session in, I like to end each day a little better than I started. Relaxation has its place, but steady progress—one day at a time—is what matters most to me.
        </p>
      </div>

      <div id="workExperienceSection">
        <h2>Education & Work Experience</h2>
        <Timeline items={timelineData} />
      </div>

      <div id="skillSection">
        <h2>Skills</h2>
        <ul>
          <li>Frontend: JavaScript (ES6+), Typescript, React, HTML5, CSS3 (Flexbox, Grid), Accessibility (WCAG 2.1), Kotlin </li>
          <li>Backend: Java (Spring Boot), SQL, Python</li>
          <li>Tools: Git, VS Code, IntelliJ, Teamsite, Chrome DevTools</li>
          <li>Soft Skills: Public speaking, technical communication, team collaboration</li>
        </ul>
      </div>

      <div id="contactInfoSection">
        <h2>Contact Info</h2>
        
      </div>
    </>
  )
}

export default App
