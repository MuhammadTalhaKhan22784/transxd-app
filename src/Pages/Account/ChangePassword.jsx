import React, { useState } from 'react'
import UserCard from '../../Components/AccountComp/UserCard'
import lock from '../../Assets/Icon feather-lock.png'
import hide from '../../Assets/Component 37 – 5.png'
import see from '../../Assets/Component 37 – 6.png'
import tick from '../../Assets/Path 7452.png'
import invalid from '../../Assets/Polygon 8.png'
import './styles/Password.css'

const ChangePassword = () => {
    let [pass, setPass] = useState({
        old: false,
        new: false,
        confirm: false
    })

    const showPassword = (e) => {
        setPass({ ...pass, [e]: !pass[e] })
    }

    return (
        <div>
            <div className="change_pass_main_div">
                <div className="user_card_div">
                    <UserCard />
                </div>
                <div className="change_pass_card" style={{ backgroundColor: '#E9F8F7' }}>
                    <h5>SETTINGS</h5>
                    <p style={{ color: '#27BDAD' }}>Change Password</p>
                    <div className="change_pass_inputs">
                        <p>Old Password</p>
                        <div className="input_tick">
                            <div className="pass_inpt">
                                <img src={lock} alt="" />
                                <input type={!pass.old ? "password" : 'text'} name="" id="" />
                                {!pass.old ?
                                    <img onClick={() => showPassword('old')} src={hide} alt="" />
                                    :
                                    <img onClick={() => showPassword('old')} src={see} alt="" />
                                }
                            </div>
                            <img src={tick} alt="" />
                        </div>
                        <p>New Password</p>
                        <div className="input_tick">
                            <div className="pass_inpt">
                                <img src={lock} alt="" />
                                <input type={!pass.new ? "password" : 'text'} name="" id="" />
                                {!pass.new ?
                                    <img onClick={() => showPassword('new')} src={hide} alt="" />
                                    :
                                    <img onClick={() => showPassword('new')} src={see} alt="" />
                                }
                            </div>
                            <img src={tick} alt="" />
                        </div>
                        <p>Confirm New Password</p>
                        <div className="input_tick">
                            <div className="pass_inpt">
                                <img src={lock} alt="" />
                                <input type={!pass.confirm ? "password" : 'text'} name="" id="" />
                                {!pass.confirm ?
                                    <img onClick={() => showPassword('confirm')} src={hide} alt="" />
                                    :
                                    <img onClick={() => showPassword('confirm')} src={see} alt="" />
                                }
                            </div>
                            <img src={tick} alt="" />
                        </div>
                        <div className="invalid_div">
                            <img src={invalid} alt="" />
                            <span>Invalid Phone Number Formate</span>
                            <div >
                                <button className='change_pss_btn'>Change Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
