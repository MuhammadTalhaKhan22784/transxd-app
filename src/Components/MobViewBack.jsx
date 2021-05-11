import React from 'react'
import {Link} from 'react-router-dom'
import back from '../Assets/Icon feather-arrow-left.png'

const MobViewBack = ({link,value}) => {
    return (
        <div>
            <div className="back_link_div">
                {/* <img src={back} alt=""/> */}
                <Link to={link} className='mob_back_link'><img src={back} alt=""/> <span> {value}</span></Link>
            </div>
        </div>
    )
}

export default MobViewBack
