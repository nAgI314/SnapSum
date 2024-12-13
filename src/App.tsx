import { Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";

import './App.css'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
