import React from 'react'
import UserCard from '../../../Components/AccountComp/UserCard'
import { useHistory } from 'react-router-dom'
import card2 from '../../../Assets/Group 4569.png'
import wallet2 from '../../../Assets/Group 4574.png'
import cash2 from '../../../Assets/Group 4576.png'
import bank2 from '../../../Assets/Group 4579.png'
import card from '../../../Assets/money.png'
import wallet from '../../../Assets/money2.png'
import bank from '../../../Assets/bank.png'
import cash from '../../../Assets/cash.png'
import '../styles/Paybill.css'
import '../styles/Money.css'

const SelectMonyMethod = () => {
    const history = useHistory()

    return (
        <div>
            <div className="pay_bill_main_div">
                <div className="pay_user_card_div">
                    <UserCard />
                </div>
                <div className="select_bill_div" style={{ backgroundColor: '#E9F8F7' }}>
                    <h4 style={{ color: '#27BDAD' }}>SEND MOENY</h4>
                    <p>Please enter recipient details!</p>
                    <div className="bill_type_select" >
                        <div className="bil_type">
                            <div className="_img_bill money_selct" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={card} alt="" />
                                <img className='hover_light_bil' src={card2} alt="" />
                            </div>
                            <p>Card to Card Money Transfer</p>
                        </div>
                        <div className="bil_type">
                            <div className="_img_bill money_selct" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={wallet} alt="" />
                                <img className='hover_light_bil' src={wallet2} alt="" />

                            </div>
                            <p>Wallet to Wallet Money Transfer</p>
                        </div>
                        <div className="bil_type">
                            <div className="_img_bill money_selct" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={cash} alt="" />
                                <img className='hover_light_bil' src={cash2} alt="" />
                            </div>
                            <p>Cash Collection</p>
                        </div>
                        <div className="bil_type">
                            <div className="_img_bill money_selct" style={{ border: '1px solid #27BDAD' }}>
                                <img className='light_bil' src={bank} alt="" />
                                <img className='hover_light_bil' src={bank2} alt="" />
                            </div>
                            <p>Bank Account</p>
                        </div>
                    </div>
                    <div className='abslt_btn_div'>
                        <button className='back_btn' style={{ color: '#27BDAD', border: '1px solid #27BDAD' }}>Back</button>
                        <button
                            className='con_btn'
                            style={{ backgroundColor: "#27BDAD", color: 'white' }}
                            onClick={() => history.push('/acount-detail')}
                        >Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectMonyMethod
