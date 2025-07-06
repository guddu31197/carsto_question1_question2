import React, { useState } from "react";

export const FlightBooker = () => {
  const [flightType, setFlightType] = useState("one-way");
  const [departuserDate, setDepartuserDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const today = new Date().toISOString().split("T")[0];
  const isDeparturValid = departuserDate && departuserDate >= today;
  const ieRetureValid =
    flightType === "return" && returnDate && returnDate >= departuserDate;

  const isFormValid =
    flightType === "one-way"
      ? isDeparturValid
      : isDeparturValid && ieRetureValid;

  const handleBooking = () => {
    if (flightType === "one-way") {
      alert("you have one way");
    } else {
      alert("you have return way");
    }
  };

  return (
    <div>
      <h2>Flight Booker</h2>

      <label>
        Flight Type
        <select
          name=""
          id=""
          value={{ flightType }}
          onChange={(e) => setFlightType(e.target.value)}
        >
          <option value="one-way">one-way</option>
          <option value="return">return</option>
        </select>
      </label>

      <label htmlFor="">
        Departure Date
        <input
          type="date"
          value={departuserDate}
          onChange={(e) => setDepartuserDate(e.target.value)}
          min={today}
        />
      </label>

      {flightType === "return" && (
        <label>
          Return Date
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            min={departuserDate || today}
          />
        </label>
      )}

      <button disabled={!isFormValid} onClick={handleBooking}>Book Flight</button>
    </div>
  );
};
