import React, {useState} from 'react';
// import Modal from 'react-modal';
import {useForm} from 'react-hook-form';

// Modal.setAppElement('#root');

const ReviewInput = ({formData}) => {
    const [fullName, setFullName] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [company, setCompany] = useState('');
    const [bday, setBday] = useState('');
    const [comment, setComment] = useState('');

    const {register, handleSubmit, errors} = useForm();

    const handleSubmitInfo = () => {
        // e.preventDefault();
        setFullName('');
        setJobTitle('');
        setCompany('');
        setBday('');
        setComment('');
        formData(fullName, jobTitle, company, bday, comment);
        // setFormOpen(false);
        
    };

    // const [formOpen, setFormOpen] = useState(false);

    // const handleFormOpen = () => {
    //     setFormOpen(!false);
    // }

    // const handleFormClose = () => {
    //     setFormOpen(false)
    // }

    // const formStyle = {
    //     overlay: {
    //     backgroundColor: 'rgba(51, 51, 51, 0.8)'
    //     },
    // }

    return (
        <>
            <div className="comments">    
                <h3 className='intro'>OUR CUSTOMERS LOVE WHAT WE DO</h3>
                <p class="parag">And we would also love to hear your stories and experiences.
                    <br/> Share your thoughts using the form below.
                </p>
                {/* <button onClick={handleFormOpen} className="save">Click here to share your thoughts!</button> */}
            </div>
            <div className= "formInput" autoComplete='off'>
                {/* <Modal isOpen={formOpen} onRequestClose={handleFormClose} className='form' style={formStyle}> */}
                    <div className= "formContainer">
                        <h2>Speak your Mind!</h2><br></br>
                        <label>Name:</label>
                        <input type="text" name="fullName" required value={fullName} placeholder="Enter your name" onChange={(e) => setFullName(e.target.value)} ref={register({required: true})}></input>
                        {errors.fullName && <p className="invalid">Name is required!</p>}
                        <label>Job Title:</label>
                        <input name="jobTitle" type="text" required value={jobTitle} placeholder="Enter position" onChange={(e) => setJobTitle(e.target.value)}></input>
                        <label>Company:</label>
                        <input type="text" name="company" required value={company} placeholder="Enter company name" onChange={(e) => setCompany(e.target.value)}></input>
                        <label>Birthday:</label><br></br><br></br>
                        <input type="date" name="bday" required value={bday} onChange={(e) => setBday(e.target.value)}></input><br></br><br></br>
                        <label>Leave a comment:</label><br></br><br></br>
                        <textarea type="text" rows="5" name="comment" required value={comment} placeholder="What's on your mind?" onChange={(e) => setComment(e.target.value)} ref={register({required: true})}></textarea><br></br><br></br>
                        {errors.fullName && <p className="invalid">Comment is required!</p>}
                        <button className='edit saveCol openButton' onClick={handleSubmit(handleSubmitInfo)}>Save</button>
                        {/* <button className='edit delCol' onClick={handleFormClose}>Cancel</button> */}
                    </div>
                {/* </Modal> */}
            </div>
        </>
    );  
}

export default ReviewInput;