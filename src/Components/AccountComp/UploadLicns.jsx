import React from 'react'
// assets 
import license from '../../Assets/Group 4403.png'
import front from '../../Assets/Mask Group 10.png'
import upload from '../../Assets/Group 4482.png'

const UploadLicns = () => {
    return (
        <div>
            <div className='personal_detail_container upload_img'>
                <h6 style={{ color: '#27BDAD' }}>PROOF OF VERFICATION</h6>
                <div className='varify_para_div'>
                    <p>Please ensure that your profile data is correct and up-to-date before sending a
                    request for change. Invalid or incorrect information my lead to rejection of request
                        and account blockage!</p>
                </div>
                <div className="email_input_perosnal">
                    <img src={license} alt="" />
                    <select name="" id="">
                        <option value="">Driver's License</option>
                    </select>
                </div>
                <div className="upload_imgs_divs">
                    <div className="front_upload_div">
                        <p style={{ color: '#27BDAD' }}>FRONT IMAGE</p>
                        <img src={front} alt=""/>
                        <br/>
                        <button>Remove image</button>
                    </div>
                    <div className="front_upload_div">
                        <p style={{ color: '#27BDAD' }}>BACK IMAGE</p>
                        <img src={upload} alt=""/>
                        <br/>
                        <button>Remove image</button>
                    </div>
                </div>
            </div>
            <div className="btn_submit">
                <button className='personal_cont_btn' >Submit for verification</button>
            </div>
        </div>
    )
}

export default UploadLicns
