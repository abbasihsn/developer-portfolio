import classes from "./ProjectView.module.css"
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.jpg"
import jwtProject from "../../assets/jwt_project.jpeg"
import javaRestProject from "../../assets/java_rest_project.png"
import ProjectItem from "../../components/projects/ProjectItem"


const ProjectView = () => {
    const projects = [
        { title: "Developer Portfolio", description: "Website with pure HTMAL, CS and JS without any package! Website with pure HTMAL, CS and JS without any package!", src: project1, tools: "ReactJS | CSS | HTML", id: 0, type:"web" , demoLink:"http://hasanabbasi.ca", codeLink:"https://github.com/abbasihsn/developer-portfolio"},
        { title: "Iranian Stock Analysis", description: "It helps you to review the stock market status.", src: project2, tools: "Flutter | NodeJS | MongoDB", id: 1, type:"app"},
        { title: "Persian Time Tracker", description: "An application using flutter", src: project3, tools: "Flutter | NodeJS | MongoDB", id: 2 , type:"app"},
        { title: "NodeJS JWT authentication", description: "A simple example for JWT token based authentication", src: jwtProject, tools: "NodeJS | MongoDB", id: 4 , type:"web", codeLink:"https://github.com/abbasihsn/jwt-nodejs-example"},
        { title: "Java Rest API", description: "A simple example for Java CRUD operation and connection to DB,", src: javaRestProject, tools: "Java | PostgreSQL", id: 5 , type:"web", codeLink:"https://github.com/abbasihsn/javaRestExample"},
    ]

    return <div className={classes.project_view__container}>
        {projects.map(item => <ProjectItem title={item.title} description={item.description} src={item.src} id={item.id} tools={item.tools} type={item.type} key={item.id} demo={item.demoLink} code={item.codeLink}/>)}
    </div>
}

export default ProjectView