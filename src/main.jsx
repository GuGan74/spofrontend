import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { PlayerContextProvider } from './context/PlayERContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PlayerContextProvider>
    <App/>
    </PlayerContextProvider>
    
    

    
    </BrowserRouter>
    
  </StrictMode>,
)



// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";


// import { PlayerContextProvider } from "./context/PlayERContext"; // ✅ Correct import

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <PlayerContextProvider> 
//       <App />
//     </PlayerContextProvider>
//   </BrowserRouter>
// );
