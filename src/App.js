import "./styles.css";
import React, { useState } from "react";
import ListComp from "./listcomp";

export default function App() {
  var [Db, setDb] = useState([]);
  var [item, setItem] = useState("");

  var getInput = (event) => {
    setItem(event.target.value);
  };

  var add = () => {
    if (item === "") {
    } else {
      setDb((data) => {
        return [...data, item];
      });
    }
    setItem("");
  };

  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <input onChange={getInput} placeholder="ADD ITEM!" value={item} />
      <button style={{ border: "0", margin: "0" }} onClick={add}>
        <img
          style={{ width: "20px" }}
          src="https://www.flaticon.com/svg/vstatic/svg/992/992482.svg?token=exp=1613720292~hmac=50b3b4c49015086c4bee78caee839773"
        />
      </button>
      <ol style={{ listStyle: "none", textAlign: "left" }}>
        {Db.map((item, index) => {
          return (
            <ListComp
              text={item}
              key={index}
              id={index}
              ont={(id) => {
                setDb(() => {
                  return Db.filter((arr, index) => {
                    return index !== id;
                  });
                });
              }}
            />
          );
        })}
      </ol>
    </div>
  );
}
