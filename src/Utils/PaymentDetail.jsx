import React from 'react'
import './style/payment.css'

const PaymentDetail = () => {
    return (
        <div className='payemn_detail_container'>
            <div className="payment_detail_main_div">
                <div className="paymen_div" style={{ backgroundColor: '#E9F8F7' }}>
                    <h4 style={{ color: '#27BDAD' }}>PAYMENT DETAILS</h4>
                    <p>Please enter  bill amount or confrim payment if vendor has returned an amount!</p>
                    <div className="amount_div">
                        <p>XOF</p>
                        <h4 style={{ color: '#27BDAD' }}>1243.43</h4>
                    </div>
                    <div className='payment_btns'>
                        <button className='back_btn' style={{ color: '#27BDAD', border: '1px solid #27BDAD' }}>Back</button>
                        <button className='con_btn proced' style={{ backgroundColor: "#27BDAD", color: 'white' }}>Proceed & Pay</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PaymentDetail
