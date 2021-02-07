import React, {useState, useEffect} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const ReviewEdit = (props) => {
    const [userInfo, setUserInfo] = useState (props.user);

    useEffect ( () => {
        setUserInfo(props.user);
        },
        [props]
    );

    const handleEditData = (e) => {
        const {name, value} = e.target;
        setUserInfo({...userInfo, [name]: value});
    };

    const handleSave = (e) => {
        e.preventDefault();
        props.updateInfo(userInfo.id, userInfo);
    }

    // const [popUp, setPopup] = useState(true)

    return (
        <>
        <Popup trigger={<button className="popup">It's okay to change what you think. Click here.</button>}>
            <div className="formPopupEdit">
            {/* <div className={popUp ? "formPopupEdit" : "noFormPopupEdit"}> */}
                <div className= "formContainer">
                    <h2>It's okay to change what you think. We're listening.</h2><br></br>
                    <label>Name:</label>
                    <input type="text" name="fullName" required value={userInfo.fullName} onChange={handleEditData}></input>
                    <label>Job Title:</label>
                    <input type="text" name="jobTitle" required value={userInfo.jobTitle} onChange={handleEditData}></input>
                    <label>Company:</label>
                    <input type="text" name="company" required value={userInfo.company} onChange={handleEditData}></input>
                    <label>Birthday:</label><br></br><br></br>
                    <input type="date" name="bday" required value={userInfo.bday} onChange={handleEditData}></input><br></br><br></br>
                    <label>Comment:</label><br></br><br></br>
                    <textarea type="text" rows="5" name="comment" required value={userInfo.comment} onChange={handleEditData}></textarea><br></br><br></br>
                    {/* <Popup trigger={<button type="submit" className='edit saveCol' onClick={handleSave}>Update</button>}> */}
                    <button type="submit" className='edit saveCol' onClick={handleSave}>Update</button>
                    {/* </Popup> */}
                    <button className='edit delCol' onClick={() => props.setUpdating(false)}>Cancel</button>
                </div>
            </div>
        </Popup>
        </>
    );
}

export default ReviewEdit;