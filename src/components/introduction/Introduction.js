import classes from "./Introduction.module.css"
import introImage from "../../assets/intro.png"
import Button from "../UI/Button"
const Introduction = () => {
    return <div className={classes.introduction}>
        <div className={classes.introduction__text}>
            <h3>Hello! I'm</h3>
            <h1>Hasan Abbasi</h1>
            <div className={classes.description}>
                <p>Fullstack developer passionate and experienced in building web and mobile applications.</p>
            </div>
            <a href="mailto:Abbasi.hsnn@gmail.com">Contact Me!</a>
        </div>
        <div className={classes.introduction__image}>
            <img src={introImage} alt="intro" />
        </div>
    </div>
}

export default Introduction;