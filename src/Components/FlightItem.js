import React from "react";
import { useDispatch } from "react-redux";
import { deleteFlight } from "../features/flights/flightSlice";
import details from "./data";

const FlightItem = ({ flight, user }) => {
  const { id, Flight_name } = details;

  // const checkNumber = (number)=>{
  //   if(number > details.length - 1){
  //     return 0;
  //   }
  //   if(number < 0){
  //     return details.length - 1;
  //   }
  //   return number;
  //  }

  let randomNumber = Math.floor(Math.random() * details.length);
  // console.log(details[randomNumber].Flight_name);

  //  console.log(flight.ClassType);

  const dispatch = useDispatch();
  return (
    <>
      <div className="flight-details-list">
        <div className="flight-item">
          <h4> Passenger</h4>
          <h2 className="flight-items">{user}</h2>
        </div>

        <div className="flight-item">
          <h4> Flight Name</h4>
          <h2 className="flight-items">{details[randomNumber].Flight_name}</h2>
        </div>

        <div className="flight-item">
          <h5>Flight Number</h5>
          <h4 className="flight-items">
            {details[randomNumber].Flight_number}
          </h4>
        </div>

        <div className="flight-item">
          <h4>Booking Time</h4>
          <div className="flight-items">
            {new Date(flight.createdAt).toLocaleString("en-US")}
          </div>
        </div>

        <div className="flight-item">
          <h4> From</h4>
          <h2 className="flight-items">{flight.Destination_From}</h2>
        </div>

        <div className="flight-item">
          <h4> To </h4>
          <h2 className="flight-items">{flight.Destination_To}</h2>
        </div>

        <div className="flight-item">
          <h4> price </h4>
          <h2 className="flight-items">
            {flight.ClassType === "Business"
              ? flight.Guests * 2500
              : flight.Guests * 1000}
          </h2>
        </div>

        <div className="flight-item">
          <h4> Persons </h4>
          <h2 className="flight-items">{flight.Guests}</h2>
        </div>

        <div className="flight-item">
          <h4> ClassType </h4>
          <h2 className="flight-items">{flight.ClassType}</h2>
        </div>

        <button
          className="close"
          onClick={() => dispatch(deleteFlight(flight._id))}
        >
          X
        </button>
      </div>
    </>
  );
};

export default FlightItem;
