import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { ColorContext } from '../../Context/Context'
// Assets 
import user from '../../Assets/Path 7446.png'
import bar from '../../Assets/Group 4426.png'
import arrow from '../../Assets/Group 4427.png'
import card from '../../Assets/Group 4428.png'
import bill from '../../Assets/Group 4429.png'
import money from '../../Assets/Group 4430.png'
import refer from '../../Assets/Group 4483.png'
import lock from '../../Assets/Icon feather-lock1.png'
import setting from '../../Assets/Icon feather-settings.png'

const UserCard = () => {
    const { color, setColor } = useContext(ColorContext)
    let { mode } = color
    let style = {
        bgClr: mode === 'light' ? '#27BDAD' : '#112626',
        bgblnce: mode === 'light' ? 'white' : '#72FAEC'
    }

    const history = useHistory()
    let [path, setPath] = useState('')
    // console.log(color)
    const handleDark = () => {
        localStorage.setItem('theme', 'dark')
        let set = localStorage.getItem('theme')
        console.log(set)
        setColor({
            type: 'Dark',
            payload: set
        })
        document.body.classList.remove('white')
        document.body.classList.add('black')
    }
    const handleLight = () => {
        localStorage.setItem('theme', 'light')
        let set = localStorage.getItem('theme')

        setColor({
            type: 'light',
            payload: set
        })
        document.body.classList.remove('black')
        document.body.classList.add('white')
    }

    const handleActive = (e) => {
        history.push(`/${e}`)
        setPath(e)
    }

    return (
        <React.Fragment>
            <div className='user_card_container'>
                <div className="userCard_main_div" style={{ backgroundColor: style.bgClr }}
                >
                    <div className="user_img_div">
                        <img src={user} alt="" />
                    </div>
                    <div className="userName">
                        <p >User Name</p>
                    </div>
                    <div className="user_id_div"
                        style={{
                            backgroundColor: mode === 'light' ? 'white' : 'transparent',
                            color:mode==='dark'? style.bgblnce:'', border: `1px solid ${style.bgblnce}`
                        }}
                    >
                        <p>TCN #123456789#</p>
                    </div>
                    <div className="user_email" style={{ color:mode==='dark'? style.bgblnce:''}}>
                        <p>username@123gmail.com</p>
                    </div>
                    <div className="user_balance_div" style={{ backgroundColor: style.bgblnce, color: style.bgClr }}>
                        <p>Your Balance : <strong>XOF 123,454,675</strong> </p>
                    </div>
                    <div className="user_ul_div" >
                        <ul
                            className={mode==='light'? "user_ul":'dark_user_ul'}
                            >
                            <li onClick={() => handleActive('')}>
                                <img src={bar} alt="" />
                                <span>Overview</span>
                            </li>
                            <li onClick={() => handleActive('historic-transaction')} style={path === 'historic' ? { backgroundColor: '#a1ece6' } : null}>

                                <img src={arrow} alt="" />
                                <span>Historic Transactions</span>
                            </li>
                            <li>
                                <img src={card} alt="" />
                                <span>Cards Management</span>
                            </li>
                            <li>
                                <img src={bill} alt="" />
                                <span>Pay a Bill</span>
                            </li>
                            <li>
                                <img src={money} alt="" />
                                <span>Send Money</span>
                            </li>
                            <li>
                                <img src={refer} alt="" />
                                <span>Refer a Friend</span>
                            </li>
                            <li>
                                <img src={lock} alt="" />
                                <span>Account Security</span>
                            </li>
                            <li onClick={() => handleActive('setting')}>
                                <img src={setting} alt="" />
                                <span>Profile settings</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <button onClick={handleDark}>dark</button>
            <button onClick={handleLight}>light</button>
        </React.Fragment>
    )
}

export default UserCard
