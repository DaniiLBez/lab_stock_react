import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { COMPANIES } from '../../constants.ts'
import {
  Container,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@mui/material'
import StockContent from './StockContent/StockContent.tsx'
import TableComponent from '../TableComponent/TableComponent.tsx'
import NavigationComponent from '../NavigationComponent/NavigationComponent.tsx'
import { stocksSocket } from '../../gateway.ts'

interface StockPageComponentProps {}

const StockPageComponent: FC<StockPageComponentProps> = () => {
  const [stocks, setStocks] = useState<any[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch()

  const handleUpdateStock = (response: any) => {
    const stocksData = response.map((stock: any) => ({
      id: COMPANIES.get(stock.ticker),
      ticker: stock.ticker,
      company: stock.company,
      data: stock.data.map((elem: any) => ({
        date: elem.Date,
        price: elem.Open
      }))
    }))
    setStocks(stocksData)
    setIsLoaded(true)
  }

  useEffect(() => {
    stocksSocket.on('historicalData', handleUpdateStock)

    if (!isLoaded) {
      stocksSocket.emit('getHistoricalData')
      setIsLoaded(true)
      dispatch({ type: 'SAVE', tradingList: [] })
    }

    return () => {
      stocksSocket.off('historicalData', handleUpdateStock)
    }
  }, [isLoaded, dispatch])

  const header = (
    <TableRow>
      <TableCell>Участие в торгах</TableCell>
      <TableCell>Тикер</TableCell>
      <TableCell>Компания</TableCell>
      <TableCell>Опции</TableCell>
    </TableRow>
  )

  if (stocks?.length) {
    const tableContent = (
      <TableBody>
        {stocks.map((stock: any) => (
          <StockContent key={stock.ticker} stock={stock} />
        ))}
      </TableBody>
    )
    return (
      <>
        <NavigationComponent />
        <Container>
          <TableComponent
            title="Stocks"
            header={header}
            tableContent={tableContent}
          />
        </Container>
      </>
    )
  }

  return <Typography variant="h4">No stocks</Typography>
}

export default StockPageComponent
