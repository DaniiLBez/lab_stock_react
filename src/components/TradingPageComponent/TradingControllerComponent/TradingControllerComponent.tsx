import { FC, useState } from 'react'
import styles from './TradingControllerComponent.module.css'
import { controllerSocket } from '../../../gateway.ts'
import { Box, Button, InputLabel, TextField } from '@mui/material'

interface TradingControllerComponentProps {
  tradingList: any[]
}

const TradingControllerComponent: FC<TradingControllerComponentProps> = ({ tradingList }) => {
  const [delayError, setDelayError] = useState(false)
  const [dateError, setDateError] = useState(false)
  const setDate = (dateElement: any | null) => {
    if (
      dateElement === null ||
      new Date(dateElement.value) > new Date('2023-10-14') ||
      new Date(dateElement.value) < new Date('2022-11-14')
    ) {
      setDateError(true)
      return
    }
    setDateError(false)
    console.log(dateElement.value)
    controllerSocket.emit('setDate', dateElement.value)
  }

  const onStartClock = async () => {
    controllerSocket.emit('startClock', JSON.stringify(tradingList))
  }

  const onStopClock = async () => {
    controllerSocket.emit('stopClock')
  }

  const onSetDelay = (delayElement: any | null) => {
    if (delayElement === null || Number(delayElement.value) < 0) {
      setDelayError(true)
      return
    }
    setDelayError(false)
    console.log(delayElement.value)
    controllerSocket.emit('setClockDelay', delayElement.value)
  }

  return (
    <Box className={styles.TradingControllerComponent}>
      <Box>
        <InputLabel htmlFor="delay">Delay:</InputLabel>
        <TextField
          id="delay"
          type="number"
          defaultValue="1000"
          inputProps={{ min: 0 }}
          error={delayError}
        />
        <Button onClick={() => onSetDelay(document.getElementById('delay'))}>
          Set
        </Button>
      </Box>
      <Box>
        <InputLabel htmlFor="date">Date:</InputLabel>
        <TextField
          id="date"
          type="date"
          defaultValue="2022-11-14"
          inputProps={{ min: '2022-11-14', max: '2023-10-14' }}
          error={dateError}
        />
        <Button onClick={() => setDate(document.getElementById('date'))}>
          Set
        </Button>
      </Box>
      <Box>
        <Button onClick={() => onStartClock()}>Start Clock</Button>
        <Button onClick={() => onStopClock()}>Stop Clock</Button>
      </Box>
    </Box>
  )
}

export default TradingControllerComponent
