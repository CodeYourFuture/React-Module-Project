import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/components/App/App.jsx";
import Footer from "@/components/Footer/Footer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Footer />
  </React.StrictMode>
);
