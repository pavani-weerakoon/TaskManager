import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddNewTask from "./components/AddNewTask";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addNewTask" element={<AddNewTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
