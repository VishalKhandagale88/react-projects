import React, { useState } from 'react'

const SimpleForm = () => {
    const[text,setText] = useState();
    const onChangeHandler = (event) =>{
        setText(event.target.value);
        console.log(event);
        
    }
  return (
    <div>
      <p>{text}</p>
        <form action="">
          <h1>Form</h1>
            <input name="input-text" onChange={onChangeHandler}/>
        </form>
    </div>
  )
}

export default SimpleForm