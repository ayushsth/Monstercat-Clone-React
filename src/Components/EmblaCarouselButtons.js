import React from "react";
import '../App.css';

export const DotButton = ({ selected, onClick }) => (
  <button
    className="embla__dot"
    type="button"
    onClick={onClick}
  >
    <div className={`embla__progress ${selected ? "active" : ""}`}></div>
  </button>
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