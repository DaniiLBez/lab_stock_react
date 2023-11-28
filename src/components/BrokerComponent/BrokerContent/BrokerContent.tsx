import { FC, useState } from 'react'
import axios from 'axios'
import { Button, TableCell, TableRow, TextField } from '@mui/material'
import { Save, Delete } from '@mui/icons-material'
import { API_URL } from '../../../constants.ts'
import { Broker } from '../../../interfaces.ts'

interface BrokerContentProps {
  broker: Broker
  onDelete: (id: number) => void
}

export const BrokerContent: FC<BrokerContentProps> = ({
  broker,
  onDelete
}: any) => {
  const { id, name: brokerName, balance: brokerBalance } = broker
  const [name, setName] = useState(brokerName)
  const [balance, setBalance] = useState(brokerBalance)

  const onDeleteHandler = async () => {
    try {
      await axios.delete(`${API_URL}/broker/${id}`)
      onDelete(id)
    } catch (e: any) {
      console.error(`Error during deleting broker with id ${id}: ${e.message}`)
    }
  }

  const onSaveHandler = async () => {
    try {

      if(balance < 0 || !balance){
        await axios.patch(`${API_URL}/broker/update/${id}`, {})
        return
      }

      const updatedBroker = {
        name,
        balance
      }

      await axios.patch(`${API_URL}/broker/update/${id}`, updatedBroker)
    } catch (error: any) {
      console.error(
        `Error during saving broker with id ${id}, ${error.message}`
      )
    }
  }

  const updateNameHandler = (event: any) => {
    setName(event.target?.value)
  }

  const updateBalanceHandler = (event: any) => {
    setBalance(event.target?.value)
  }

  return (
    <TableRow>
      <TableCell>
        <TextField type="text" value={name} onChange={updateNameHandler} />
      </TableCell>
      <TableCell>
        <TextField
          type="number"
          value={balance}
          onChange={updateBalanceHandler}
          inputProps={{ min: 0 }}
        />
      </TableCell>
      <TableCell>
        <Button onClick={() => onSaveHandler()}>
          <Save />
        </Button>
        <Button onClick={() => onDeleteHandler()}>
          <Delete />
        </Button>
      </TableCell>
    </TableRow>
  )
}
