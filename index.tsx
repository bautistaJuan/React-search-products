import React from 'react'
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './src/Router';
import "./src/app.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
)
