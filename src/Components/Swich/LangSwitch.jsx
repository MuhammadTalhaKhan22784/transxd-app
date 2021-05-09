import React, { useContext } from "react";
import { ColorContext } from "../../Context/Context";

import "./style.css";
const LangSwitch = () => {
  const { color, setColor } = useContext(ColorContext);
  let { mode } = color;
  let style = {
    bggreen: "#27BDAD",
    bgblue: "#3C66C4",
    bgred: "#CF4332",
    bgblack: "#0E2725",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
  };
  return (
    <React.Fragment>
      <input
        // onChange={onChange}
        // checked={language.id_ === english.id_}
        type="checkbox"
        id="lan"
        className="lol-checkbox"
      />
      <label
        className="button"
        for="lan"
        style={{
          border: "1px solid",
          borderColor: mode === "light" ? style.bggreen : style.bgdarkgreen,
          color: mode === "light" ? style.bggreen : style.bgdarkgreen,
        }}
      >
        <div
          className="knob"
          style={{
            backgroundColor:
              mode === "light" ? style.bggreen : style.bgdarkgreen,
          }}
        ></div>
        <div className="subscribe">ENG</div>
        <div className="alright">FRE</div>
      </label>
    </React.Fragment>
  );
};

export default LangSwitch;
