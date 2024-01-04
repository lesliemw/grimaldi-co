function QuantityCounter({ count, setCount }) {
  function subtract() {
    if (count === 0) return;
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function add() {
    setCount(count + 1);
  }
  return (
    <div className="w-auto px-4 md:w-1/6 lg:w-2/12 ">
      <div className="inline-flex items-center px-4 font-semibold text-gray-500 border border-gray-200 rounded-md  ">
        <button className="py-2 hover:text-gray-700 " onClick={subtract}>
          -
        </button>
        <input
          className="w-12 px-2 justify-center py-4 text-center border-0 rounded-md  bg-gray-50  "
          value={count}
          placeholder={count}
        />
        <button className="py-2 hover:text-gray-700 " onClick={add}>
          +
        </button>
      </div>
      {count === 0 && (
        <div className="flex justify-center">
          <button
            type="button"
            className="font-medium text-indigo-500 hover:text-indigo-600"
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
}

export default QuantityCounter;
