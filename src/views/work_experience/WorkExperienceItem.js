import classes from "./WorkExperienceItem.module.css"

const WorkExperienceItem = props => {
    return <div className={classes.work__content}>
        <h2>{props.start}-{props.end} | {`${props.location}`}</h2>
        <h1>{props.position} | {props.company}</h1>
        <p>Main Focus:</p>
        <ul>
            {props.focus.map(item=> <li>{item}</li>)}
        </ul>
    </div>
}

export default WorkExperienceItem