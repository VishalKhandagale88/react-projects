import "../css/AddTranscationCss.css"
import { useState } from "react";
export const AddTranscation = () => {
    const [text, setText] = useState("");
    const [amount,setAmount] = useState(0);
  return (
    <>
        <h3>Add new trasaction</h3>
        <form >
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter test ..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount">Amount<br>
                </br>(negative - expression, positive -income)
                </label>
                <input type="number" value={amount} onChange={ (e)=>setAmount(parseFloat(e.target.value)) } placeholder="Enter amount ...." />
            </div>
             <button className="btn">Add transcation</button>
        </form>
    </>
  )
}
