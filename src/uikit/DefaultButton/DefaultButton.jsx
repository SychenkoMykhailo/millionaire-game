import styles from './DefaultButton.module.css'

const DefaultButton = ({ className, onClick, children, ...props }) => (
  <button
    type="button"
    onClick={onClick ? onClick : null}
    className={`${styles.button} ${className}`}
    {...props}>
    {children}
  </button>
)

export default DefaultButton
