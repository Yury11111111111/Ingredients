import react from "react";
import "./Button.css";

export default function Button({ text, onClick }) {
  return (
    <div className="button-container">
      <button className="button" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
