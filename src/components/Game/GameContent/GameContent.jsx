import styles from './GameContent.module.css'

import useGameContext from 'contexts/GameContext'

import Question from './Question'
import Answers from './Answers'
import Progress from './Progress'

import ToggleMenuButton from 'uikit/ToggleMenuButton'
import { useCallback, useState } from 'react'

const GameContent = () => {
  const { currentQuestion } = useGameContext()
  const [isToggled, setIsToggled] = useState(false)

  const handleToggle = useCallback(() => setIsToggled(prev => !prev), [])

  return (
    <main className={styles.wrapper}>
      <div className={styles.wrapper__content}>
        <Question
          question={currentQuestion.question}
          questionKey={currentQuestion.id}
        />
        <Answers answers={currentQuestion.answers} />
      </div>
      <ToggleMenuButton
        className={styles.mobileButton}
        id="menu-button"
        isToggled={isToggled}
        onClick={handleToggle}
      />
      <div
        className={`${styles.wrapper__progress} ${
          styles.wrapper__progress_mob
        } ${
          isToggled
            ? styles.wrapper__progress_mob_visible
            : styles.wrapper__progress_mob_hidden
        }`}>
        <Progress />
      </div>
    </main>
  )
}

export default GameContent
