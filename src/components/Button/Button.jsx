import style from './Button.module.css'

export default function Button({title}) {
    return(
        <div className={style.button}>
            {title}
        </div>
            
       
    )
}