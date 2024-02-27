import React, { useState } from "react";

const ComplexForm = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    occupation: "",
    gender: "",
    languages: [],
  });
  const [formErrors,setFormeErrors] = useState({})

  const onChangeHandler = (event) => {
    if (event.target.name === "languages") {
      let copy = { ...formData };
      if (event.target.checked) {
        copy.languages.push(event.target.value);
      }else{
        copy.languages = copy.languages.filter(el => el !== event.target.value)
      }
      setFormData(copy)
    } else {
      setFormData(() => ({
        // if we don't do like this then our entire object will get only one key value pair ,
        //it will be no more group of key value pairs
        ...formData,
        [event.target.name]: event.target.value,
      }));
    }
  };
  const validateForm = ()=>{
    let errors = {}
    if(formData.userName === ""){
        errors.userName = "User name is required"
    }
    if (formData.emai) {
        
    }
    setFormeErrors({...errors})
    return false;
  }
  const onSubmitHandler =(event) =>{
    console.log(event);
    alert("In on submit handle method")
    
    event.preventDefault();
    validateForm();
  }
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="userName">User Name</label>
          <input name="userName" onChange={onChangeHandler} />
        </div>
        <span>{formErrors.userName}</span>
        <div>
          <label htmlFor="emal">Email</label>
          <input name="email" onChange={onChangeHandler} />
        </div>
        <span>{formErrors.email}</span>
        <div>
          <label htmlFor="occupation">Occupation</label>
          <select name="occupation" onChange={onChangeHandler}>
            <option value="select-occupation">select Occupation</option>
            <option value="student">Student</option>
            <option value="employee">Employee</option>
            <option value="other">other</option>
          </select>
        </div>
        <hr />
        <div>
          <label htmlFor="gender">Gender</label>
          <div>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={onChangeHandler}
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={onChangeHandler}
            />
            <label htmlFor="female">Female</label>
          </div>
          <div>
            <input
              type="radio"
              name="gender"
              value="other"
              onChange={onChangeHandler}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <hr />
        <div>
          <label htmlFor="language">Language</label>
          <div>
            <input
              type="checkbox"
              name="languages"
              value="html"
              onChange={onChangeHandler}
            />
            <label htmlFor="checkbox">HTML</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="languages"
              value="CSS"
              onChange={onChangeHandler}
            />
            <label htmlFor="checkbox">CSS</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="languages"
              value="JavaScript"
              onChange={onChangeHandler}
            />
            <label htmlFor="checkbox">JavaScript</label>
          </div>
        </div>
        <div>
          <button
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComplexForm;
