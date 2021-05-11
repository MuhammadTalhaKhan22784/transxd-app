import React, { useState, useLayoutEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ColorContext } from "../../Context/Context";

// import "./Forms.css";
// assets

import fbIcon from "../../Assets/fb_icon.png";
import gmailIcon from "../../Assets/gmail_icon.png";
import orLine from "../../Assets/or_line.png";
import darkorline from "../../Assets/darkor_line.png";

import pwdopen from "../../Assets/pwdopen.png";
import featherMail from "../../Assets/feather-mail.png";
import featherLock from "../../Assets/feather-lock.png";
import smartphone from "../../Assets/Icon feather-smartphone.png";

import userimg from "../../Assets/userimg.png";
import calendaricon from "../../Assets/calendaricon.png";
import locationimg from "../../Assets/locationimg.png";
import smilingafricanwoman from "../../Assets/smiling-african-woman.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
// import 'swiper/swiper-bundle.min.css'
import "swiper/swiper-bundle.css";
import DatePicker from "../../Components/DatePicker/DatePicker";
import RegisterAlmostDone from "./RegisterAlmostDone";
import LanguageDropdown from "../../Components/Dropdown/LanguageDropdown";
SwiperCore.use([Pagination]);

const RegisterContactDetails = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <div className="s_para mt-3">
              <p
                style={{
                  color: mode === "light" ? style.bgblack : style.bgwhite,
                }}
              >
                Please enter your email address and password to login..
              </p>
            </div>
            <h2
              className="fs-6 mt-5"
              style={{
                color: mode === "light" ? style.bggreen : style.bgdarkgreen,
              }}
            >
              Contact Details
            </h2>

            <form className="s_form_fields">
              <div className="p_input">
                <img src={locationimg} alt="" />
                <select
                  className="cus_select"
                  style={{
                    color: mode === "light" ? style.bggreen : style.bgwhite,
                    paddingLeft: "10px",
                  }}
                >
                  <option
                    style={{
                      color:
                        mode === "light" ? style.bggreen : style.bgdarkgreen,
                    }}
                    selected
                  >
                    Country of Residence
                  </option>
                  <option
                    style={{
                      color:
                        mode === "light" ? style.bggreen : style.bgdarkgreen,
                    }}
                    value="dasda"
                  >
                    option a
                  </option>
                </select>
              </div>

              <div className="p_input">
                <img src={smartphone} alt="..." />
                <LanguageDropdown />
                <input
                  style={{
                    paddingLeft: "0px",
                    color: mode === "light" ? style.bggreen : style.bgwhite,
                  }}
                  placeholder="Phone Number"
                  type="text"
                />
              </div>

              <div className="p_input">
                <img src={featherLock} alt="..." />
                <input
                  style={{
                    paddingLeft: "10px",
                    color: mode === "light" ? style.bggreen : style.bgwhite,
                  }}
                  placeholder="Referal ID"
                  type="text"
                />
              </div>
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
          </div>
        </div>
      ) : (
        <RegisterAlmostDone />
      )}
      {/* </div> */}
    </React.Fragment>
  );
};

export default RegisterContactDetails;
