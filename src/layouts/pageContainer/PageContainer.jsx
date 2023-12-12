import styles from './pageContainer.module.css'

export function PageContainer({children}) {
  return (
    <div className={styles['wrapper']}>{children}</div>
  )
}
