import classes from './SkillItem.module.css';
const SkillItem = props =>{

    const temp = parseInt(props.expertise[1])
    const color = temp>3?"rgb(100, 196, 55)":(temp>2?"rgb(138, 100, 227)":"rgb(208, 85, 224)")
    return <div className={classes.skill__item}>
        <div className={classes.image__holder}>
        <img src={props.src} alt={props.id}/>
        </div>
        <h1>{props.title}</h1>
        <p style={{borderColor:color, color:color}}>{props.expertise}</p>
    </div>
}

export default SkillItem