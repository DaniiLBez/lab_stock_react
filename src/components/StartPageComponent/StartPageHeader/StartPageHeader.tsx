import { FC } from 'react'
import { Typography } from '@mui/material'
import styles from './StartPageHeader.module.css'

interface StartPageHeaderProps {}

const StartPageHeader: FC<StartPageHeaderProps> = () => (
  <div className={styles.StartPageHeader}>
    <Typography variant="h1">Биржа акций</Typography>
    <Typography variant="h2">Панель администрирования</Typography>
  </div>
)

export default StartPageHeader
