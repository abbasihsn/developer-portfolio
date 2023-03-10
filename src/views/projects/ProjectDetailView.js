import classes from "./ProjectDetailView.module.css"
const ProjectDetailView = ({project, onBack}) =>{
    return <div className={classes.project_detail__container}>
        <div className={classes.project_detail__container__upsection}>
            <div className={classes.project_detail__container__text}>
                <h1>{project.title}</h1>
                <p>{project.description}</p>
            </div>
            <div className={classes.project_detail__container__tools}>
                <p>{project.tools}</p>
                <div className={classes.project_detail__container__button}>
                    {<button onClick={()=>window.open(project.demoLink, "_blank")} style={{visibility:project.demoLink?"visible":"hidden"}}>Demo</button>}
                    {project.codeLink && <button  onClick={()=>window.open(project.code, "_blank")}>Code</button>}
                </div>
            </div>
            
        </div>
        <div className={classes.project_detail__container__image}>
            <img alt={project.id} src={project.src} />            
        </div>
        
    </div>
}

export default ProjectDetailView;