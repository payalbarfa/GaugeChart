import React from "react";
import { useDispatch } from "react-redux";
import { getRandomValue } from "../../utils";
import { setGaugeValue } from "../../slice";

const Button = () => {
  const dispatch = useDispatch();

  const updateValue = () => {
    const value = getRandomValue();
    dispatch(setGaugeValue(value));
  };

  return (
    <button onClick={updateValue} className="update-button">
      Update Value
    </button>
  );
};

export default Button;
