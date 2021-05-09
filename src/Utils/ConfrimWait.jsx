import React from 'react'
import edit from '../Assets/Icon awesome-edit.png'
import './style/otp.css'

const ConfrimWait = () => {
    return (
        <div>
            <div className="confirm_opt_main_div" style={{ backgroundColor: '#E9F8F7' }}>
                <h4 style={{ color: '#27BDAD' }}>PAYMENT DETAILS</h4>
                <p>Please enter  bill amount or confrim payment if vendor has returned an amount!</p>
                <div className="number_div" style={{ color: '#27BDAD' }} >
                    <span>924823202332</span>
                    <img src={edit} alt="" />
                </div>
                <div className="wating_animation">
                    <p>Please wait while we process your information</p>
                </div>
            </div>
        </div>
    )
}

export default ConfrimWait
