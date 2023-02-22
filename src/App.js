import './App.css';
import './variables.css'
import AboutMe from './components/about_me/AboutMe';
import Footer from './components/footer/Footer';
import Introduction from './components/introduction/Introduction';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
import { useEffect } from 'react';

function App() {

  const itemList = [
    {
      title: "HOME",
      path: "home__section",
    },
    {
      title: "ABOUT ME",
      path: "about__section",
    },
    {
      title: "SKILLS",
      path: "skills__section",
    },
    {
      title: "PROJECTS",
      path: "project__section",
    },
    {
      title: "CONTACT ME",
      path: "contact__section",
    },
  ];

  
  const logoTitle = {
    title: "HASAN ABBASI",
    path: "#",
  };

  return <div className='app'>
  <Navbar itemList={itemList} logoTitle={logoTitle} />
  
  <Introduction />
  <AboutMe />
  <Skills />
  <Projects />
  <Footer />
  </div>
}

export default App;
