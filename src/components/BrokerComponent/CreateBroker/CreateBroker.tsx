import { FC, useState } from 'react'
import axios from 'axios'
import { API_URL } from '../../../constants.ts'
import { Box, Button, FormControl, Input, InputLabel } from '@mui/material'
import { Broker } from '../../../interfaces.ts'

interface CreateBrokerProps {
  onCreate: (broker: Broker) => void
}

const brokerData = {
  name: '',
  balance: 0
}
const CreateBroker: FC<CreateBrokerProps> = ({ onCreate }: any) => {
  const [name, setName] = useState('')
  const [balance, setBalance] = useState('')
  const [nameError, setNameError] = useState(false)
  const [balanceError, setBalanceError] = useState(false)

  const submitHandler = async (event: any) => {
    event.preventDefault()

    const errors = {
      name: name === '',
      balance: balance === '' || !balance.match(/^\d+$/) || Number(balance) < 0
    }

    if (errors.name || errors.balance) {
      if (errors.name) setNameError(true)
      if (errors.balance) setBalanceError(true)
      return
    }

    try {
      brokerData.name = name
      brokerData.balance = parseInt(balance)

      const response = await axios.post(`${API_URL}/broker/create`, brokerData)
      onCreate(response.data['lists'])
    } catch (error: any) {
      console.error(error.message)
    }
  }

  const changeNameHandler = (event: any) => {
    setName(event.target!.value)
  }

  const changeBalanceHandler = (event: any) => {
    setBalance(event.target!.value)
  }

  return (
    <form onSubmit={submitHandler}>
      <FormControl>
        <InputLabel htmlFor="broker-name">Enter name</InputLabel>
        <Input
          id="broker-name"
          type="text"
          required
          value={name}
          error={nameError}
          onChange={changeNameHandler}
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="broker-balance">Enter balance</InputLabel>
        <Input
          id="broker-balance"
          type="text"
          required
          value={balance}
          error={balanceError}
          onChange={changeBalanceHandler}
        />
      </FormControl>
      <Box mt={2}>
        <Button type="submit" variant="contained" color="primary">
          Create
        </Button>
      </Box>
    </form>
  )
}

export default CreateBroker
