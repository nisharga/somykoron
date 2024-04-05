import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./style/global.css";
import { TheHeader } from "./app/Components/index.ts";
import { ScrollToTop } from "./app/utils/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TheHeader />
    <ScrollToTop />
    <App />
  </React.StrictMode>
);
