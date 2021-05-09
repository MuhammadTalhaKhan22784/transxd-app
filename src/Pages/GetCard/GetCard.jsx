import React, { useState, useLayoutEffect, useContext } from "react";
import { ColorContext } from "../../Context/Context";
import "./GetCard.css";
import { Swiper, SwiperSlide } from "swiper/react";

import gchip1 from "../../Assets/gchip1.png";
import gchip2 from "../../Assets/gchip2.png";
import gchip3 from "../../Assets/gchip3.png";
import gchip4 from "../../Assets/gchip4.png";
import smilingafricanwoman from "../../Assets/smiling-african-woman.png";

const GetCard = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div
        className="getcard_section"
        style={{
          color: mode === "light" ? style.bgblack : style.bgwhite,
        }}
      >
        <div className="gs_left">
          <div className="gs_text_content">
            <h2>
              Get more with{" "}
              <strong
                style={{
                  color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                }}
              >
                Transxnd!
              </strong>{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata{" "}
            </p>
          </div>
          <div className="gs_cards_content">
            <div className="gc_container container">
              <div className="row gy-5">
                <div className="col-lg-6">
                  <div className="gc_card">
                    <img src={gchip1} alt="..." />
                    <h2
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      Debit card + E-Wallet
                    </h2>
                    <p>
                      Transxnd is a rapid money transfer service, designed to
                      provide a low cost service within Africa & for Africans in
                      the diaspora.
                    </p>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid",
                        borderColor:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                      className="cus_btn1"
                    >
                      Get your card
                    </button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="gc_card">
                    <img src={gchip2} alt="..." />
                    <h2
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      Debit card + E-Wallet
                    </h2>
                    <p>
                      Transxnd is a rapid money transfer service, designed to
                      provide a low cost service within Africa & for Africans in
                      the diaspora.
                    </p>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid",
                        borderColor:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                      className="cus_btn1"
                    >
                      Get your card
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 c_height">
                  <div className="gc_card">
                    <img src={gchip3} alt="..." />
                    <h2
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      Debit card + E-Wallet
                    </h2>
                    <p>
                      Transxnd is a rapid money transfer service, designed to
                      provide a low cost service within Africa & for Africans in
                      the diaspora.
                    </p>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid",
                        borderColor:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                      className="cus_btn1"
                    >
                      Get your card
                    </button>
                  </div>
                </div>
                <div className="col-lg-6 c_height">
                  <div className="gc_card">
                    <img src={gchip4} alt="..." />
                    <h2
                      style={{
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                    >
                      Debit card + E-Wallet
                    </h2>
                    <p>
                      Transxnd is a rapid money transfer service, designed to
                      provide a low cost service within Africa & for Africans in
                      the diaspora.
                    </p>
                    <button
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid",
                        borderColor:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                        color:
                          mode === "light" ? style.bggreen : style.bgdarkgreen,
                      }}
                      className="cus_btn1"
                    >
                      Get your card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="gs_right"></div> */}

        <div className="login_img_content gs_right">
          <div>
            <Swiper pagination spaceBetween={50} slidesPerView={1}>
              <SwiperSlide
                style={{
                  width: "546px",
                  height: "440px",
                  marginRight: "50px ",
                  display: "flex",
                  justifyContent: "center",
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
                  height: "440px",
                  marginRight: "50px ",
                  display: "flex",
                  justifyContent: "center",
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
                  height: "440px",
                  marginRight: "50px ",
                  display: "flex",
                  justifyContent: "center",
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
                  height: "440px",
                  marginRight: "50px ",
                  display: "flex",
                  justifyContent: "center",
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

export default GetCard;
