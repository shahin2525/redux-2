import {
  decrement,
  decrementByValue,
  increment,
  incrementByValue,
} from "./redux/feature/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex p-8 bg-slate-100 border border-purple-300 rounded-md">
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="bg-green-400 text-white text-3xl px-3 py-2 rounded-md"
        >
          IncrementByValue
        </button>
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-400 text-white text-3xl px-3 py-2 rounded-md"
        >
          Increment
        </button>
        <h1 className="text-3xl mx-10">{count}</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-400 text-white text-3xl px-3 py-2 rounded-md"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(decrementByValue({ data: 5 }))}
          className="bg-red-400 text-white text-3xl px-3 py-2 rounded-md"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
