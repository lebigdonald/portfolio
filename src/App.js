import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import {Analytics} from "@vercel/analytics/react";

function App() {
  return (
    <div>
      <Main />
      <Analytics />
    </div>
  );
}

export default App;
