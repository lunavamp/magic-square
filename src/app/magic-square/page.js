"use client";
import { useState } from "react";

export default function MagicSquare() {
  const [inputs, setInputs] = useState({
    input1: "",
    input3: "",
    input7: "",
    input4: "",
    input2: "",
  });

  const handleChange = (event, inputName) => {
    const inputValue = event.target.value;
    setInputs({ ...inputs, [inputName]: inputValue });
  };

  const checkValidity = (inputValue, correctNumber) => {
    if (inputValue === correctNumber) {
      return "correct";
    } else {
      return "error";
    }
  };

  return (
    <div className="magic-square-task section fx-col-sb">
      <div className="fx-sb">
        <p>
          1. Числа от 1 до 9 распределены в так называемом магическом квадрате.
          Каждая строка, столбец и диагональ в квадрате в сумме дают одно и то
          же число. Это число известно как магическое число квадрата. Некоторых
          чисел не хватает. Каково магическое число квадрата?
        </p>
        <div className="magic-grid">
          <div className="area1">
            <p>6</p>
          </div>
          <div className="area2">
            <input
              type="text"
              value={inputs.input1}
              onChange={(e) => handleChange(e, "input1")}
              className={checkValidity(inputs.input1, "1")}
            />
          </div>
          <div className="area3">
            <p>8</p>
          </div>
          <div className="area4">
            <input
              type="text"
              value={inputs.input3}
              onChange={(e) => handleChange(e, "input3")}
              className={checkValidity(inputs.input3, "3")}
            />
          </div>
          <div className="area5">
            <p>5</p>
          </div>
          <div className="area6">
            <input
              type="text"
              value={inputs.input7}
              onChange={(e) => handleChange(e, "input7")}
              className={checkValidity(inputs.input7, "7")}
            />
          </div>
          <div className="area7">
            <input
              type="text"
              value={inputs.input4}
              onChange={(e) => handleChange(e, "input4")}
              className={checkValidity(inputs.input4, "4")}
            />
          </div>
          <div className="area8">
            <p>9</p>
          </div>
          <div className="area9">
            <input
              type="text"
              value={inputs.input2}
              onChange={(e) => handleChange(e, "input2")}
              className={checkValidity(inputs.input2, "2")}
            />
          </div>
        </div>
      </div>
      <button className="btn">Продолжить</button>
    </div>
  );
}
