import React,{useState} from 'react'
import UserCard from '../../Components/AccountComp/UserCard'
import PersonalDetail from '../../Components/AccountComp/PersonalDetail'
import UploadLicns from '../../Components/AccountComp/UploadLicns'
import user from '../../Assets/Path 7446.png'
import upload from '../../Assets/Group 4482.png'
import './styles/Setting.css'

const ProfileSetting = () => {

    let [next,setNext] = useState(false)
   const handleNext = ()=>{
       setNext(true)
   }
    return (
        <div>
            <div className="setting_main_div">
                <div>
                    <UserCard />
                </div>
                <div className="personal_info_div" style={{ backgroundColor: '#E9F8F7' }}>
                <h5 style={{ color: '#27BDAD' }}>UPDATE PERSONAL INFORMATION</h5>
                 <p>Request a change to your profile details. Please note that changes are subject
                    to provision of a proof such as a valid identity card/passport and verification by our team!</p>
                    {!next?
                    <PersonalDetail nextFunc={handleNext} />
                    :
                    <UploadLicns />
                }
                </div>
                <div className="updateImg_div" style={{ backgroundColor: '#E9F8F7' }}>
                    <h5 style={{ color: '#27BDAD' }}>Change Profile Picture</h5>
                    <p>Change your profile picture! Please use a picture so face is fully visible and clear!</p>
                    <div>
                        <img src={user} alt="" />
                        <img className='upload_profile' src={upload} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting
