import React, { useState } from 'react'

const AppointmentForm = ({ doctorName, doctorSpeciality, onSubmit }) => {
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [date, setDate] = useState('');
    const [selectedSlot, setSelectedSlot] = useState(null);
  
    const handleSlotSelection = (slot) => {
      setSelectedSlot(slot);
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault();
      onSubmit({ name, phoneNumber, date });
      setName('');
      setPhoneNumber('');
      setDate("");
    };
  
    return (
      <form onSubmit={handleFormSubmit} className="appointment-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Appointment:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
            <label htmlFor="timeslot">Book Time Slot:</label>
            <select  name ="timeslot"> 
            <option value ="0"> Please select </option>
            <option value = "08:30" > 08:30 </option>
            <option value = "09:15" > 09:15 </option>
            <option value = "10:00" > 10:00 </option>
            <option value = "10:45" > 10:45 </option>
            <option value = "11:30" > 11:30 </option>
            <option value = "12:15" > 12:15 </option>
            <option value = "13:00" > 13:00 </option>
            <option value = "13:45" > 13:45 </option>
            <option value = "14:30" > 14:30 </option>
            <option value = "15:15" > 15:15 </option>
            <option value = "16:00" > 16:00 </option>
            <option value = "16:45" > 16:45 </option>
            <option value = "17:30" > 17:30 </option>
            </select>
        </div>
        <button type="submit">Book Now</button>
      </form>
    );
  };

export default AppointmentForm;