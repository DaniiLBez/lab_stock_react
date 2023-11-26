import { FC } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styles from './RouterComponent.module.css'
import StartPage from '../StartPageComponent/StartPage/StartPage.tsx'
import BrokerComponent from '../BrokerComponent/BrokerComponent.tsx'
import StockPageComponent from '../StockPageComponent/StockPageComponent.tsx'
import TradingPageComponent from '../TradingPageComponent/TradingPageComponent.tsx'

interface RouterProps {}

const RouterComponent: FC<RouterProps> = () => (
  <div className={styles.Router}>
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path={'/broker'} element={<BrokerComponent />}></Route>
        <Route path={'/stocks'} element={<StockPageComponent />}></Route>
        <Route path={'/trading'} element={<TradingPageComponent />}></Route>
      </Routes>
    </Router>
  </div>
)

export default RouterComponent
