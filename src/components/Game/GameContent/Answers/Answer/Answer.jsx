import styles from './Answer.module.css'

import GameButton from 'uikit/GameButton'
import { useEffect, useState } from 'react'

import { buttonEnums } from 'staticData/enums'

const Answer = ({
  boldText,
  text,
  isCorrect,
  answerId,
  disabled,
  setDisabled,
  onDelayClick,
}) => {
  const [correction, setCorrection] = useState(false)

  const onClick = () => {
    isCorrect
      ? setCorrection(buttonEnums.CORRECT)
      : setCorrection(buttonEnums.INCORRECT)
  }

  useEffect(() => {
    if (!correction) return
    setDisabled(true)
    const timeoutId = setTimeout(() => {
      onDelayClick(answerId)
      setDisabled(false)
    }, 1000)

    return () => clearTimeout(timeoutId)
  }, [correction])

  return (
    <li className={styles.item}>
      <GameButton
        disabled={disabled}
        boldText={boldText}
        text={text}
        correction={correction}
        onClick={onClick}
      />
    </li>
  )
}

export default Answer
