import { useState, useEffect, useCallback, useRef } from "react";
import useCurrencyInfo from "./GetCurrency";
import InputBox from "./InputBox";

function App() {
  const [ammount, setAmount] = useState(1);
  const [convertedAmmount, setConAmount] = useState(0);
  const [from, setFromCurrency] = useState("usd");
  const [to, setToCurrency] = useState("inr");

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConAmount((ammount * Number(currencyInfo[to])).toFixed(2));
  };
  function swap() {
    setAmount(convertedAmmount);
    setFromCurrency(to);

    setToCurrency(from);
  }
  useEffect(convert, [ammount, from, swap]);
  return (
    <>
      <div className="h-screen w-full fixed">
            <h1 className="text-3xl font-bold font-sans text-white bg-blue-500 text-center mt-32 mb-0 w-max mx-auto p-3 rounded-3xl">Currency Conveter {to} From {from}</h1>
        <div className="backdrop-blur-sm bg-white/30 w-full h-auto max-w-3xl mx-auto mb-52 mt-5 px-5 py-3 rounded-2xl shadow-2xl shadow-gray-500 ">
          <div className="w-full max-w-fit mx-auto my-1">
          </div>
          <InputBox
            label="From"
            amount={ammount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFromCurrency(currency)}
            selectCurrency={from}
            amountDisable={false}
            currencyDisable={false}
            onAmountChange={(amount) => setAmount(amount)}
          />

          <div className="w-full max-w-fit mx-auto my-1">
            <button 
              onClick={swap}
              className="bg-blue-500 shadow-2xl px-9 py-3 rounded-3xl cursor-pointer text-2xl font-medium shadow-2xl text-white "
            >
              Swap
            </button>
          </div>
          <InputBox
            label="To"
            amount={convertedAmmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setToCurrency(currency)}
            selectCurrency={to}
            amountDisable={false}
            currencyDisable={false}
            onAmountChange={(amount) => setConAmount(ammount)}
          />
        </div>
      </div>
    </>
  );
}

export default App;

{
  /* <div className="flex justify-around shadow-2xl ">
            <div className="flex flex-col gap-3 py-3">
              <label className="text-gray-500" htmlFor="">
                From
              </label>
              <input className="border-2" type="text" placeholder="0" />
            </div>
            <div className="flex flex-col gap-3 py-3">

            </div>
          </div>

          <button className="text-center">Swap</button>

          <div className="flex justify-around shadow-2xl ">
            <div className="flex flex-col gap-3 py-3">
              <label className="text-gray-500" htmlFor="">
                From
              </label>
              <input className="border-2" type="text" placeholder="0" />
            </div>
            <div className="flex flex-col gap-3 py-3">
              <label className="text-gray-500" htmlFor="">
                Currency Type
              </label>
              <select name="cars" id="cars" form="carform">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
          </div> */
}
