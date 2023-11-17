import React from "react";
import Account from "./components/Account";
import Details from "./components/Details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/details" Component={Details} />
          <Route path="/" Component={Account} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
