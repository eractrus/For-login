import style from './style.module.scss'
import React from 'react'

interface PropsBigTitle {
    children: React.ReactNode
}

export function BigTitle(props: PropsBigTitle) {
    return (

            <h1 className={style.bigTitle}>
                {props.children}
            </h1>
    )
}