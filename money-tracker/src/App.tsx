
import './App.css'
import { AddTranscation } from './Components/AddTranscation'
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
        <AddTranscation/>
      </div>
    </>
  )
}

export default App
