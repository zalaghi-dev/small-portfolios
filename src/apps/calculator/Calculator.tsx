import classNames from "classnames";
import { buttonsConfig } from "./buttonsConfig";
import { useState } from "react";
const operators = ["*", "/", "+", "-", "."];
const Calculator = () => {
  const [inputText, setInputText] = useState<string>("");
  const evalFunction = () => {
    try {
      inputText &&
        inputText !== "Error" &&
        setInputText(eval(inputText)?.toString());
    } catch {
      setInputText("Error");
    }
  };
  const calculateResult = (operation: (num: number) => number) => {
    try {
      if (inputText && inputText !== "Error") {
        const result = eval(inputText);
        const calculatedResult = operation(Number(result));
        setInputText(calculatedResult.toString());
      }
    } catch (error) {
      setInputText("Error");
    }
  };

  const handleButtonClick = (val: string) => {
    switch (val) {
      case "=":
        evalFunction();
        break;
      case "c":
        setInputText("");
        break;
      case "b":
        setInputText(
          inputText.length > 0
            ? inputText === "Error"
              ? ""
              : inputText.slice(0, -1)
            : ""
        );
        break;
      case "root":
        calculateResult(Math.sqrt);
        break;
      case "pow2":
        calculateResult((num) => Math.pow(num, 2));
        break;
      case "pow3":
        calculateResult((num) => Math.pow(num, 3));
        break;
      case "%":
        calculateResult((num) => num / 100);
        break;
      case "sin":
        calculateResult((num) => Math.sin((num * Math.PI) / 180));
        break;
      case "cos":
        calculateResult((num) => Math.cos((num * Math.PI) / 180));
        break;
      case "tan":
        calculateResult((num) => Math.tan((num * Math.PI) / 180));
        break;
      case "cot":
        calculateResult((num) => 1 / Math.tan((num * Math.PI) / 180));
        break;
      default:
        if (inputText !== undefined && inputText !== "Error") {
          setInputText((prev) =>
            prev &&
            operators.includes(val) &&
            operators.includes(prev.slice(-1))
              ? prev.slice(0, -1) + val
              : prev + val
          );
        }
        break;
    }
  };

  const commonButtonClass =
    "flex items-center justify-center transition-all ease-in duration-75 hover:scale-105 focus:scale-100 active:scale-95 focus:ring-2 size-12 text-xl bg-gradient-to-br  hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg";

  return (
    <form className="max-w-xs relative mx-auto p-6 mb-2 text-text rounded-lg bg-gradient-to-br from-primary-600 to-blue-500 hover:from-primary-600 hover:to-blue-500 hover:text-white">
      <input
        readOnly
        value={inputText}
        onChange={({ target }) => setInputText(target.value)}
        type="text"
        className="py-3 px-3 block w-full border-text/40 rounded-lg text-sm focus:border-blue-500  disabled:opacity-50 disabled:pointer-events-none bg-neutral-900 border-neutral-700 text-neutral-400 placeholder-neutral-500 focus:ring-neutral-600"
        placeholder="Press a key to enter something..."
      />
      <div className="my-3 items-center justify-center gap-3 grid m-auto grid-cols-4">
        {buttonsConfig.map(({ key, addonClass, label }) => (
          <button
            key={key}
            onClick={() => handleButtonClick(key)}
            type="button"
            className={classNames(commonButtonClass, addonClass)}
          >
            {label}
          </button>
        ))}
      </div>
    </form>
  );
};

export default Calculator;
