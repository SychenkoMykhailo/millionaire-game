import styles from './ToggleMenuButton.module.css'

import { MenuIcon, CrossIcon } from 'components/Icons'

const ToggleMenuButton = ({ isToggled, onClick, className }) => {
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={onClick}>
      {isToggled ? (
        <CrossIcon className={styles.button__icon} />
      ) : (
        <MenuIcon className={styles.button__icon} />
      )}
    </button>
  )
}

export default ToggleMenuButton
