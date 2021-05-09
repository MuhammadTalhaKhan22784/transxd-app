import React, { useState, useLayoutEffect, useContext } from "react";
import { ColorContext } from "../Context/Context";

import transxdlogo from "../Assets/transxdlogo.png";
import transxdlogomob from "../Assets/transxdlogomob.png";
import fbIcon from "../Assets/fbicon.png";
import fbIconMb from "../Assets/fbiconmb.png";
import instaIcon from "../Assets/instaicon.png";
import instaIconMb from "../Assets/instaiconmb.png";
import twiterIcon from "../Assets/twitericon.png";
import twiterIconMb from "../Assets/twitericonmb.png";
import linkedinIcon from "../Assets/linkedinicon.png";
import linkedinIconMb from "../Assets/linkediniconmb.png";
import newslettericon from "../Assets/newslettericon.png";
import newslettericonmob from "../Assets/newslettericonmob.png";
import lightimg from "../Assets/lightimg.png";
import darkimg from "../Assets/darkimg.png";
import copyright from "../Assets/copyright.png";
import copyrightmb from "../Assets/copyrightmb.png";
import "./style.css";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
const Footer = () => {
  let history = useHistory();
  const [showMode, setShowMode] = useState(false);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { color, setColor } = useContext(ColorContext);
  let { mode } = color;
  let style = {
    bggreen: "#27BDAD",
    bgblue: "#3C66C4",
    bglightblue: "#E9F8F7",
    bgred: "#CF4332",
    bgblack: "#000000",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
    bglightgreen: "#0A1716",
  };

  return (
    <React.Fragment>
      <div
        className="footer"
        style={{
          background: mode === "light" ? style.bglightblue : style.bgblack,
          color: mode === "light" ? style.bgblack : style.bgwhite,
        }}
      >
        <div className="footer_container">
          <div className="fc_2">
            <Link to="/">
              {mode === "light" ? (
                <img src={transxdlogo} alt="img" />
              ) : (
                <img
                  style={{ width: "250px" }}
                  src={transxdlogomob}
                  alt="img"
                />
              )}
            </Link>
            <div className="fc2_m">
              <div className="fc2_button">
                <button
                  style={{
                    marginTop: "0.8rem",
                    backgroundColor: "transparent",
                    border: "1px solid",
                    borderColor:
                      mode === "light" ? style.bggreen : style.bgdarkgreen,
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                    padding: "8px 20px",
                  }}
                  className="cus_btn1 me-4"
                >
                  Sign up
                </button>
                <button
                  style={{
                    marginTop: "0.8rem",
                    backgroundColor: "transparent",
                    border: "1px solid",
                    borderColor:
                      mode === "light" ? style.bggreen : style.bgdarkgreen,
                    color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                    padding: "8px 28px",
                  }}
                  className="cus_btn1"
                >
                  Login
                </button>
              </div>

              <p>
                Transxnd Remittance Services SARL Quatier Avenou, Boulevard Du
                30 Aout, 05 BP 851 Lome, Togo
              </p>
            </div>

            <div className="fc_btm_desk">
              <div className="fc_btm">
                <div>
                  <span>IBC: BVI 2022059</span>
                  <span>RCCM: MA-BKO 2019 E-14904</span>
                  <span>RCCM: NE-NIM 01 2019 B13 00387</span>
                </div>
                <div>
                  <span>RCCM: CI-ABJ 2020 B 01087</span>
                  <span>RCCM: TG-LOM 2019 B3045</span>
                </div>
              </div>
              <div className="fc_social">
                {mode === "light" ? (
                  <div>
                    <img src={fbIcon} alt="icon" />
                    <img src={instaIcon} alt="icon" />
                    <img src={twiterIcon} alt="icon" />
                    <img src={linkedinIcon} alt="icon" />
                  </div>
                ) : (
                  <div>
                    <img src={fbIconMb} alt="icon" />
                    <img src={instaIconMb} alt="icon" />
                    <img src={twiterIconMb} alt="icon" />
                    <img src={linkedinIconMb} alt="icon" />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="fc_1">
            <div>
              <span
                className="mb-2"
                style={{
                  color: mode === "light" ? style.bggreen : style.bgwhite,
                }}
              >
                Transxd
              </span>
              <span
                onClick={() => {
                  history.push("/product");
                }}
              >
                Home
              </span>
              <span
                onClick={() => {
                  history.push("/product");
                }}
              >
                Payments
              </span>
              <span
                onClick={() => {
                  history.push("/consensus");
                }}
              >
                Features
              </span>
              <span
                onClick={() => {
                  history.push("/profile");
                }}
              >
                About us
              </span>
              <span
                onClick={() => {
                  history.push("/profile");
                }}
              >
                Contact us
              </span>
            </div>
            <div>
              <span
                className="mb-2"
                style={{
                  color: mode === "light" ? style.bggreen : style.bgwhite,
                }}
              >
                Legal
              </span>
              <span>Terms of use</span>
              <span
                onClick={() => {
                  history.push("/about");
                }}
              >
                Privacy Policy
              </span>
              <span
                onClick={() => {
                  history.push("/contact-us");
                }}
              >
                Company Policy
              </span>
            </div>
            <div>
              <span
                className="mb-2"
                style={{
                  color: mode === "light" ? style.bggreen : style.bgwhite,
                }}
              >
                Business
              </span>
              <span
                onClick={() => {
                  history.push("/terms");
                }}
              >
                Contact us
              </span>
              <span>invest with us</span>
              <span>Feedback</span>
            </div>
          </div>
          <div className="fc_3">
            <h2
              className="fs-4"
              style={{
                color: mode === "light" ? style.bggreen : style.bgwhite,
              }}
            >
              Newsletter
            </h2>
            <p>
              Join all the people who get the best exchange rates with Transxnd.
              We’re cheaper than most leading African Banks. Enjoy rapid
              transfers and the lowest fees. Your friends and family get more
              when you send them money with Transxnd.
            </p>
            <div className="ns_letter">
              <input
                style={{
                  border: "1px solid",
                  borderColor:
                    mode === "light" ? style.bggreen : style.bgdarkgreen,
                  color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                }}
                type="text"
                placeholder="Enter Email"
              />
              {mode === "light" ? (
                <img src={newslettericon} alt="..." />
              ) : (
                <img src={newslettericonmob} alt="..." />
              )}
            </div>
            <div className="f_switch w-100 d-flex justify-content-end">
              <button
                style={{ display: showMode === false ? "block" : "none" }}
                className="btn s_btn"
                onClick={() => {
                  setShowMode(true);
                  // handleDark();
                }}
              >
                <img
                  src={lightimg}
                  style={{
                    width: "35px",
                  }}
                  alt="..."
                />
              </button>
              <button
                className="btn s_btn"
                style={{ display: showMode === false ? "none" : "block" }}
                onClick={() => {
                  setShowMode(false);
                  // handleLight();
                }}
              >
                <img
                  src={darkimg}
                  style={{
                    width: "35px",
                  }}
                  alt="..."
                />
              </button>
            </div>
          </div>

          <div className="fc_btm_mob">
            <div className="fc_btm">
              <div>
                <span>IBC: BVI 2022059</span>
                <span>RCCM: MA-BKO 2019 E-14904</span>
                <span>RCCM: NE-NIM 01 2019 B13 00387</span>
              </div>
              <div>
                <span>RCCM: CI-ABJ 2020 B 01087</span>
                <span>RCCM: TG-LOM 2019 B3045</span>
              </div>
            </div>
            <div className="fc_social">
              <div>
                <img src={fbIcon} alt="icon" />
                <img src={instaIcon} alt="icon" />
                <img src={twiterIcon} alt="icon" />
                <img src={linkedinIcon} alt="icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="copy_right_text">
          <span>
            Copyright{" "}
            {mode === "light" ? (
              <img src={copyright} alt="img" />
            ) : (
              <img src={copyrightmb} alt="img" />
            )}{" "}
            2021. Rarare Inc. All rights reserved.{" "}
          </span>
        </div>
        {/* <div className="fc_2 mob_fc_2">
          
        </div> */}
      </div>
    </React.Fragment>
  );
};

export default Footer;
