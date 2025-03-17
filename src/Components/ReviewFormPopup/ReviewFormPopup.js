import "./ReviewFormPopup.css";

import React, { useState } from 'react';

function ReviewFormPopup({
    showForm, 
    setShowForm, 
    submittedMessage,
    setSubmittedMessage
}) {
  
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
        name: showForm,
        review: '',
        rating: 5
      });
  const handleButtonClick = () => {
    setShowForm(true);
  };
  const handleChange = (e) => {
    setFormData(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newSubmittedMessage = {...submittedMessage};
    newSubmittedMessage[showForm] = formData;
    setSubmittedMessage(newSubmittedMessage);
    setFormData('');
        if (formData.name && formData.review && formData.rating > 0) {
          setShowWarning(false);
        } else {
          setShowWarning(true);
        }
    setShowForm(false);
  };
  if (!showForm) return <></>;
  return (
    <div className="review-form-popup">
      <h2>Review</h2>
      {!showForm ? (
        <button onClick={handleButtonClick}>Open Form</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Give Your Feedback</h2>
               {showWarning && <p className="warning">Please fill out all fields.</p>}
                <div>
                 <label htmlFor="review">Review:</label>
                  <textarea id="review" name="review" value={formData.review} onChange={handleChange} />
                 </div>
                 <div>
                 <label htmlFor="review">Rating:</label>
                  <p>⭐⭐⭐⭐⭐</p>
                 </div>
                 <button disabled={!!submittedMessage[showForm]} type="submit">Submit</button>
                 <button style={{backgroundColor: "red"}} onClick={() => setShowForm(false)} type="reset">Cancel</button>
               </form>
      )}
      {submittedMessage[showForm] && (
        <div>
          <h3>Submitted Message:</h3>
          <p>{submittedMessage[showForm]}</p>
        </div>
      )}
    </div>
  );
}
export default ReviewFormPopup;


// const ReviewFormPopup = () => {
//     return (
//         <form className="review-form-popup">
//             <h2>Leave a Review:</h2>
//             <label>Name:</label>
//             <input type="name"/>
//             <label>Review:</label>
//             <textarea name="review"/>
//             <button type="submit">Submit!</button>
//         </form>
//     );
// };

// export default ReviewFormPopup;