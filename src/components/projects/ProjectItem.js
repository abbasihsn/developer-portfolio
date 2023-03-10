import classes from "./ProjectItem.module.css"
const ProjectItem = props => {

    return <div onClick={()=>props.onClick(props.id)} className={`${classes.project__item} ${props.type === "app" ? classes.application : ""}`}>
        <img src={props.src} alt={props.id} />
        <div className={classes.project__item__text}>
            <div className={classes.tools}>
                <p>{props.tools}</p>
            </div>
            <div className={classes.project__item__caption}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
        <div className={classes.project__item__button}>
            {<button onClick={()=>window.open(props.demo, "_blank")} style={{visibility:props.demo?"visible":"hidden"}}>Demo</button>}
            {props.code && <button  onClick={()=>window.open(props.code, "_blank")}>Code</button>}
        </div>
    </div>
}

export default ProjectItem;