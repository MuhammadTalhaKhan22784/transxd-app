import React, { useContext, useEffect } from 'react'
import edit from '../Assets/Icon awesome-edit.png'
import editD from '../Assets/Icon awesome-edit.png'

import { ColorContext } from '../Context/Context'
import './style/otp.css'

const ConfrimWait = () => {
    const {color} = useContext(ColorContext)
    let {mode} = color
    
    return (
        <div>
            <div className="confirm_opt_main_div" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#0E2725' }}>
                <h4 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>CONFIRM OTP</h4>
                <p 
                style={{ color: mode === 'light' ? 'black' : 'white' }}
                >Please enter the 4 digit OPT sent on your email and phone number!</p>
                <div className="number_div" style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }} >
                    <span>924823202332</span>
                    <img src={mode==='light'? edit:editD} alt="" />
                </div>
                <div className="wating_animation">
                    <p style={{ color: mode === 'light' ? 'black' : 'white' }}>Please wait while we process your information</p>
                </div>
            </div>
        </div>
    )
}

export default ConfrimWait
