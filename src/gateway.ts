import { io } from 'socket.io-client'

const STOCKS_URL = 'http://localhost:3000/stock'
const CONTROLLER_URL = 'http://localhost:3000/controller'

export const stocksSocket = io(STOCKS_URL)
export const controllerSocket = io(CONTROLLER_URL)

console.log('Connecting to stocks...')

controllerSocket.on('clockStocks', (date: Date) => {
  console.log(date)
})
