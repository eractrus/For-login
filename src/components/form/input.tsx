import style from './Style.module.scss'

interface PropsInput {
    type: string
    placeholder: string
    max: number
}

export function Input(props: PropsInput) {
    return (
        <input className={style.inputStyle}
         type={props.type}
         placeholder={props.placeholder} maxLength={props.max} />
    )
}