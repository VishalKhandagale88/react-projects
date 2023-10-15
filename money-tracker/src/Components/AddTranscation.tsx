import "../css/AddTranscationCss.css"
export const AddTranscation = () => {
  return (
    <>
        <h3>Add new trasaction</h3>
        <form >
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" placeholder="Enter test ..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount<br>
                </br>(negative - expression, positive -income)
                </label>
                <input type="number" placeholder="Enter amount ...." />
            </div>
             <button className="btn">Add transcation</button>
        </form>
    </>
  )
}
