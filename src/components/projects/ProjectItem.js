import classes from "./ProjectItem.module.css"
const ProjectItem = props =>{

    return <div onClick={props.onClick} className={`${classes.project__item} ${props.type==="app"? classes.application:""}`}>
        <img src={props.src} alt={props.id}/>
        <div className={classes.project__item__text}>
        <div className={classes.tools}>
        <p>{props.tools}</p>
        </div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        </div>
    </div>
}

export default ProjectItem;