import classes from "./EducationItem.module.css"

const EducationItem = props => {
    return <div className={classes.education__content}>
        <h2>{props.start}-{props.end}</h2>
        <h1>{props.degree} | {props.university}</h1>
        <p>GPA: {props.gpa}</p>
        <p>Thesis: {props.thesis}</p>
    </div>
}


export default EducationItem