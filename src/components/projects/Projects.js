import classes from "./Projects.module.css"
import project1 from "../../assets/project1.png"
import ProjectItem from "./ProjectItem"
import { useState, useEffect} from "react"
import useWindowDimensions from "../UI/useWindowDimensions"


const Projects = () => {
    const [current, setCurrent] = useState(0)
    const projects = [
        { title: "Calorie Counter APP", description: "An application using flutter", src: project1, tools: "Flutter | NodeJS | MongoDB", id: 0 },
        { title: "Calorie Counter APP", description: "An application using flutter", src: project1, tools: "Flutter | NodeJS | MongoDB", id: 1 },
        { title: "Calorie Counter APP", description: "An application using flutter", src: project1, tools: "Flutter | NodeJS | MongoDB", id: 2 },
        { title: "Calorie Counter APP", description: "An application using flutter", src: project1, tools: "Flutter | NodeJS | MongoDB", id: 3 },
    ]

    const length = projects.length
    const { width } = useWindowDimensions();
    const itemPerRow = Math.floor((width * 0.7)/300);
    const numberOfRows = Math.ceil(length/itemPerRow)

    // console.log(`screen width: ${width} - item per row: ${itemPerRow} - number of rows: ${numberOfRows}`)
    const MINUTE_MS = 5000;
    useEffect(() => {
        const interval = setInterval(() => {
            if (current < numberOfRows-1) {
                setCurrent(prev => prev + 1)
            } else{
                setCurrent(0)
            }
        }, MINUTE_MS);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks
    }, [numberOfRows, current])


    return <div className={classes.projects}>
        <h1>Projects <small>{(current+1)}/{numberOfRows}</small></h1>
        <div className={classes.carousel__projects}>
            <button onClick={() => {
                if (current <= 0) {
                    setCurrent(numberOfRows-1)
                } else {
                    setCurrent(prev => prev - 1)
                }
            }}>{'<'}</button>
            <div className={classes.project__list}>
                <ul className={classes.project__list__ul} style={{ transition: "1000ms ease 0ms"}}>
                    {projects.splice(current*itemPerRow, itemPerRow + current * itemPerRow).map(item => <li className={classes.project__list__li} key={item.id} ><ProjectItem title={item.title + item.id} description={item.description} src={item.src} id={item.id} tools={item.tools} /></li>)}
                </ul>
            </div>
            <button onClick={() => {
                if (current >= numberOfRows-1) {
                    setCurrent(0)
                } else {
                    setCurrent(prev => prev + 1)
                }
            }}>{'>'}</button>
        </div>
        
    </div>
}

export default Projects