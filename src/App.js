const Card = () => (
  <div className="bg-gray-700 text-white p-4 m-2 rounded-md shadow-lg max-h-96 overflow-auto">
    <h2 className="text-xl mb-2">Card Title</h2>
    <img
      src="https://via.placeholder.com/150"
      alt="Card"
      className="mb-2 w-full"
    />
    <div className={'flex flex-row justify-between'}>
      <p className="text-md">제목</p>
      <p>200만원</p>
    </div>
  </div>
);

function App() {
  const cards = new Array(9).fill(null);
  return (
    <div className="bg-gray-800 min-h-screen text-white p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-3xl">Title</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Login
        </button>
      </header>
      <div className="flex justify-start mb-4">
        <div className="bg-gray-700 text-white px-4 py-2 rounded-md ml">
          Selected Box
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md m-1">
            Btn 1
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md m-1">
            Btn 2
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md m-1">
            Btn 3
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md m-1">
            Btn 4
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((_, idx) => (
          <Card key={idx} />
        ))}
      </div>
      {/* Infinite Scroll Placeholder */}
      <div className="mt-4 text-center text-xl">
        Infinite Scroll Placeholder
      </div>
    </div>
  );
}

export default App;
