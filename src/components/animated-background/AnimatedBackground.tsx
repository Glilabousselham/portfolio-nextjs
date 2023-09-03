import React from 'react'
import style from './style.module.css'

console.log(style)

export default function AnimatedBackground() {
    return (
        <div className={`${style.animatedBg}`}>

            <span className={style.point1}></span>
            <span className={style.point2}></span>

        </div>
    )
}
