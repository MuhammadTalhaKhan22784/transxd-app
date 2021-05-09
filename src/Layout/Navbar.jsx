import React, { useState, useEffect, useContext } from "react";
import { ColorContext } from "../Context/Context";
import { Link } from "react-router-dom";
//
// import { Icon } from "@iconify/react";
// import baselineKeyboardArrowDown from "@iconify-icons/ic/baseline-keyboard-arrow-down";

import "./style.css";
// import LanguageDropdown from "../Components/Dropdown/LanguageDropdown.jsx";
// import NotificationDropdown from "../Components/Dropdown/NotificationDropdown";
// import CartDropdown from "../Components/Dropdown/CartDropdown";
// import SearchDropdown from "../Components/Dropdown/SearchDropdown";
// import UserDropdown from "../Components/Dropdown/UserDropdown";

// assets
import transxdlogo from "../Assets/transxdlogo.png";
import transxdlogomob from "../Assets/transxdlogomob.png";
import lightimg from "../Assets/lightimg.png";
import darkimg from "../Assets/darkimg.png";
import userprofileimg from "../Assets/userprofileimg.png";
import path from "../Assets/path.png";
import pathmb from "../Assets/pathmb.png";
import LangSwitch from "../Components/Swich/LangSwitch";
import togglebtn from "../Assets/togglebtn.png";
// import MobSearchDropdown from "Components/Dropdown/MobSearchDropdown";

