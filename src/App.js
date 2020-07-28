import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import useEventSource from "./hooks/useEventSource";

function App() {
  const [data] = useEventSource("URL LIVES HERE");
  useEffect(() => {
    console.log(data);
  }, [data]);
  return <div className="App">Nothing Fun</div>;
}

export default App;
