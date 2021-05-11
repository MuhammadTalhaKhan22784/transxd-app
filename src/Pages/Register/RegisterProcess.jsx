import React, { useState, useLayoutEffect, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { ColorContext } from "../../Context/Context";

import "./Register.css";
// assets

import loader1L from "../../Assets/loader1L.png";
import loader2L from "../../Assets/loader2L.png";
import loaderd1 from "../../Assets/loaderd1.png";
import loaderd2 from "../../Assets/loaderd2.png";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
// import 'swiper/swiper-bundle.min.css'
import "swiper/swiper-bundle.css";

SwiperCore.use([Pagination]);

const RegisterProcess = () => {
  let [load, setLoad] = useState(false);

  
    useLayoutEffect(() => {
      window.scrollTo(0, 0);
    }, []);

    // setInterval(() => {
    //   setLoad(!load);
    //   console.log(load)
    // }, 2000);
  // useEffect(()=>{

  // },[load])

  let history = useHistory();
  const [show, setShow] = useState(true);
  const [pass, setPass] = useState(false);
  const [showComp, setShowComp] = useState(false);

  const showPassword = () => {
    setPass(!pass);
  };

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
      {/* <div className="main_form"> */}
      {showComp === false ? (
        <div className="login_form">
          <div className="s_form">
            <div className="s_text">
              <h2
                className="mt-4"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Register with{" "}
                <strong
                  style={{
                    color: style.bggreen,
                  }}
                >
                  Transxnd!
                </strong>
              </h2>
            </div>

            <div style={{ marginTop: "8rem",height:"70px" }}>
              {mode === "light" ? (
                <img src={!load ? loader1L : loader2L} alt="..." />
              ) : (
                <img src={!load ? loaderd1 : loaderd2} alt="..." />
              )}
            </div>
            <div className="s_para mt-4">
              <p
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Please enter your email address and password to login..
              </p>
            </div>
{/* 
            <form className="s_form_fields">
              <div className="form_btn mt-5">
                <button
                  onClick={() => {
                    setShowComp(true);
                  }}
                  style={{
                    padding: "8px 50px",
                    border: "none",
                    backgroundColor:
                      mode === "light" ? style.bggreen : style.bgdarkgreen,
                    color: mode === "light" ? style.bgwhite : style.bgblack,
                  }}
                  className="cus_btn1"
                >
                  Register
                </button>
              </div>
              <span
                className="s_label mt-4"
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Not a member?{" "}
                <Link
                  style={{
                    color: mode === "light" ? style.bgblack : style.bggreen,
                  }}
                  to="/login"
                >
                  &nbsp;Register Now!
                </Link>
              </span>
            </form>
        */}
          </div>
        </div>
      ) : (
        <RegisterProcess />
      )}
      {/* </div> */}
    </React.Fragment>
  );
};

export default RegisterProcess;
