import './App.css';
import './variables.css'
import Navbar from './components/navbar/Navbar';
import Main from './views/main/Main';
import Education from './views/education/Education';
import WorkExperience from './views/work_experience/WorkExperience';
import { useState } from 'react';
import ProjectView from './views/projects/ProjectView';

function App() {

  const [curentBody, setCurrentBody] = useState(0)

  const itemList = [
    {
      title: "HOME",
      path: "home__section",
      idx:0
    },
    {
      title: "Work Experience",
      path: "work__experience",
      idx:2
    },
    {
      title: "Education",
      path: "education__section",
      idx:1
    },
    {
      title: "PROJECTS",
      path: "project__section",
      idx:3
    }
  ];


  const logoTitle = {
    title: "HASAN ABBASI",
    path: "#",
  };



  let widget = <Main />
  if(curentBody === 1){
    widget = <Education />
  } else if(curentBody===2){
    widget = <WorkExperience />
  } else if(curentBody===3){
    widget = <ProjectView />
  }


  const bodyHandler = (page)=>{
    // console.log(`idx: ${page}`)
    setCurrentBody(page)
  }

  return <div className='app'>
    <Navbar itemList={itemList} logoTitle={logoTitle} onClick={bodyHandler}/>
    {widget}
    
  </div>
}

export default App;
