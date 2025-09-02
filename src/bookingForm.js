import React, { useState } from "react";
import "./bookingForm.css"; // We'll style separately

function BookingForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date || !time || guests < 1) {
      alert("Please fill all required fields correctly.");
      return;
    }

    console.log({ name, date, time, guests, occasion });
    alert("🍋 Your table at Little Lemon has been booked!");
  };

  return (
    <section className="booking-container">
      <h2 className="booking-title">Reserve a Table</h2>
      <form onSubmit={handleSubmit} className="booking-form">
        <label>
          Name
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Date
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>

        <label>
          Time
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </label>

        <label>
          Number of Guests
          <input
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required
          />
        </label>

        <label>
          Occasion
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
            <option value="">Select</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="other">Other</option>
          </select>
        </label>

        <button type="submit" className="booking-btn">
          Book Table
        </button>
      </form>
    </section>
  );
}

export default BookingForm;
