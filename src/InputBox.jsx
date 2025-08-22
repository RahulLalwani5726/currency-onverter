export default function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  return (
    <div className="flex justify-around shadow-2xl bg-gray-200 py-3 rounded-2xl my-5">
      <div>
        <label htmlFor="">{label}</label>
        <br />
        <input
          className="shadow-2xl text-xl"
          type="number"
          value={amount}
          disabled={amountDisable}
          onChange={(e)=> onAmountChange && onAmountChange(e.target.value)}
          
        />
      </div>

      <div>
        <label className="text-gray-500" htmlFor="">
          Currency Type
        </label>
        <br />
        <select
          className="shadow-2xl text-xl overflow-hidden"
          id="contries"
          value={selectCurrency}

          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}

        </select>
      </div>
    </div>
  );
}
