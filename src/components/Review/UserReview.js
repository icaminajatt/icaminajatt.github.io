import React from 'react';
import Typical from 'react-typical'

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import userPic from '../../images/user.jpg'

const UserReview = ({delFormData, editFormData, reviewData}) => {
    return (
        <>
            <hr className='divider'></hr>
            {/* <h1 className='what'>"what the people say"</h1> */}
            <h1>
                <Typical
                        className = 'what'
                        loop = {Infinity}
                        wrapper = 'p'
                        steps = {[
                            "what the people say",
                            1500,
                            "what the people say", 
                            1500
                        ]} />
            </h1>
            <hr className='divider'></hr>
            <br></br><br></br>
            <div id="form">
                <ul className="formInfo">
                    {reviewData.map((userData, userKey) => {
                        return (
                            <li key={userData.id}>
                            <div className="info">
                                <div className="info-row">
                                    <div className='disp-pic'>
                                        <img className='disp-pic retain' src={userPic} alt="user"></img>
                                    </div>

                                    <div className='disp-info'>
                                        <h2 className='nameForm'>{userData.fullName}</h2>
                                        <div className='jobInfo'>
                                            <em><span className='jobForm' style={{color: '#000'}}>{userData.jobTitle}</span></em>, {' '} 
                                            <span className='companyForm' style={{color: '#000'}}>{userData.company}</span>
                                        </div>
                                        <strong><p className='commentForm'>{userData.comment}</p></strong><br></br>
                                        <small className = 'dateForm'>{userData.bday}</small>
                                        
                                    </div>
                                </div>
                                
                                <div className='comment-btn openBtn'>
                                    {/* <Popup trigger={<button className='btn-edit openButton' onClick={() => editFormData(userData)}>Edit</button>} position="right center"></Popup> */}
                                    
                                    <button className='btn-edit openButton' onClick={() => editFormData(userData)}>Edit</button>

                                    <Popup trigger={<button className="openButton">Delete</button>}>
                                    <button onClick={() => delFormData(userKey)} >Are you sure? <br/> Click here to delete. Click outside to cancel.</button>
                                    </Popup>
                                </div>
                            </div>
                            </li>)
                    })}
                </ul>
            </div>
        </>
    );
}

export default UserReview;