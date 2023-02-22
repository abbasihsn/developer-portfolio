import classes from "./Projects.module.css"
import project1 from "../../assets/project1.png"
import ProjectItem from "./ProjectItem"
import { useState } from "react"
import useWindowDimensions from "../UI/useWindowDimensions"


const Projects = () => {
    const [current, setCurrent] = useState(0)
    const projects = [
        { title: "Calorie Counter APP", description: "An application using flutter", src: project1, tools: "Flutter | NodeJS | MongoDB", id: 0 },
        { title: "Calorie Counter APP", description: "An application using flutter", src: project1, tools: "Flutter | NodeJS | MongoDB", id: 1 },
        { title: "Calorie Counter APP", description: "An application using flutter", src: project1, tools: "Flutter | NodeJS | MongoDB", id: 2 },
        { title: "Calorie Counter APP", description: "An application using flutter", src: project1, tools: "Flutter | NodeJS | MongoDB", id: 3 },
    ]

    
    const { height, width } = useWindowDimensions();
    let n=1;
    if (width>1450) { 
        n=3;
    }
    else if (width > 1000) {
        n = 2;
    }

    return <div className={classes.projects}>
        <h1>Projects</h1>
        <div className={classes.carousel__projects}>
            <button onClick={() => {
                if (current <= 0) {
                    setCurrent(0)
                } else {
                    setCurrent(prev => prev - 1)
                }
            }}>{'<'}</button>
            <div className={classes.project__list}>
                <ul className={classes.project__list__ul} style={{ transition: "500ms ease 0ms", transform: `translate3d(${-20 - (current * width/(n+0.5))}px, 0px, 0px)` }}>
                    {projects.map(item => <li className={classes.project__list__li} key={item.id} ><ProjectItem title={item.title + item.id} description={item.description} src={item.src} id={item.id} tools={item.tools} /></li>)}
                </ul>
            </div>
            <button onClick={() => {
                console.log(n)
                const temp = Math.ceil(projects.length / n)
                console.log(temp)
                if (current >= temp) {
                    setCurrent(temp)
                } else {
                    setCurrent(prev => prev + 1)
                }
            }}>{'>'}</button>
        </div>

    </div>
}

export default Projects