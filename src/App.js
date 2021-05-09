import React, { useContext, useEffect } from "react";
import AppRouter from "./Router/AppRouter";
import { ColorContext, colors } from "./Context/Context";
import { reducer } from "./Context/Reducer";
import { useReducer } from "react";
import "./App.css";

function App() {
  let [state, dispatch] = useReducer(reducer, colors);

  //  console.log(state)
  useEffect(() => {
    let get = localStorage.getItem("theme");
    //  console.log(get)
    dispatch({
      type: "Dark",
      payload: get,
    });
    if (get === "dark") {
      document.body.classList.add("black");
    }
  }, []);

  return (
    <ColorContext.Provider value={{ color: state, setColor: dispatch }}>
      <div>
        <AppRouter />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
