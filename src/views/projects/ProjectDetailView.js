import { useState } from "react";
import classes from "./ProjectDetailView.module.css"
const ProjectDetailView = ({project, onBack}) =>{
    const [selectedIdx, setSelectedIdx] = useState(0)
    return <div className={classes.project_detail__container}>
        <div className={classes.project_detail__text__container}>
            <h1>{project.title}</h1>
            <div className={classes.below__title}>
                <p>{project.tools}</p>
                <div className={classes.project_detail__container__button}>
                
                    {<button onClick={()=>window.open(project.demoLink, "_blank")} style={{visibility:project.demoLink?"visible":"hidden"}}>Demo</button>}
                    {project.codeLink && <button  onClick={()=>window.open(project.code, "_blank")}>Code</button>}
                </div>
            </div>
            <p>{project.description}</p>     
        </div>
        
        <div className={classes.project_detail__container__image}>
            <div className={classes.small__images__column}>
                {project.src.map((item,idx)=><img onClick={()=>setSelectedIdx(idx)} alt={project.id} src={project.src[idx]} className={selectedIdx===idx? classes.active :""}/>)}
            </div>            
            <div className={classes.zoomed__image}>
            <img alt={project.id} src={project.src[selectedIdx]} />
            </div>
        </div>
        
    </div>
}

export default ProjectDetailView;