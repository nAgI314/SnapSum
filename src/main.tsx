import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router basename="/SnapSum">
      <App />
    </Router>
  </React.StrictMode>,
);