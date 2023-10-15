
import './App.css'
import { Balance } from './Components/Balance'
import { Header } from './Components/Header'
import { IncomeExpenses } from './Components/IncomeExpenses'
import { TranscationList } from './Components/TranscationList'

function App() {


  return (
    <>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TranscationList/>
      </div>
    </>
  )
}

export default App
