import React, { useState, useContext } from 'react'
import UserCard from '../../Components/AccountComp/UserCard'
import lock from '../../Assets/Icon feather-lock.png'
import lockL from '../../Assets/Icon feather-lockl.png'
import hide from '../../Assets/Component 37 – 5.png'
import see from '../../Assets/Component 37 – 6.png'
import tick from '../../Assets/Path 7452.png'
import invalid from '../../Assets/Polygon 8.png'
import './styles/Password.css'
import { ColorContext } from '../../Context/Context'

const ChangePassword = () => {

    const { color } = useContext(ColorContext)
    const { mode } = color
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
                <div className="change_pass_card" style={{ backgroundColor: mode === 'light' ? '#E9F8F7' : '#112626' }}>
                    <h5 style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>SETTINGS</h5>
                    <p style={{ color: mode === 'light' ? '#27BDAD' : '#72FAEC' }}>Change Password</p>
                    <div className="change_pass_inputs">
                        <p style={{ color: color.mode === 'light' ? '' : 'white' }}>Old Password</p>
                        <div className="input_tick">
                            <div className="pass_inpt">
                                <img src={mode==='dark'? lock:lockL} alt="" />
                                <input
                                    type={!pass.old ? "password" : 'text'}
                                    className={mode === 'light' ? 'light_inp' : 'dark_inp'}
                                />
                                {!pass.old ?
                                    <img onClick={() => showPassword('old')} src={hide} alt="" />
                                    :
                                    <img onClick={() => showPassword('old')} src={see} alt="" />
                                }
                            </div>
                            <img src={tick} alt="" />
                        </div>
                        <p style={{ color: color.mode === 'light' ? '' : 'white' }}>New Password</p>
                        <div className="input_tick">
                            <div className="pass_inpt">
                                <img src={mode==='dark'? lock:lockL} alt="" />
                                <input
                                    type={!pass.new ? "password" : 'text'}
                                    className={mode === 'light' ? 'light_inp' : 'dark_inp'}
                                />
                                {!pass.new ?
                                    <img onClick={() => showPassword('new')} src={hide} alt="" />
                                    :
                                    <img onClick={() => showPassword('new')} src={see} alt="" />
                                }
                            </div>
                            <img src={tick} alt="" />
                        </div>
                        <p style={{ color: color.mode === 'light' ? '' : 'white' }}>Confirm New Password</p>
                        <div className="input_tick">
                            <div className="pass_inpt">
                                <img src={mode==='dark'? lock:lockL} alt="" />
                                <input
                                    type={!pass.confirm ? "password" : 'text'}
                                    className={mode === 'light' ? 'light_inp' : 'dark_inp'}
                                />
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
                                <button 
                                style={{ backgroundColor: mode === 'light' ? "#27BDAD" : '#72FAEC', color: mode === 'light' ? 'white' : 'black' }}
                                className='change_pss_btn'
                                >Change Password</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
