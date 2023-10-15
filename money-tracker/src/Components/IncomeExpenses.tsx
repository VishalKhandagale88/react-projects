import "../css/IncomeExpensesCss.css"
export const IncomeExpenses = () => {
  return (
    <div className="ico-exp-container">
        <div>
            <h4>Income</h4>
            <p className="money plus">+$0.00</p>            
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">-$0.00</p>
        </div>
    </div>
  )
}
