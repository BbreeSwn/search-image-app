import "./Form.css";
import { useState } from "react";
import Picture from "./Picture";

export default function Form() {
  const [word, setWord] = useState("");
  const [photos, setPhotos] = useState([]);
  const { VITE_API_URL, VITE_API_KEY } = import.meta.env;


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
      const url = `${VITE_API_URL}?per_page=15&query=${word}&client_id=${VITE_API_KEY}`;
      const res = await fetch(url);
      const data = await res.json();
      const result = data.results;
      if (result.length == 0) {
        alert("Image not found");
        setWord("");
      } else {
        // show image
        setPhotos(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={searchImage}>
        <input
          type="text"
          placeholder="Search image"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button type="onSubmit">Search</button>
      </form>
      {/* // show image */}
      <div className="search-result">
        {photos.map((data, index) => {
          return <Picture {...data} key={index} />;
        })}
      </div>
    </>
  );
}
