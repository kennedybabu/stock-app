import Graph from "./components/Graph";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Graph />
    </div>
  );
}

export default App;
