import styles from './GameButton.module.css'

import { buttonEnums } from 'staticData/enums'

const getCorrectionClass = (correction, className) => {
  switch (correction) {
    case buttonEnums.CORRECT:
      return styles[`${className}__correct`]
    case buttonEnums.INCORRECT:
      return styles[`${className}__incorrect`]
    default:
      return ''
  }
}

const GameButton = ({ boldText, text, correction, disabled, onClick }) => {
  const correctionSvgClass = correction
    ? getCorrectionClass(correction, 'wrapper__button__svg')
    : ''

  const correctionLineClass = correction
    ? getCorrectionClass(correction, 'wrapper__line')
    : ''

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.wrapper__line} ${correctionLineClass}`}></div>
      <button
        onClick={onClick}
        className={`${styles.wrapper__button}`}
        disabled={disabled}>
        <svg
          className={`${styles.wrapper__button__svg} ${correctionSvgClass}`}
          xmlns="http://www.w3.org/2000/svg">
          <path d="M22.7172 5.28344C24.8781 2.28016 28.3521 0.5 32.052 0.5H340.948C344.648 0.5 348.122 2.28016 350.283 5.28344L372.384 36L350.283 66.7166C348.122 69.7198 344.648 71.5 340.948 71.5H32.052C28.3521 71.5 24.8781 69.7198 22.7172 66.7166L0.615976 36L22.7172 5.28344Z" />
        </svg>
        <div className={styles.wrapper__button__textContainer}>
          <b className={styles.wrapper__button__textContainer__textBold}>
            {boldText}
          </b>
          <span className={styles.wrapper__button__textContainer__text}>
            {text}
          </span>
        </div>
      </button>
      <div className={`${styles.wrapper__line} ${correctionLineClass}`}></div>
    </div>
  )
}

export default GameButton
