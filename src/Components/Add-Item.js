import React from "react"
import { useState } from "react"

export default function AddItem() {
  const [inputValue,setInputValue] = useState("");

  const addData = ()=>{
    //make post request
    const payload = {
      title : inputValue,
    };

    fetch("https://fake-server-app-by-atul.herokuapp.com/lists",{
      method : "POST",
      body : JSON.stringify(payload),
      headers : {
        "content-type" : "application/json"
      }
    }).then((res) => res.json()).then(()=>{
      window.location.reload(false);
    })
    .then((res) => console.log(res));
  }

  return (
    <>
    <h1>Add Item</h1>
    <input type = "text" 
    placeholder='Enter Item Name'
    value = {inputValue}
    onChange = {(e) => setInputValue(e.target.value)}/><br/>
    <button onClick={addData} 
    id = "addButton"
    >Add to list</button>
    </>
  )
}
