import React from "react";
import PropTypes from "prop-types";
import "./SelectWindow.css";

export default function SelectWindow({
  isOpen,
  position,
  dayId,
  onSelect,
  onClose,
  options = [
    "Ингредиенты",
    "Существующая Пищевая композиция",
    "Новая Пищевая композиция",
  ],
  ref,
}) {
  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className="custom-select"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {options.map((option) => (
        <div
          key={option}
          className="select-option"
          onClick={() => {
            onSelect(option);
            onClose();
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
}

SelectWindow.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  position: PropTypes.shape({
    top: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
  }).isRequired,
  dayId: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};