const Navbar = () => {
  let [isActive, setIsActive] = useState(false);
  let [open, setOpen] = useState(false);
  const [showMode, setShowMode] = useState(false);
  const { color, setColor } = useContext(ColorContext);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClose);
    return () => window.removeEventListener("click", handleClose);
  }, []);

  const handleLogin = () => {
    setTimeout(() => {
      setIsActive(true);
    }, 1000);
  };
  const handleLogout = () => {
    setIsActive(false);
  };

  const handleDark = () => {
    localStorage.setItem("theme", "dark");
    let set = localStorage.getItem("theme");
    console.log(set);
    setColor({
      type: "Dark",
      payload: set,
    });
    document.body.classList.remove("white");
    document.body.classList.add("black");
  };
  const handleLight = () => {
    localStorage.setItem("theme", "light");
    let set = localStorage.getItem("theme");
    console.log(set);

    setColor({
      type: "light",
      payload: set,
    });
    document.body.classList.remove("black");
    document.body.classList.add("white");
  };

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
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg c_navbar"
        id="top"
        style={{
          backgroundColor:
            mode === "light" ? style.bglightblue : style.bglightgreen,
        }}
      >
        <div
          className={
            isActive ? "c_container container" : "container cn_container"
          }
        >
          <div className="d-flex align-items-center">
            <Link className="navbar-brand" to="/">
              {mode === "light" ? (
                <img className="nav_rarare_logo" src={transxdlogo} alt="logo" />
              ) : (
                <img
                  className="nav_rarare_logo"
                  src={transxdlogomob}
                  alt="logo"
                />
              )}
            </Link>

            <div className="nav_switch">
              <li className="nav-item">
                <button
                  style={{ display: showMode === false ? "block" : "none" }}
                  className="btn s_btn"
                  onClick={() => {
                    setShowMode(true);
                    handleDark();
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
                    handleLight();
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
              </li>
              <li className="nav-item">
                <LangSwitch />
              </li>
            </div>
          </div>
          {isActive ? (
            <div className="d-flex align-items-center">
              <button
                className="navbar-toggler"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
              >
                <img src={togglebtn} alt="img" />
              </button>
            </div>
          ) : (
            <div className="d-flex align-items-center">
              {/* <MobSearchDropdown /> */}
              <button
                className="navbar-toggler"
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setOpen(!open);
                }}
              >
                <img src={togglebtn} alt="img" />
              </button>
            </div>
          )}
          <div
            className="collapse desk_nav_collapse navbar-collapse"
            // id="navbarSupportedContent"
          >
            <ul
              className="navbar-nav align-items-center me-auto mb-2 mb-lg-0"
              style={{
                color: mode === "light" ? style.bggreen : style.bgwhite,
              }}
            >
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              {mode === "light" ? (
                <img className="path_line" src={path} alt="img" />
              ) : (
                <img className="path_line" src={pathmb} alt="img" />
              )}
              <li className="nav-item">
                <Link className="nav-link" to="/post-survey-tamplate">
                  Features
                </Link>
              </li>
              {mode === "light" ? (
                <img className="path_line" src={path} alt="img" />
              ) : (
                <img className="path_line" src={pathmb} alt="img" />
              )}
              <li className="nav-item">
                <Link className="nav-link" to="product">
                  Payments
                </Link>
              </li>
              {mode === "light" ? (
                <img className="path_line" src={path} alt="img" />
              ) : (
                <img className="path_line" src={pathmb} alt="img" />
              )}

              <li className="nav-item">
                <Link className="nav-link" to="blog">
                  Pricing
                </Link>
              </li>
              {mode === "light" ? (
                <img className="path_line" src={path} alt="img" />
              ) : (
                <img className="path_line" src={pathmb} alt="img" />
              )}

              <li className="nav-item">
                <Link className="nav-link" to="blog">
                  Get Card
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {isActive ? (
                <>
                  {mode === "light" ? (
                    <img className="path_line" src={path} alt="img" />
                  ) : (
                    <img className="path_line" src={pathmb} alt="img" />
                  )}

                  {mode === "light" ? (
                    <img className="path_line" src={path} alt="img" />
                  ) : (
                    <img className="path_line" src={pathmb} alt="img" />
                  )}
                  {mode === "light" ? (
                    <img className="path_line" src={path} alt="img" />
                  ) : (
                    <img className="path_line" src={pathmb} alt="img" />
                  )}
                  <li className="nav-item">
                    {/* <UserDropdown logout={handleLogout} /> */}
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <button
                      style={{ display: showMode === false ? "block" : "none" }}
                      className="btn s_btn"
                      onClick={() => {
                        setShowMode(true);
                        handleDark();
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
                        handleLight();
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
                  </li>
                  <li className="nav-item">
                    <LangSwitch />
                  </li>

                  <li className="nav-item ms-4">
                    <Link to="/signup">
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid",
                          borderColor:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          color:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          padding: "8px 20px",
                        }}
                        className="cus_btn1 me-2"
                      >
                        Sign up
                      </button>
                    </Link>
                  </li>
                  <li onClick={handleLogin} className="nav-item">
                    <Link to="/login">
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid",
                          borderColor:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          color:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          padding: "8px 28px",
                        }}
                        className="cus_btn1"
                      >
                        Login
                      </button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <div
            className="collapse show mob_nav_collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            {open ? (
              <ul
                onClick={(e) => e.stopPropagation()}
                className="navbar-nav mob_nav mb-2 mb-lg-0"
                style={{
                  color: mode === "light" ? style.bggreen : style.bgwhite,
                  backgroundColor:
                    mode === "light" ? style.bglightblue : style.bglightgreen,
                }}
              >
                {!isActive ? (
                  <>
                    {/* dsa */}
                    <Link className="navbar-brand" to="/">
                      {mode === "light" ? (
                        <img
                          className="nav_rarare_logo"
                          src={transxdlogo}
                          alt="logo"
                        />
                      ) : (
                        <img
                          className="nav_rarare_logo"
                          src={transxdlogomob}
                          alt="logo"
                        />
                      )}
                    </Link>
                    <div className="d-flex mt-4">
                      <li
                        onClick={() => {
                          handleLogin();
                          handleClose();
                        }}
                        className="nav-item"
                      >
                        <Link to="/login">
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "1px solid",
                              borderColor:
                                mode === "light"
                                  ? style.bggreen
                                  : style.bgdarkgreen,
                              color:
                                mode === "light"
                                  ? style.bggreen
                                  : style.bgdarkgreen,
                              padding: "4px 32px",
                            }}
                            className="cus_btn1"
                          >
                            Login
                          </button>
                        </Link>
                      </li>
                      <li onClick={handleClose} className="nav-item mb-4">
                        <Link to="/signup">
                          <button
                            style={{
                              backgroundColor: "transparent",
                              border: "1px solid",
                              borderColor:
                                mode === "light"
                                  ? style.bggreen
                                  : style.bgdarkgreen,
                              color:
                                mode === "light"
                                  ? style.bggreen
                                  : style.bgdarkgreen,
                              padding: "4px 25px",
                            }}
                            className="cus_btn1 ms-3"
                          >
                            Sign up
                          </button>
                        </Link>
                      </li>
                    </div>
                  </>
                ) : (
                  <div className="d-flex flex-column align-items-center">
                    <img className="usericon" src={userprofileimg} alt="img" />

                    <div className="userinfo_text align-items-center mt-2">
                      <h2>Salman Altaf</h2>
                      <button
                        style={{
                          backgroundColor: "transparent",
                          border: "1px solid",
                          borderColor:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          color:
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          padding: "0px 25px",
                        }}
                        className="cus_btn1 mt-2 mb-2"
                      >
                        TCN # 123456789
                      </button>
                      <span
                        className="text_darkgray"
                        style={{
                          color:
                            mode === "light"
                              ? style.bgblack
                              : style.bggreen,
                        }}
                      >
                        salmanaltaf@gmail.com
                      </span>
                      <button
                        style={{
                         
                          border: "none",
                          backgroundColor: 
                            mode === "light"
                              ? style.bggreen
                              : style.bgdarkgreen,
                          color:
                            style.bgblack,
                          padding: "8px 25px",
                        }}
                        className="cus_btn1 mt-2 mb-2"
                      >
                        Your Balance: XOF 104,535.53
                      </button>
                    </div>
                    <hr />
                  </div>
                )}
                {/* /user ki profile ani/ */}

                <li onClick={handleClose} className="nav-item">
                  <Link
                    className="nav-link"
                    to="/post"
                    style={{
                      color: mode === "light" ? style.bgblack : style.bggreen,
                    }}
                  >
                    Homeas
                  </Link>
                </li>
                <li onClick={handleClose} className="nav-item">
                  <Link className="nav-link" to="/post-survey-tamplate">
                    Features
                  </Link>
                </li>
                <li onClick={handleClose} className="nav-item">
                  <Link className="nav-link" to="product">
                    Payments
                  </Link>
                </li>
                <li onClick={handleClose} className="nav-item">
                  <Link className="nav-link" to="product">
                    Pricing
                  </Link>
                </li>

                <li onClick={handleClose} className="nav-item">
                  <Link className="nav-link" to="blog">
                    Get Card
                  </Link>
                </li>
                {/* <li onClick={handleClose} className="nav-item">
                  <MobSearchDropdown />
                </li> */}
                <li className="nav-item mt-5">{/* <LanguageDropdown /> */}</li>
                {isActive ? (
                  <>
                    <li onClick={handleClose} className="nav-item">
                      <Link className="nav-link" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li onClick={handleClose} className="nav-item">
                      <Link className="nav-link" to="/account-setting">
                        Account setting
                      </Link>
                    </li>
                    <li
                      onClick={() => {
                        handleLogout();
                        handleClose();
                      }}
                      className="nav-item"
                    >
                      <Link onClick={handleClose} className="nav-link" to="#">
                        Logout
                      </Link>
                    </li>
                  </>
                ) : null}
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
