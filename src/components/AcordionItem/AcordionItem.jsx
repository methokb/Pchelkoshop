import React from 'react'
import style from "./AcordionItem.module.scss"

const AcordionItem = ({ question, answer, state, setState, state1, state2, state3, state4, state5 }) => {
    // const Accordion = ({setState: setData}) => {
    //     return state & state1 & state2 & state3 & state4 & state5 === false ? true : setData(true)
    // }
    return (
        <div className={style.acordionItem}>
            <div onClick={() => setState(!state)} className={style.acordionAll_1}>
                <h2><span>+</span>{question}</h2>
            </div>
            {state && (
                <div className={style.acordionAll_2}>
                    <p><span>-</span>{answer}</p>
                </div>
            )}
            
        </div>
    )
}

export default AcordionItem