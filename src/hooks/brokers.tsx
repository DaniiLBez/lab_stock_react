import { useEffect, useState } from 'react'
import axios from 'axios'
import { Broker } from '../interfaces.ts'
import { API_URL } from '../constants.ts'

export const useBrokers = () => {
  const [brokers, setBrokers] = useState([])

  const addBroker = (broker: never) => {
    setBrokers((prev: never[]) => [...prev, broker])
  }

  const deleteBroker = (id: number) => {
    setBrokers(brokers.filter((broker: Broker) => broker.id !== id))
  }

  const fetchBrokers = async () => {
    try {
      const response = await axios.get(`${API_URL}/broker/all`)
      setBrokers(response.data)
    } catch (error: any) {
      console.error(`Error during fetching brokers: ${error.message}`)
    }
  }

  useEffect(() => {
    fetchBrokers().finally(() => console.log('Brokers fetched successfully'))
  }, [])
  return { brokers, addBroker, deleteBroker }
}
