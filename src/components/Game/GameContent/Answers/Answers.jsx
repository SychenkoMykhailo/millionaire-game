import styles from './Answers.module.css'

import { memo, useState } from 'react'
import useGameContext from 'contexts/GameContext'

import { convertNumberToLetter } from 'utils/helpers'

import Answer from './Answer'

const Answers = memo(({ answers }) => {
  const { onAnswer } = useGameContext()

  const [disabled, setDisabled] = useState(false)

  const handleClick = answerId => onAnswer(answerId)

  return (
    <ul className={styles.list}>
      {answers.map(({ answerId, text, isCorrect }, i) => (
        <Answer
          boldText={convertNumberToLetter(i)}
          text={text}
          answerId={answerId}
          isCorrect={isCorrect}
          disabled={disabled}
          setDisabled={setDisabled}
          key={answerId}
          onDelayClick={handleClick}
        />
      ))}
    </ul>
  )
})

export default Answers
