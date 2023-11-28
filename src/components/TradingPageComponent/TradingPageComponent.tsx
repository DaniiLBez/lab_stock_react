import { FC } from 'react'
import styles from './TradingPageComponent.module.css'
import { useSelector } from 'react-redux'
import TradingControllerComponent from './TradingControllerComponent/TradingControllerComponent.tsx'
import NavigationComponent from '../NavigationComponent/NavigationComponent.tsx'
import TradingStocksComponent from './TradingStocksComponent/TradingStocksComponent.tsx'

interface TradingPageComponentProps {}

const TradingPageComponent: FC<TradingPageComponentProps> = () => {
  const listTradings = useSelector((state: any) => state.tradingList)

  return (
    <div className={styles.TradingPageComponent}>
      <NavigationComponent />
      <TradingControllerComponent tradingList={listTradings}/>
      <TradingStocksComponent tradingList={listTradings} />
    </div>
  )
}

export default TradingPageComponent
