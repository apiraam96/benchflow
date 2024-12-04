import { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/api/login")
      .then((result) => result.json())
      .then((data) => console.log(data.message));
  }, []);
  return (
    <>
      <h1 className="text-5xl font-bold">BenchFlow</h1>
    </>
  );
}

export default App;
