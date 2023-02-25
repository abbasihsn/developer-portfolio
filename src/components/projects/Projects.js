import classes from "./Projects.module.css"
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.jpg"
import project3 from "../../assets/project3.jpg"
import ProjectItem from "./ProjectItem"
import { useState, useEffect} from "react"
import useWindowDimensions from "../UI/useWindowDimensions"


const Projects = () => {
    const [current, setCurrent] = useState(0)
    const projects = [
        { title: "Developer Portfolio", description: "Website with pure HTMAL, CS and JS without any package! Website with pure HTMAL, CS and JS without any package!", src: project1, tools: "ReactJS | CSS | HTML", id: 0, type:"web" , demoLink:"http://hasanabbasi.ca", codeLink:"https://github.com/abbasihsn/developer-portfolio"},
        { title: "Iranian Stock Analysis", description: "It helps you to review the stock market status.", src: project2, tools: "Flutter | NodeJS | MongoDB", id: 1, type:"app"},
        { title: "Persian Time Tracker", description: "An application using flutter", src: project3, tools: "Flutter | NodeJS | MongoDB", id: 2 , type:"app"},
        { title: "Calorie Counter APP", description: "An application using flutter", src: project1, tools: "Flutter | NodeJS | MongoDB", id: 3 , type:"web"},
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
            console.log(`${current*itemPerRow} - ${itemPerRow + current * itemPerRow}`)
        }, MINUTE_MS);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks
    }, [numberOfRows, current, itemPerRow])


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
                <ul className={classes.project__list__ul}>
                    {projects.slice(current*itemPerRow, itemPerRow + current * itemPerRow).map(item => <li className={classes.project__list__li} key={item.id} ><ProjectItem title={item.title} description={item.description} src={item.src} id={item.id} tools={item.tools} type={item.type} demo={item.demoLink} code={item.codeLink}/></li>)}
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