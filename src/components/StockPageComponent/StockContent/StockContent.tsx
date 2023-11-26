import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button, TableCell, TableRow, Typography } from '@mui/material'
import Graph from '../Graph/Graph.tsx'

interface StockContentProps {
  stock: {
    id: number
    ticker: string
    company: string
    data: { date: string; price: string }[]
  }
}

const StockContent: FC<StockContentProps> = ({ stock }) => {
  const { id, ticker, data } = stock
  const dispatch = useDispatch()
  const listTrading: any[] = useSelector((state: any) => state.tradingList)
  const [isOpenChart, setOpenChart] = useState(false)
  // const [isOpenTable, setOpenTable] = useState(false)

  const changeChartVisibility = () => {
    setOpenChart(!isOpenChart)
  }

  // const changeTableVisibility = () => {
  //   setOpenTable(!isOpenTable)
  // }

  const [chartData] = useState({
    labels: data.map(elem => elem.date).reverse(),
    datasets: [
      {
        label: ticker,
        data: data.map(elem => Number(elem.price.split('$')[1])).reverse(),
        borderColor: '#0002bb',
        borderWidth: 1,
        pointRadius: 0.1
      }
    ]
  })

  const changeListTrading = (event: any) => {
    if (event.target?.checked) {
      listTrading.push(event.target?.value as string)
    } else {
      const index = listTrading.indexOf(event.target?.value)
      listTrading.splice(index, 1)
    }
    console.log(listTrading)
    dispatch({ type: 'SAVE', tradingList: listTrading })
  }

  return (
    <>
      <TableRow className="table__row_stocks">
        <TableCell>
          <input
            className="trading_target_button"
            type="checkbox"
            value={stock.ticker}
            onChange={changeListTrading}
          />
        </TableCell>
        <TableCell>
          <Typography className="p_stocks">{stock.ticker}</Typography>
        </TableCell>
        <TableCell>
          <Typography className="p_stocks">{stock.company}</Typography>
        </TableCell>
        <TableCell>
          <Button
            className="stocks_btn"
            type="button"
            onClick={changeChartVisibility}
            variant="contained"
            color="primary"
          >
            Show chart
          </Button>
        </TableCell>
      </TableRow>
      {isOpenChart ? (
        <TableRow>
          <TableCell colSpan={4}>
            <Graph key={id} chartData={chartData} />
          </TableCell>
        </TableRow>
      ) : null}
    </>
  )
}

export default StockContent
