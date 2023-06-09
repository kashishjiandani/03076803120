import React, { useState } from "react";

const TrainDetails = () => {
  const [trainNumber, setTrainNumber] = useState("");
  const [seatAvailability, setSeatAvailability] = useState(null);
  const [error, setError] = useState(null);

  const handleTrainNumberChange = (event) => {
    setTrainNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      //   const response = await fetch(`/api/seats/${trainNumber}`); // Replace with your backend API endpoint
      const response = await fetch("http://104.211.219.98/train/trains/2344", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2ODYzMjU3NzgsImNvbXBhbnlOYW1lIjoiS2FzaGlzaCBUcmFpbiBDb21wYW55IiwiY2xpZW50SUQiOiIyMTE0ZWQzNy1lMDAwLTRmNTMtYTkzYS01NGRhMmJjZjMyMWQiLCJvd25lck5hbWUiOiIiLCJvd25lckVtYWlsIjoiIiwicm9sbE5vIjoiMDMwNzY4MDMxMjAifQ.v0Kn9FUXny1amzJSnKxJW3-oTGbF5K1wjd9MtaW9O1M",
        },
      });
      const data = await response.json();
      console.log(data);
      setSeatAvailability(data);
    } catch (error) {
      console.error("Error fetching seat availability", error);
      setError("Error fetching seat availability");
    }
  };

  return (
    <div>
      <h1>Seat Availability</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Train Number:
          <input
            type="text"
            value={trainNumber}
            onChange={handleTrainNumberChange}
          />
        </label>
        <button type="submit">Check Availability</button>
      </form>
      {error && <p>{error}</p>}
      {seatAvailability && (
        <div>
          <h2>Train {trainNumber} Seat Availability</h2>
          <p>delayedBy: {seatAvailability.delayedBy}</p>
          <p>trainName: {seatAvailability.trainName}</p>
          <p>price Sleeper : {seatAvailability.price.sleeper}</p>
          <p>price AC : {seatAvailability.price.AC}</p>
          <p>trainNumber: {seatAvailability.trainNumber}</p>
          <p>
            seatsAvailable sleeper: {seatAvailability.seatsAvailable.sleeper}
          </p>
          <p>seatsAvailable AC : {seatAvailability.seatsAvailable.AC}</p>
        </div>
      )}
    </div>
  );
};

export default TrainDetails;