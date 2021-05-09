import React from 'react'
import './style/otp.css'
// assets 
import edit from '../Assets/edit.png'
import mobmsg from '../Assets/Group 4532.png'
import email from '../Assets/Group 4528.png'
import alert from '../Assets/Polygon 8.png'

const Confirmotp = () => {
    return (
        <div>
            <div className="confirm_opt_main_div" style={{ backgroundColor: '#E9F8F7' }}>
                <h4 style={{ color: '#27BDAD' }}>PAYMENT DETAILS</h4>
                <p>Please enter  bill amount or confrim payment if vendor has returned an amount!</p>
                <div className="get_otp_main_div">
                    <div className="get_otp_div">
                        <div className="number_div">
                            <span>924823202332</span>
                            <img src={edit} alt="" />
                        </div>
                        <img className='msg_img' src={mobmsg} alt="" />
                        <div className="otp_get_inp_div">
                            <input type="text" style={{ border: '1px solid #27BDAD', color: '#27BDAD' }} readOnly value='1' />
                            <input type="text" style={{ border: '1px solid #27BDAD', color: '#27BDAD' }} readOnly value='2' />
                            <input type="text" style={{ border: '1px solid #27BDAD', color: '#27BDAD' }} readOnly value='3' />
                            <input type="text" style={{ border: '1px solid #27BDAD', color: '#27BDAD' }} readOnly value='4' />
                        </div>
                        <div className="alert_msg_div">
                            <img src={alert} alt="" />
                            <span>Any frontend error show here!</span>
                        </div>
                        <button className='resend_btn' style={{ backgroundColor: '#27BDAD', color: 'white' }}>Resend OTP (00:30)</button>
                        <p className='not_recvd'>Did'nt receive a code?</p>
                    </div>
                    <div className="email_otp_div">
                        <div className="number_div">
                            <span>abc@123gmail.com</span>
                            <img src={edit} alt="" />
                        </div>
                        <img className='msg_img' src={email} alt="" />
                        <div className="otp_get_inp_div">
                            <input type="text" style={{ border: '1px solid #27BDAD', color: '#27BDAD' }} readOnly value='-' />
                            <input type="text" style={{ border: '1px solid #27BDAD', color: '#27BDAD' }} readOnly value='-' />
                            <input type="text" style={{ border: '1px solid #27BDAD', color: '#27BDAD' }} readOnly value='-' />
                            <input type="text" style={{ border: '1px solid #27BDAD', color: '#27BDAD' }} readOnly value='-' />
                        </div>
                        <div className="alert_msg_div">
                            <img src={alert} alt="" />
                            <span>Any frontend error show here!</span>
                        </div>
                        <button className='resend_btn margin_top' style={{ backgroundColor: '#27BDAD', color: 'white' }}>Resend OTP (00:30)</button>
                        <p className='not_recvd'>Did'nt receive a code?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Confirmotp
