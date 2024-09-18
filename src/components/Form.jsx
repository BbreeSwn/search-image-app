import "./Form.css";
import { useState } from "react";

export default function Form() {
  const [word, setWord] = useState("");
  const key = "k8VfEWBgx_nuy1vtvHSvaJEUiNx_ucG8Q4QoOqSfy8U";

  function searchImage(e) {
    e.preventDefault();
    if (!word) {
      alert("Please enter your  keyword");
    } else {
      //เรียกใช้ API
      fetchImageFromAPI();
    }
  }
  async function fetchImageFromAPI() {
    try {
      const url = `https://api.unsplash.com/search/photos?page=1&query=${word}&client_id=${key}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.result);
    } catch (error) {
      console.log(error);
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
      <button type="onSubmit">Search</button>
    </form>
  );
}
