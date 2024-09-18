import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [word, setWord] = useState("");

  function searchImage(e){
    e.preventDefault()
    if(!word){
alert("Please enter your  keyword")
    }else{
      //เรียกใช้ API
      console.log(word);
    }
  }
  return (
    <form onSubmit={searchImage}>
      <input
        type="text"
        placeholder="Search image"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />
      <button type="onSubmit" >Search</button>
    </form>
  );
}
