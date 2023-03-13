import classes from "./ProjectView.module.css"
import ProjectItem from "../../components/projects/ProjectItem"
import { useState } from "react"
import ProjectDetailView from "./ProjectDetailView"


const ProjectView = () => {

    const [projectToShow, setProjectToShow] = useState(-1) // -1=> show all prjects
    const projects = [
        { title: "Developer Portfolio", description: "Website with pure HTMAL, CS and JS without any package! Website with pure HTMAL, CS and JS without any package!", src: ["devPortfolio/project1.png"], tools: "ReactJS | CSS | HTML", id: 0, type:"web" , demoLink:"http://hasanabbasi.ca", codeLink:"https://github.com/abbasihsn/developer-portfolio"},
        { title: "Iranian Stock Analysis", description: "It helps you to review the stock market status.", src: ["stockMarket/project2.jpg"], tools: "Flutter | NodeJS | MongoDB", id: 1, type:"app"},
        { title: "Persian Time Tracker", description: "An application using flutter", src: ["RoutineMe/routineMe_1.webp", "RoutineMe/routineMe_2.webp", "RoutineMe/routineMe_4.webp", "RoutineMe/routineMe_3.webp"], tools: "Flutter | NodeJS | MongoDB", id: 2 , type:"app"},
        { title: "NodeJS JWT authentication", description: "A simple example for JWT token based authentication", src: ["nodeJwt/jwt_project.jpeg"], tools: "NodeJS | MongoDB", id: 3 , type:"web", codeLink:"https://github.com/abbasihsn/jwt-nodejs-example"},
        { title: "Java Rest API", description: "A simple example for Java CRUD operation and connection to DB,", src: ["javaRest/java_rest_project.png"], tools: "Java | PostgreSQL", id: 4 , type:"web", codeLink:"https://github.com/abbasihsn/javaRestExample"},
    ]

    const onClickHandler = (id)=>{
        setProjectToShow(id)
    }

    const onBackHandler = (id)=>{
        setProjectToShow(-1)
    }
    let widget = <div className={classes.project_view__container}>
        {projects.map(item => <ProjectItem onClick={onClickHandler} title={item.title} description={item.description} src={require("./images/" + item.src[0])} id={item.id} tools={item.tools} type={item.type} key={item.id} demo={item.demoLink} code={item.codeLink}/>)}
    </div>

    if(projectToShow !== -1){
        widget = <ProjectDetailView onBack={onBackHandler} project={projects[projectToShow]}/>
    }

    return widget
}

export default ProjectView