import React from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import Confirmotp from '../../../Utils/Confirmotp'


const ConfirmOtp = () => {
    return (
        <div>
            <div className='bil_payment_main_div'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="payment_bil">
                    {/* <PaymentDetail /> */}
                    <Confirmotp />
                </div>
            </div>
        </div>
    )
}

export default ConfirmOtp
