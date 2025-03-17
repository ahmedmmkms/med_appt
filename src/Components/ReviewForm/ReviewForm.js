import { useState } from "react";
import "./ReviewForm.css";
import ReviewFormPopup from "../ReviewFormPopup/ReviewFormPopup";

const doctors = [
    {
        name: "James Doe",
        special: "Dentist",
    },
    {
        name: "Jaou Rouge",
        special: "Cardiology",
    }
]

const ReviewForm = () => {

    const [showForm, setShowForm] = useState(false);
    const [submittedMessage, setSubmittedMessage] = useState({});

    return(
        <>
        <div className="form-container">
            <h1>Reviews</h1>
            <table>
                <tr>
                    <th>Serial Number</th>
                    <th>Doctor Name</th>
                    <th>Doctor Speciality</th>
                    <th>Provide Feedback</th>
                    <th>Review Given</th>
                </tr>
                {doctors.map((doctor, index) => {
                    return (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>Dr. {doctor.name}</td>
                            <td>{doctor.special}</td>
                            <td>{doctor.review? "" : <button disabled={!!submittedMessage[doctor.name]} onClick={() => setShowForm(doctor.name)}>Click Here</button>}</td>
                            <td>{submittedMessage[doctor.name] ? `${submittedMessage[doctor.name]}. 5 stars`:""}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
        <ReviewFormPopup 
        showForm={showForm} 
        setShowForm={setShowForm}
        submittedMessage={submittedMessage} 
        setSubmittedMessage={setSubmittedMessage}
        />
        </>
        
    );
};

export default ReviewForm;