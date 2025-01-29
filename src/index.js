import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import App from "./App"; // Import the App component

// Wrap the App component with Router here, NOT in App.js
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root") // The root element where your app will be mounted
);
