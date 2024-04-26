import React, { Suspense } from 'react'
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './src/Router';
import "./src/app.css"
import { Loader } from './src/components/loader/Loader';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<Loader />}>
    <React.StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
)
