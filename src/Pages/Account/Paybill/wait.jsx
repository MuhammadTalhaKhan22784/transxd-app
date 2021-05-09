import React from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import ConfrimWait from '../../../Utils/ConfrimWait'

const wait = () => {
    return (
        <div>
            <div className='bil_payment_main_div'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="payment_bil">
                    <ConfrimWait />
                </div>
            </div>
        </div>
    )
}

export default wait
