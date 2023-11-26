import { FC, useEffect, useState } from 'react'
import { stocksSocket } from '../../../gateway.ts'
import { TableBody, TableCell, TableRow } from '@mui/material'
import TableComponent from '../../TableComponent/TableComponent.tsx'

interface TradingStocksComponentProps {
  tradingList: any[]
}

interface StockData {
  id: number;
  ticker: string;
  quantity: number;
  price: number;
  date: string;
}

const TradingStocksComponent: FC<TradingStocksComponentProps> = ({ tradingList }) => {
  const [stocks, setStocks] = useState<StockData[]>([]);

  useEffect(() => {
    const handleStockData = (data: StockData[]) => {
      console.log(tradingList)
      data = data.filter((elem: StockData) => tradingList.includes(elem.ticker))
      setStocks(data);
    };

    stocksSocket.on('updateStock', handleStockData);

    return () => {
      stocksSocket.off('updateStock', handleStockData);
    };
  }, [tradingList]);

  const tableHeader = (
      <TableRow>
        <TableCell style={{ width: '25%' }}>Ticker</TableCell>
        <TableCell style={{ width: '25%' }}>Quantity</TableCell>
        <TableCell style={{ width: '25%' }}>Price</TableCell>
        <TableCell style={{ width: '25%' }}>Date</TableCell>
      </TableRow>
  );

  const tableContent = (
    <TableBody>
      {stocks.map((stock) => (
        <TableRow key={stock.id}>
          <TableCell style={{ width: '25%' }}>{stock.ticker}</TableCell>
          <TableCell style={{ width: '25%' }}>{stock.quantity}</TableCell>
          <TableCell style={{ width: '25%' }}>{stock.price}</TableCell>
          <TableCell style={{ width: '25%' }}>{stock.date}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );

  return (
    <TableComponent title="Stock Data" header={tableHeader} tableContent={tableContent} />
  );
};

export default TradingStocksComponent;
