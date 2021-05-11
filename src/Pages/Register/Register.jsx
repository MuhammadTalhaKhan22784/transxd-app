import React, { useState, useLayoutEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ColorContext } from "../../Context/Context";

// import "./Forms.css";
// assets

import fbIcon from "../../Assets/fb_icon.png";
import gmailIcon from "../../Assets/gmail_icon.png";
import orLine from "../../Assets/or_line.png";
import darkorline from "../../Assets/darkor_line.png";

import mailIcon from "../../Assets/mail-icon.png";
import iconBriefcase from "../../Assets/icon-briefcase.png";
import featherMail from "../../Assets/feather-mail.png";
import featherLock from "../../Assets/feather-lock.png";
import smilingafricanwoman from "../../Assets/smiling-african-woman.png";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
// import 'swiper/swiper-bundle.min.css'
import "swiper/swiper-bundle.css";
import RegisterPersonalDetais from "./RegisterPersonalDetais";
import CorporateRegistration from "./CorporateRegistration";
import CorporateRegisterStepper from "../../Components/RegistrationStepper.jsx/CorporateRegStepper";
SwiperCore.use([Pagination]);

const Register = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let history = useHistory();
  const [show, setShow] = useState(true);
  const [pass, setPass] = useState(false);
  const [showComp, setShowComp] = useState(false);
  const [regCop, setRegCop] = useState(false);
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
      <div className="main_form">
        {regCop === false ? (
          <>
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
                          color: mode === "light" ? style.bggreen : style.bgdarkgreen,
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
                      Please select how'd you like to register with us!
                    </p>
                  </div>

                  <div className="s_social_btn">
                    <button style={{ backgroundColor: "#3C66C4" }}>
                      <img src={fbIcon} alt="fbicon" />
                      <span className="ms-2">Register using Facebook</span>
                    </button>
                    <button style={{ backgroundColor: "#CF4332" }}>
                      <img src={gmailIcon} alt="gmailicon" />
                      <span className="ms-2">Register using Google</span>
                    </button>
                  </div>
                  <div className="or_line">
                    <img
                      style={{ display: mode === "light" ? "block" : "none" }}
                      src={orLine}
                      alt="img"
                    />
                    <img
                      style={{ display: mode === "light" ? "none" : "block" }}
                      src={darkorline}
                      alt="img"
                    />
                  </div>
                  <div className="s_social_btn">
                    <button
                      style={{ backgroundColor: "#27BDAD" }}
                      onClick={() => {
                        setShowComp(true);
                      }}
                    >
                      <img src={mailIcon} alt="fbicon" />
                      <span className="ms-2">Register using Email</span>
                    </button>
                  </div>
                  <form className="s_form_fields">
                    <span
                      className="s_label mt-2"
                      style={{
                        color: mode === "light" ? style.bgblack : style.bgwhite,
                      }}
                    >
                      Already a member{" "}
                      <Link
                        style={{
                          color:
                            mode === "light" ? style.bgblack : style.bgdarkgreen,
                        }}
                        to="/login"
                      >
                        &nbsp;Login!
                      </Link>
                    </span>
                    <div className="form_btn mt-5">
                      <button
                        onClick={() => {
                          setRegCop(true);
                        }}
                        style={{
                          // padding: "8px 30px",
                          border: "1px solid",
                          borderColor:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          backgroundColor: "transparent",
                          color:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                        }}
                        className="cus_btn1"
                      >
                        <img
                          className="me-2"
                          src={iconBriefcase}
                          alt="fbicon"
                        />
                        Register as a corporate client
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            ) : (
              <RegisterPersonalDetais />
            )}
          </>
        ) : (
          <CorporateRegisterStepper />
        )}
        <div className="login_img_content">
          <div>
            <Swiper pagination spaceBetween={50} slidesPerView={1}>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img
                  className="s_bgimg"
                  src={smilingafricanwoman}
                  alt="signupBg"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img
                  className="s_bgimg"
                  src={smilingafricanwoman}
                  alt="signupBg"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img
                  className="s_bgimg"
                  src={smilingafricanwoman}
                  alt="signupBg"
                />
              </SwiperSlide>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "475px",
                  marginRight: "50px ",
                }}
              >
                <img
                  className="s_bgimg"
                  src={smilingafricanwoman}
                  alt="signupBg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Register;
