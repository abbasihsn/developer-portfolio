import classes from "./Skills.module.css"
import jsLogo from "../../assets/js_logo.svg"
import postmanLogo from "../../assets/postman.png"
import cLogo from "../../assets/c.png"
import pythonLogo from "../../assets/python.png"
import javaLogo from "../../assets/java.png"
import cssLogo from "../../assets/css.png"
import dartLogo from "../../assets/dart.png"
import flutterLogo from "../../assets/flutter.svg"
import gitLogo from "../../assets/git.png"
import htmlLogo from "../../assets/html.png"
import mongoLogo from "../../assets/mongo.png"
import sqlLogo from "../../assets/mysql.png"
import postgressLogo from "../../assets/postgress.png"
import nodeLogo from "../../assets/nodejs.png"
import reactLogo from "../../assets/react.png"
import SkillItem from "./SkillItem"
import { useState, useEffect } from "react"
import useWindowDimensions from "../UI/useWindowDimensions"


const skillList =
    [
        { title: "JavaScript", id: 0, src: jsLogo, expertise: "+3 years" },
        { title: "Dart", id: 1, src: dartLogo, expertise: "+5 years"  },
        { title: "Python", id: 2, src: pythonLogo,  expertise: "+5 years"},
        { title: "C", id: 3, src: cLogo , expertise: "+7 years"  },
        { title: "Java", id: 4, src: javaLogo, expertise: "+1 years"  },
        { title: "HTML", id: 5, src: htmlLogo , expertise: "+4 years" },
        { title: "CSS", id: 6, src: cssLogo , expertise: "+4 years" },
        { title: "Flutter", id: 7, src: flutterLogo, expertise: "+5 years"  },
        { title: "ReactJS", id: 8, src: reactLogo , expertise: "+3 years" },
        { title: "NodeJS", id: 9, src: nodeLogo, expertise: "+3 years"  },
        { title: "MongoDB", id: 10, src: mongoLogo , expertise: "+3 years" },
        { title: "Postgress", id: 11, src: postgressLogo , expertise: "+2 years" },
        { title: "MySQL", id: 12, src: sqlLogo , expertise: "+4 years" },
        { title: "Postman", id: 13, src: postmanLogo , expertise: "+3 years" },
        { title: "GIT", id: 14, src: gitLogo , expertise: "+5 years" },
    ]
const Skills = () => {


    const [current, setCurrent] = useState(0);
    const length = skillList.length;
    const MINUTE_MS = 2000;
    useEffect(() => {
        const interval = setInterval(() => {
            if (current < length && current>=0) {
                setCurrent(prev => prev + 1)
                // console.log(current)
            } else {
                setCurrent(0)
            }
        }, MINUTE_MS);

        return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks
    }, [current])


    const { height, width } = useWindowDimensions();
    let n=1;
    if (width>1450) { 
        n=3;
    }
    else if (width > 1000) {
        n = 2;
    }

    console.log(n)

    const showList = skillList.concat(skillList)


    return <div className={classes.skills}>
        <h1>Skills</h1>
        <div className={classes.carousel__main}>
            <ul className={classes.carousel__main_ul} style={{ transform: "1000ms ease 0ms", transform: `translate3d(${current*(-250*n)}px, 0px, 0px)` }}>
            {showList.map(item => <li className={classes.carousel__main_li} key={Math.random()} ><SkillItem src={item.src} id={item.id} title={item.title} expertise={item.expertise}/></li>)}
            </ul>
        </div>
    </div>
}

export default Skills