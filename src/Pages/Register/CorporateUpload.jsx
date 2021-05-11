import React, { useState, useLayoutEffect, useContext } from "react";
import { ColorContext } from "../../Context/Context";

// import Button from "../../Components/Btn/Btn";
// assets
// import businesslogo from "../../Assets/businesslogo.png";
import uploadImgLight from "../../Assets/uploadimglight.png";
import uploadImgDark from "../../Assets/uploadimgdark.png";
import "./Register.css";

const CorporateUpload = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // upload img state and function

  let [img, setImg] = useState([]);

  const handleUrl = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);
    setImg([url, ...img]);
  };

  const dltImg = (e) => {
    let filter = img.filter((val) => val !== e);
    setImg(filter);
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
      <div className="login_form">
        <div className="s_form">
          <div className="s_text">
            <h2
              className="mt-4 fw-bold"
              style={{
                color: mode === "light" ? style.bgblack : style.bgwhite,
              }}
            >
              Corporate{" "}
              <strong
                style={{
                  color: mode === "light" ? style.bggreen : style.bgdarkgreen,
                }}
              >
                Registration!
              </strong>
            </h2>
          </div>
          <div className="s_para mt-3 mb-3">
            <p
              style={{
                color: mode === "light" ? style.bgblack : style.bgwhite,
              }}
            >
              Please enter your email address and password to login..
            </p>
          </div>

          <div className="bussines_container">
            <div className="bussines_main_div">
              <div>
                <h6>
                  <strong
                    style={{
                      color:
                        mode === "light" ? style.bggreen : style.bgdarkgreen,
                    }}
                  >
                    UPLOAD COMPANY DOCUMENTS
                  </strong>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  cupiditate accusantium quibusdam facere.
                </p>
              </div>
              <div className="upload_div">
                <label htmlFor="upload_logo">
                  {mode === "light" ? (
                    <img
                      className="upload_img"
                      src={uploadImgLight}
                      alt="img"
                    />
                  ) : (
                    <img className="upload_img" src={uploadImgDark} alt="img" />
                  )}
                </label>
                <input
                  type="file"
                  onChange={(e) => handleUrl(e)}
                  name="upload_logo"
                  id="upload_logo"
                />
              </div>
              <div className="main_upload_img_div">
                {img &&
                  img.map((val, i) => (
                    <div className="upload_result" key={i}>
                      <p className="upload_delete" onClick={() => dltImg(val)}>
                        &times;
                      </p>
                      <img className="upload_img_result" src={val} alt="img" />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CorporateUpload;
