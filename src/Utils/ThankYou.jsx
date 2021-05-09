import React from 'react'
import thankyou from '../Assets/Group 4361.png'

const ThankYou = () => {
    return (
        <div>
            <div className="thankyou_main_div" style={{ backgroundColor: '#E9F8F7' }}>
                <div>
                    <img className='thanks_img' src={thankyou} alt=""/>
                    <h5 style={{ color: '#27BDAD' }}>Thank You</h5>
                    <p>Your payment has been made successfilly!</p>
                    <button className='con_btn proced' style={{ backgroundColor: "#27BDAD", color: 'white' }}>Pay another bill</button>

                </div>
            </div>
        </div>
    )
}

export default ThankYou
