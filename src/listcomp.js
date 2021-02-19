import React from "react";

export default function listcomp(props) {
  return (
    <>
      <li>
        <button
          style={{
            backgroundColor: "white",
            border: "none",
            marginTop: "1rem",
            borderRadius: "20px"
          }}
          onClick={() => {
            props.ont(props.id);
          }}
        >
          ❌
        </button>
        {props.text}
      </li>
    </>
  );
}
