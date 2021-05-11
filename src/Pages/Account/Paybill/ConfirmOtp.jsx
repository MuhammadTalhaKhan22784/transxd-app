import React from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import MobViewBack from '../../../Components/MobViewBack'
import Confirmotp from '../../../Utils/Confirmotp'


const ConfirmOtpBill = () => {
    return (
        <div>
            <div className="bak_div">
                <MobViewBack link='/bil-payment' value='PAY A BILL' />
            </div>
            <div className='bil_payment_main_div'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="payment_bil">
                    {/* <PaymentDetail /> */}
                    <Confirmotp nextLink='/waiting' />
                </div>
            </div>
        </div>
    )
}

export default ConfirmOtpBill
