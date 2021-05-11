import React, { useEffect, useState } from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import MobViewBack from '../../../Components/MobViewBack'
import ConfrimWait from '../../../Utils/ConfrimWait'
import ThankYou from '../../../Utils/ThankYou'

const Wait = () => {

    let [thanks, setThanks] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            console.log('run')
            setThanks(true)
        }, 2000)
    }, [])

    return (
        <div>
            <div className="bak_div">
                <MobViewBack link='/confrim-otp' value='PAY A BILL' />
            </div>
            <div className='bil_payment_main_div'>
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="payment_bil">
                    {!thanks ?
                        <ConfrimWait />
                        :
                        <ThankYou btnV='Pay another bill' link='pay-bill' />
                    }
                </div>
            </div>
        </div>
    )
}

export default Wait
