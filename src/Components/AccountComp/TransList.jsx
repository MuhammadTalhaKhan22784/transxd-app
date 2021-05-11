import React, { useState, useLayoutEffect, useContext } from "react";
import { ColorContext } from "../../Context/Context";
import up from "../../Assets/Group 4450.png";
import down from "../../Assets/Group 4451.png";

const TransList = () => {
  const { color, setColor } = useContext(ColorContext);
  let { mode } = color;
  let style = {
    bggreen: "#27BDAD",
    bgblue: "#3C66C4",
    bglightblue: "#E9F8F7",
    bgred: "#CF4332",
    bgblack: "#0E2725",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
    bglightgreen: "#0A1716",
    bgcgreen: "#1EE834",
  };

  return (
    <React.Fragment>
      <div
        className="t_cards mt-4"
        style={{ color: mode === "light" ? style.bgblack : style.bgwhite }}
      >
        <img src={up} alt="..." />
        <div>
          <span>HVPACHV134</span>
          <span style={{fontSize:"0.9rem"}}>Card</span>
          <span style={{fontSize:"0.9rem"}}>Dec 23 2020 | 6:04:47 PM</span>
          <span>HVPACHV134</span>
        </div>
        <div className="">
          <span
            style={{
              color: style.bgcgreen,
            }}
          >
            1204.71
          </span>
          <span>Credit</span>
        </div>
      </div>
      <div
        style={{ color: mode === "light" ? style.bgblack : style.bgwhite }}
        className="d-flex align-items-center w-100 justify-content-between ps-3 pe-3 mt-2"
      >
        <span>Balance</span>
        <span
          style={{
            color: mode === "light" ? style.bggreen : style.bgdarkgreen,
          }}
        >
          1739.62
        </span>
      </div>
    </React.Fragment>
  );
};

export default TransList;
