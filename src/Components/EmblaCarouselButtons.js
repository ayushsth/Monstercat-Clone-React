import React from "react";
import '../App.css';

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <div>&lsaquo;</div>
  </button>
);

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="next"
    onClick={onClick}
    disabled={!enabled}
  >

    <div>&rsaquo;</div>


  </button>
);
