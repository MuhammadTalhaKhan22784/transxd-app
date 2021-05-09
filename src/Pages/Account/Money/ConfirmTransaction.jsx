import React from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'

const ConfirmTransaction = () => {
    return (
        <div>
            <div className='money_detail_container'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="money_detail_inputs_div" style={{ backgroundColor: '#E9F8F7' }}>
                    <h4 style={{ color: '#27BDAD' }}>CONFIRM TRANSCATION</h4>
                    <p>Please review the transaction before we proceed with the payment!</p>
                    <h6 style={{ color: '#27BDAD', marginTop: '20px' }}>REVIERW TRANSCATION</h6>
                    <div className="transaction_div">
                        <p>RECIPIENT BANK NAME</p>
                        <h5 style={{ color: '#27BDAD' }}>ABCD Bank Private Limited</h5>
                        <p>RECIPIENT ACCOUNT NUMBER</p>
                        <h5 style={{ color: '#27BDAD' }}>ABCD-1334-5678-9123</h5>
                        <p>RECIPIENT EMAIL ADDRESS </p>
                        <h5 style={{ color: '#27BDAD' }}>olalekam.l@transxnd.com</h5>
                        <p>TRANSCATION AMOUNT</p>
                        <div >
                           <p>XOF</p> 
                        <h5 style={{ color: '#27BDAD' }}> 12,043.<sup>52</sup></h5>
                        </div>
                    </div>
                    <div style={{ marginTop: '20px' }} >
                        <button className='back_btn' style={{ color: '#27BDAD', border: '1px solid #27BDAD' }}>Back</button>
                        <button
                            className='con_btn'
                            style={{ backgroundColor: "#27BDAD", color: 'white' }}
                        // onClick={() => history.push('/acount-detail')}
                        >Proceed & Pay</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmTransaction
