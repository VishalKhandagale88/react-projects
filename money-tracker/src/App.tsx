
import './App.css'
import { Balance } from './Components/Balance'
import { Header } from './Components/Header'
import { IncomeExpenses } from './Components/IncomeExpenses'

function App() {


  return (
    <>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
      </div>
    </>
  )
}

export default App
