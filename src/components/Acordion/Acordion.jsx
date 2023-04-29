import React, { useState } from 'react'
import style from "./Acordin.module.scss"
import AcordionItem from '../AcordionItem/AcordionItem';

const Acordion = () => {
    const [open, setOpen] = useState(false);
    const [acardion, setAcardion] = useState([
        {
            id: 1,
            question: 'Что такое игра-квест?',
            answer: 'Это приключенческая игра, участники которой перемещаются по пунктам, находят и выполняют задания в рамках общего сценария.',
        },
        {
            id: 2,
            question: 'А это сложно?',
            answer: '',
        }, {
            id: 3,
            question: 'Сколько длится такая игра?',
            answer: 'Время игры: 60-90 мин',
        }, {
            id: 4,
            question: 'Сколько участников требуется?',
            answer: ' Кол-во игроков: 2-6 ',
        }, {
            id: 5,
            question: 'Почему квесты такие популярные?',
            answer: '',
        }, {
            id: 6,
            question: 'Вы поможете подобрать игру?',
            answer: 'Квесты тренируют интеллект, а иногда и тело, развлекают, объединяют, раскрепощают, снимают стресс после утомительного дня, обеспечивают выброс адреналина и массу эмоций.',
        },
    ]);

    const [state, setState] = useState(false);
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);
    const [state5, setState5] = useState (false)

    // const showAnswer = (e) => {
    //     e.target.nextElementSibling.style.display = "block"
    // }
    // const showClone = (e) => {
    //     e.target.parentNode.style.display = "none"
    // }
    return (
        <div className={style.acordion}>
            <div className={style.acordionContainer}>
                <div className={style.acordionLini}>
                    <p></p>
                </div>
                <div className={style.acordinComponent}>
                    <div className={style.acordionComponentTextA}>
                        <h1 className={style.acordionComponentTextA_h1}>Часто задаваемые вопросы</h1>
                        <div className={style.acordionAll}>
                            <AcordionItem question={acardion[0].question} answer={acardion[0].answer} setState={setState} state={state} />
                            <AcordionItem question={acardion[1].question} answer={acardion[1].answer} setState={setState1} state={state1} />
                            <AcordionItem question={acardion[2].question} answer={acardion[2].answer} setState={setState2} state={state2} />
                            <AcordionItem question={acardion[3].question} answer={acardion[3].answer} setState={setState3} state={state3} />
                            <AcordionItem question={acardion[4].question} answer={acardion[4].answer} setState={setState4} state={state4} />
                            <AcordionItem question={acardion[5].question} answer={acardion[5].answer} setState={setState5} state={state5} />
                        </div>
                        <button className={style.acordionBtn}>перейти в каталог</button>
                    </div>
                </div>
            </div>
            <p className={style.acardionLini_End}></p>
        </div>
    )
}

export default Acordion