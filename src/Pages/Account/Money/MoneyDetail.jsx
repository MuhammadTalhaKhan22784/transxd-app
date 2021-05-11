import React from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import MobViewBack from '../../../Components/MobViewBack'
import PaymentDetail from '../../../Utils/PaymentDetail'


const MoenyDetail = () => {
    return (
        <div>
            <div className="bak_div">
                <MobViewBack link='/bank_info' value='SEND MONEY' />
            </div>
            <div className='bil_payment_main_div'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="payment_bil">
                    <PaymentDetail
                        btnV='Continue'
                        link='/confrim-transaction'
                        backLink='/bank_info'
                        desc='Please enter amount to transfer!'
                    />
                </div>
            </div>
        </div>
    )
}

export default MoenyDetail
