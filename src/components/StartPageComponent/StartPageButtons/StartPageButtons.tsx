import { FC } from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import styles from './StartPageButtons.module.css'

interface StartPageButtonsProps {}

const StartPageButtons: FC<StartPageButtonsProps> = () => (
  <div className={styles.StartPageButtons}>
    <Link to="/broker">
      <Button
        variant="contained"
        color="primary"
        sx={{ fontSize: '16px', padding: '10px' }}
      >
        Список брокеров
      </Button>
    </Link>

    <Link to="/stocks">
      <Button
        variant="contained"
        color="primary"
        sx={{ fontSize: '16px', padding: '10px' }}
      >
        Список акций
      </Button>
    </Link>

    <Link to="/trading">
      <Button
        variant="contained"
        color="primary"
        sx={{ fontSize: '16px', padding: '10px' }}
      >
        Запуск торгов
      </Button>
    </Link>
  </div>
)

export default StartPageButtons
