import styles from './Title.module.css'

const Title = ({ text, variant, className }) => {
  const classNames = Array.isArray(variant)
    ? variant.map(v => styles[v])
    : [styles[variant]]

  return (
    <h2 className={`${styles.title} ${classNames.join('')} ${className}`}>
      {text}
    </h2>
  )
}

export default Title
