import styles from './Progress.module.css'

import useGameContext from 'contexts/GameContext'

import ProgressItem from './ProgressItem'

import { formatNumberToNumberWithCommas } from 'utils/helpers'
import { memo } from 'react'

const Progress = memo(() => {
  const { gameData, currentQuestion, currentQuestionIndex } = useGameContext()

  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {gameData.map(({ reward, id }, i) => {
          const isActive = id === currentQuestion.id
          const rewardFormated = formatNumberToNumberWithCommas(reward)
          return (
            <li className={styles.list__item} key={id}>
              <ProgressItem
                text={`$${rewardFormated}`}
                isActive={isActive}
                isPassed={!isActive && i < currentQuestionIndex}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
})

export default Progress
