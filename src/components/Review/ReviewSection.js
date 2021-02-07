import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import ReviewInput from './ReviewInput';
import ReviewData from './ReviewData';
import UserReview from './UserReview';
import ReviewEdit from './ReviewEdit';
import './ReviewSection.css';

const ReviewSection = () => {
    useEffect( () => {
        const data = localStorage.getItem('reviewData')

        if(data) {
            setReviewData(JSON.parse(data))
        }
    }, [])

    const [reviewData, setReviewData] = useState(ReviewData)

    const formData = (fullName, jobTitle, company, bday, comment) => {
        setReviewData([...reviewData, {id: uuidv4(), fullName, jobTitle, company, bday, comment}])
    }

    const delFormData = (userKey) => {
        let newReview = reviewData;
        newReview.splice(userKey, 1);
        setReviewData([...newReview])
    }

    useEffect ( () => {
        let userInput = JSON.stringify(reviewData);
        localStorage.setItem('reviewData', userInput)
    }, [reviewData])

    const [update, setUpdating] = useState(false);
    const inputForm = {id: null, fullName:'', jobTitle:'', company:'', bday:'', comment:''};

    const [user, setUser] = useState(inputForm);

    const editFormData = userInfo => {
        setUpdating(true);
        setUser({id: userInfo.id, 
                fullName: userInfo.fullName,
                jobTitle: userInfo.jobTitle,
                company: userInfo.company,
                bday: userInfo.bday,
                comment: userInfo.comment})
    };

    const updateInfo = (id, changeUser) => {
        setUpdating(false);
        setReviewData(reviewData.map(user => (user.id === id? changeUser : user)))
    };

    return (
        <>
            <div id="form">

                <ReviewInput 
                        formData = {formData}
                />
                {update && (
                    <ReviewEdit 
                        update = {update}
                        setUpdating = {setUpdating}
                        user = {user}
                        updateInfo = {updateInfo}
                />
                )}  
                <UserReview 
                    editFormData = {editFormData}
                    delFormData = {delFormData}
                    reviewData = {reviewData}
                />
            </div>
        </>
    );
}

export default ReviewSection;