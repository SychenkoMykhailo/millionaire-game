import styles from './Question.module.css'

import Title from 'uikit/Title'
import { memo } from 'react'

const Question = memo(({ question, questionKey }) => {
  console.log(123)
  return (
    <div className={styles.question}>
      <Title
        key={questionKey}
        text={question}
        variant="small"
        className={styles.question__text}
      />
    </div>
  )
})

export default Question
