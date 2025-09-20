import React from 'react';
import Banner from './components/Banner.tsx';
import bannerImage from '/src/assets/images/IMG_3541.jpeg'
import './App.css'

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
          What could I say that just defines me as me, not as a front-end engineer. Biggest thing you should know about me is while I don't mind an occasional relaxation day, I find comfort in knowing I got something done at the end of the day. This has led to me being a consistent moving person who tries to accomplish something before I go back to bed. Whether it's working on a project such as this website, making progress in a song I'm practicing on piano, or my personal favorite hobby of having got a gym session in, I can relax when I feel like I've come out of the day a little better than I was when I woke up. Maybe it sounds cliche but it truly is just how I feel. I understand life only can happen as fast as one day at a time, but to me it's what you do in those days that really matters.
        </p>
      </div>

      <div id="workExperienceSection">
        <h2>Education & Work Experience</h2>

        <div className='smallIndent'>
          <p> If I had been passionate about computing ever since I was a child, I would put it here, but in all honesty my coding story starts
            back in 2020. I've always enjoyed messing around with web pages and video games but never thought much of it past that. I actively remember my first time using
            inspect element back in elementary school to mess with the coloring and pixel sizes of websites I frequented, but it wasn't until I
            started my Computer Engineering degree (Yup, not Computer Science) in 2020 that I finally figured out what I wanted to do in life.</p>
          <h3>Bachelor of Science in Computer Science at SUNY Farmingdale</h3>
          <div className="leftSideImage">
            <img className="square-container" src='src/assets/images/college-grad.jpeg' alt="Photo of Jonathan with College Graduate Friends" />
          </div>
          <div>
            <h4>2020-2021</h4>
            <p>
                The Covid-19 Pandemic of 2020 was an unpresidented time, for all of us. I personally felt most affected in my studies,
              having graduated high school and started my Computer Engineering degree online. I attempted to make the most of my first
              year of college but struggled to work online in a major dominated by hardware and circuitry. It wasn't until my 3rd semester,
              where I finally could take an in person class on C++ where I realize just how fun coding could be.
            </p>
            <h4>2022-2024</h4>
            <p> After the C++ class, I switched over to Computer Science in Spring of 2022. It was during a
              summer programming class where I met a great group of friends whom I would eventually take most of
              my major classes with. This got to a point where our study group became well-known throughout the Computer Scientist professors
              as we were often seen in multiple of their classes during the day or studying at the library.
              During this time I also had been a member of the Supporting Women in Computing club and the Competitive E-Sports team.
              In Spring 2024, I graduated with these people and finally earned my B.S. in Computer Science after years of hardwork.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
