import React from "react";
import "./SimplePricing.css";
import dot from "../../Assets/dot.png";
import debit1 from "../../Assets/debit1.png";
import debit2 from "../../Assets/debit2.png";
const SimplePricing = () => {
  return (
    <React.Fragment>
      <div className="simple_pricing_section">
        <h2>Simple and Transparent Pricing!</h2>
        <div className="spricing_content">
          <div className="sp_leftbox" style={{ border: "1px solid #27BDAD" }}>
            <h2>TRANSCATION FEE</h2>
            <p>each transaction will cost an additional fee of</p>
            <div className="sp_uper">
              <h1>1.5%</h1>
              <span>+ Tax</span>
            </div>
            <p>Instant money transfer within seconds!</p>
            <div className="sp_list">
              <ul>
                <li>
                  <img src={dot} alt="..." />
                  <span>Lowest transaction fee of 1.5%</span>
                </li>
                <li>
                  <img src={dot} alt="..." />
                  <span>Instant money transfer within seconds!</span>
                </li>
                <li>
                  <img src={dot} alt="..." />
                  <span>Lowest transaction fee of 1.5%</span>
                </li>
                <li>
                  <img src={dot} alt="..." />
                  <span>Instant money transfer within seconds!</span>
                </li>
              </ul>
            </div>
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
          <div className="sp_rightbox" style={{ border: "1px solid #27BDAD" }}>
            <h2>TRANSXND CARD FEE</h2>
            <div className="spcards_content">
              <div className="sp_card">
                <h2>Card Name</h2>
                <img src={debit1} alt="..." />
                <div className="sp_uper">
                  <span>XOF</span>
                  <h1 style={{ fontSize: "3rem", margin: "0 8px" }}>125</h1>
                  <span>+ Tax</span>
                </div>
                <div className="sp_list">
                  <ul>
                    <li>
                      <img src={dot} alt="..." />
                      <span>Lowest transaction fee of 1.5%</span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>Instant money transfer within seconds!</span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>Lowest transaction fee of 1.5%</span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>Instant money transfer within seconds!</span>
                    </li>
                  </ul>
                </div>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #27BDAD",
                    color: "black",
                  }}
                  className="cus_btn1"
                >
                  Apply for a card
                </button>
              </div>

              <div className="sp_card">
                <h2>Card Name</h2>
                <img src={debit2} alt="..." />
                <div className="sp_uper">
                  <span>XOF</span>
                  <h1 style={{ fontSize: "3rem", margin: "0 8px" }}>125</h1>
                  <span>+ Tax</span>
                </div>
                <div className="sp_list">
                  <ul>
                    <li>
                      <img src={dot} alt="..." />
                      <span>Lowest transaction fee of 1.5%</span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>Instant money transfer within seconds!</span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>Lowest transaction fee of 1.5%</span>
                    </li>
                    <li>
                      <img src={dot} alt="..." />
                      <span>Instant money transfer within seconds!</span>
                    </li>
                  </ul>
                </div>
                <button
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #27BDAD",
                    color: "black",
                  }}
                  className="cus_btn1"
                >
                  Apply for a card
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SimplePricing;
