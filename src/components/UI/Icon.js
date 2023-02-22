import classes from "./Icon.module.css"
const Icon = props => {
    return <div className={classes.icon}>
        <img onClick={()=>{window.open(props.link, "_blank")}} src={props.src} alt={props.href} style={{ height: "50px", width: "50px", padding: "5px" }} />
    </div>
}

export default Icon