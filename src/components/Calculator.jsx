import React, { useState } from 'react';

function Calculator() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const clickHandle = (e) => {
    if (error) {
      setError('');
      setResult('');
    }

    setResult(result.concat(e.target.value));
  };

  const clearScreen = () => {
    setResult('');
    setError('');
  };

  const calculate = () => {
    try {
      // Use a regular expression to prevent unsafe calculations
      if (/[^0-9+\-*/().]/.test(result)) {
        throw new Error('Invalid input');
      }

      const calculatedResult = eval(result).toString();

      // Check for division by zero
      if (calculatedResult === 'Infinity' || calculatedResult === '-Infinity') {
        throw new Error('Division by zero');
      }

      setResult(calculatedResult);
    } catch (err) {
      setError('Error: ' + err.message);
    }
  };

  return (
    <div className="bg-gray-900 text-white w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-gray-900 rounded-2xl shadow-xl border-4 border-gray-400">
        <div className="screen p-2">
          <input
            type="text"
            value={error || result}
            className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]text-white px-1 text-right placeholder-black outline-none rounded-lg bg-gray-200 text-2xl pt-10 w-full text-black"
            placeholder="0"
            readOnly
          />
        </div>

        <div className="brand flex justify-center mb-3 shadow-md text-gray-500 bg-gray-200 bg-opacity-90">
          <h1 className="text-gray-900 text-xs font-bold">CalC By Mr.100rabh</h1>
        </div>

        <div className="keyboard">
          <div className="m-4 flex justify-between">
            <input type="button" onClick={clearScreen} value="C" className="bg-red-300 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="<" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="%" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="/" className="bg-red-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
          </div>

          <div className="m-4 flex justify-between">
            <input type="button" value="7" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="8" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="9" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="*" className="bg-green-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
          </div>

          <div className="m-4 flex justify-between">
            <input type="button" value="4" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="5" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="6" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="-" className="bg-indigo-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
          </div>

          <div className="m-4 flex justify-between">
            <input type="button" value="1" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="2" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="3" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="+" className="bg-purple-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
          </div>

          <div className="m-4 flex justify-between">
            <input type="button" value="0" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="00" className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" value="." className="bg-gray-200 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" onClickCapture={clickHandle} />
            <input type="button" onClick={calculate} value="=" className="bg-orange-400 shadow-md rounded-lg w-12 h-12 text-center text-black font-medium flex justify-center items-center outline-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
