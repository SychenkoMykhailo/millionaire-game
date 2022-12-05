import styles from './MessageScreen.module.css'

import likeImage from 'images/like.png'
import DefaultButton from 'uikit/DefaultButton'
import Title from 'uikit/Title'

const MessageScreen = ({
  title,
  btnTitle,
  supTitle,
  isGradientBg,
  onButtonClick,
}) => {
  return (
    <div
      className={`${styles.wrapper} ${isGradientBg ? styles.gradientBg : ''}`}>
      <div className={styles.wrapper__inner}>
        <div className={styles.wrapper__inner__container}>
          <div className={styles.wrapper__inner__container__imageWrap}>
            <img
              src={likeImage}
              alt="like image"
              className={styles.wrapper__inner__container__image}
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.wrapper__inner__container}>
          <div className={styles.wrapper__inner__container__content}>
            <div className={styles.wrapper__inner__container__content__text}>
              {supTitle && (
                <Title
                  text={supTitle}
                  variant="small"
                  className={
                    styles.wrapper__inner__container__content__text__suptitle
                  }
                />
              )}
              <Title text={title} />
            </div>
            <DefaultButton onClick={onButtonClick}>{btnTitle}</DefaultButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageScreen
