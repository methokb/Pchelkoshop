import React from 'react'
import style from "./Quest.module.scss"
import fai from "../../assets/FaiChil.svg"
import queste from "../../assets/questesHelp.svg"
import brain from "../../assets/brainContainer.svg"
import baby from "../../assets/ChildrenBaby.svg"
import girls from "../../assets/4Girls.svg"

const Quest = () => {
    return (
        <div className={style.quests}>
            <div className={style.questsContainer}>
                <div className={style.questsTexts}>
                    <h1>Квест – возможность подарить <br />
                        детям незабываемые эмоции!</h1>
                </div>
                <div className={style.questsGrid}>
                    <div className={style.all}>
                        <div className={style.questsChildren}>
                            <img className={style.questsChildren_Img} src={fai} alt="" />
                            <h2 className={style.questsChildren_h2}>Объединяет семью и друзей   <br />
                                в поисках одной разгадки!</h2>
                        </div>
                        <div className={style.questsChildrenBaby}>
                            <img className={style.questsChildrenBaby_Img} src={baby} alt="" />
                            <h2 className={style.questsChildrenBaby_hp2}>Заменит аниматора <br />
                                на празднике и обеспечит <br /> мероприятие на 5+!</h2>
                        </div>
                        <div className={style.questsBrain}>
                            <img className={style.questsBrain_Img} src={brain} alt="" />
                            <h2 className={style.questsBrain_h20}>Развивает логику и <br />
                                последовательное мышление!</h2>
                        </div>
                        <div className={style.questsGirls}>
                            <img className={style.questsGirls_Img} src={girls} alt="" />
                            <h2 className={style.questsGirls_h2p}>Все необходимое - уже есть <br />
                                в коробке!</h2>
                        </div>
                    </div>
                </div>
                <div className={style.btn}>
                    <div className={style.questsBtnContainer}>
                        <button className={style.questsBtn}>выбрать игру</button>
                    </div>
                </div>
                <div className={style.questsHelp}>
                    <div className={style.questsHelpContainer}>
                        <div className={style.questsHelpContainerComponents}>
                            <div className={style.queststHelpImg}>
                                <img src={queste} alt="" />
                            </div>
                            <div className={style.queststHelpText}>
                                <p>Есть вопросы? <br />
                                    Напишите нам</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Quest