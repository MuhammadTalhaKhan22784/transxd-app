import React from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import PaymentDetail from '../../../Utils/PaymentDetail'


const PaymentDetailBill = () => {
    return (
        <div>
            <div className='bil_payment_main_div'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="payment_bil">
                <PaymentDetail />
                </div>
            </div>
        </div>
    )
}

export default PaymentDetailBill
