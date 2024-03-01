function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex p-8 bg-slate-100 border border-purple-300 rounded-md">
        <button className="bg-green-400 text-white text-3xl px-3 py-2 rounded-md">
          Increment
        </button>
        <h1 className="text-3xl mx-10">0</h1>
        <button className="bg-red-400 text-white text-3xl px-3 py-2 rounded-md">
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
