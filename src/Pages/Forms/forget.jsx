import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import smilingafricanwoman from "../../Assets/smiling-african-woman.png";
import featherMail from "../../Assets/feather-mail.png";

import "./Forms.css";
// assets
// import xSmallIcon from "../../Assets/Group 26@2x.png";
// import xMedumIcon from "../../Assets/Group 25@3x.png";
// import polygon1 from "../../Assets/Polygon 3@2x.png";
// import polygon2 from "../../Assets/Polygon 2@2x.png";
// import lgbgright from "../../Assets/lg_bgright.png";
import forgotlogo from "../../Assets/forgotlogo.png";
// import Button from "../../Components/Btn/Btn";

const Forget = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <div className="main_form">
        <div className="login_form">
          <div className="s_form">
            <div className="s_text">
              <h2 className="text_darkblue fw-bold mt-4">
                Forgot <strong className="text_bluegreen">Password</strong>
              </h2>
            </div>
            <div className="s_para">
              <p className="text_lightgray">
                To err is to human! Enter the your email address and we'll send
                you a magic link!
              </p>
            </div>
            <div className="s_img">
              <img src={forgotlogo} alt="lgLogo" />
            </div>
            <form className="s_form_fields mt-3">
              <div className="p_input">
                <img src={featherMail} alt="..." />
                <input
                  style={{ paddingLeft: "0" }}
                  placeholder="Email address"
                  type="email"
                />
              </div>
              <div className="form_btn ">
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #27BDAD",
                    color: "black",
                  }}
                  className="cus_btn1"
                >
                  Sign-up today!
                </button>
              </div>
              <span className="s_label mt-3">
                Didn't receive a code?{" "}
                <Link to="/login" className="text_lightpurple">
                  &nbsp;Contact Help Center!
                </Link>
              </span>
            </form>
          </div>
        </div>

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
                  alt="loginBg"
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
                  alt="loginBg"
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
                  alt="loginBg"
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
                  alt="loginBg"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
     
     
      </div>
    </React.Fragment>
  );
};

export default Forget;
