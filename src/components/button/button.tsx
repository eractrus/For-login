import style from './Style.module.scss'

interface propsButton{
    children:string
}

export function ButtonForm(props:propsButton){
    return(
        <button className={style.buttonForm}>{props.children}</button>
    )
}