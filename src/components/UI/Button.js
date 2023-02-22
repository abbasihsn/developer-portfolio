import classes from './Button.module.css'
const Button = ({title, onClick})=>{
    return <button onClick={onClick} className={classes.button}>{title}</button>
}

export default Button;