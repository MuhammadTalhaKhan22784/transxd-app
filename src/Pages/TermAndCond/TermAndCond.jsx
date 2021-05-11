import React, { useLayoutEffect, useContext } from "react";
import "./Terms.css";
import { ColorContext } from "../../Context/Context";

const TermAndCond = () => {
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
    bgblack: "#0E2725",
    bgwhite: "#FFFFFF",
    bgdarkgreen: "#72FAEC",
    bglightgreen: "#0A1716",
  };
  return (
    <div className="terms_and_cond_container">
      <div className="terms_and_cond_main_div">
        <div className="terms_boxex_div">
          <div className="tersm_head_div">
            <h3
              style={{
                color: mode === "light" ? style.bggreen : style.bgdarkgreen,
              }}
            >
              Legal & Compliance
            </h3>
          </div>
          <div
            className="terms_one_box_div"
            style={{
              color: mode === "light" ? style.bgblack : style.bgwhite,
            }}
          >
            <p className="term_note_para">LLorem ipsum dolo</p>
            <div className="terms_para_div">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Officia quaerat commodi quas asperiores exercitationem, maiores
                cum aperiam eaque numquam repudiandae illo assumenda rem
                obcaecati impedit et earum inventore possimus beatae? Lorem
                ipsum, dolor sit amet consectetur adipisicing elit. Officia
                quaerat commodi quas asperiores exercitationem, maiores cum
                aperiam eaque numquam repudiandae illo assumenda rem obcaecati
                impedit et earum inventore possimus beatae? Lorem ipsum, dolor
                sit amet consectetur adipisicing elit. Officia quaerat commodi
                quas asperiores exercitationem, maiores cum aperiam eaque
                numquam repudiandae illo assumenda rem obcaecati impedit et
                earum inventore possimus beatae?
              </p>
            </div>
            <div className="term_note_para">
              <p>OWNERSHIT,COPYRIGHT AND TRADEMARK NOTICES</p>
            </div>
            <div className="term_copyright_div1">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate fugit ut quaerat veniam quod tempore, id maiores
                labore nisi repellat sit impedit, aut ducimus, eaque aliquid
                incidunt quis obcaecati molestias. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Cupiditate fugit ut quaerat
                veniam quod tempore, id maiores labore nisi repellat sit
                impedit, aut ducimus, eaque aliquid incidunt quis obcaecati
                molestias.
              </p>
            </div>
            <div className="term_note_para">
              <p>WARRANTY DISCLAIMER</p>
            </div>
            <div className="term_copyright_div1">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate fugit ut quaerat veniam quod tempore, id maiores
                labore nisi repellat sit impedit, aut ducimus, eaque aliquid
                incidunt quis obcaecati molestias. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Cupiditate fugit ut quaerat
                veniam quod tempore, id maiores labore nisi repellat sit
                impedit, aut ducimus, eaque aliquid incidunt quis obcaecati
                molestias.
              </p>
            </div>
            <div className="term_note_para">
              <p>JURISDICTION</p>
            </div>
            <div className="term_copyright_div1">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Cupiditate fugit ut quaerat veniam quod tempore, id maiores
                labore nisi repellat sit impedit, aut ducimus, eaque aliquid
                incidunt quis obcaecati molestias. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Cupiditate fugit ut quaerat
                veniam quod tempore, id maiores labore nisi repellat sit
                impedit, aut ducimus, eaque aliquid incidunt quis obcaecati
                molestias.
              </p>
            </div>
          </div>
        </div>
        <div className="terms_two_div">
          <div
            className="terms_two_box_para_div"
            style={{
              backgroundColor:
                mode === "light" ? style.bglightblue : style.bglightgreen,
              color: mode === "light" ? style.bgblack : style.bgwhite,
            }}
          >
            <div className="terms_sub_head_div">
              <h5>
                <strong>In Plain English</strong>
              </h5>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quasi omnis amet, odio cum, aut assumenda, sed ea excepturi quae
              nobis facere! Sit pariatur soluta qui distinctio, magni labore
              possimus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aliquam quasi omnis amet, odio cum, aut assumenda, sed ea
              excepturi quae nobis facere! Sit pariatur soluta qui distinctio,
              magni labore possimus! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Aliquam quasi omnis amet, odio cum, aut
              assumenda, sed ea excepturi quae nobis facere! Sit pariatur soluta
              qui distinctio, magni labore possimus!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermAndCond;
