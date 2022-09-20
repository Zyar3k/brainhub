import React from "react";

import "./CreateBooking.scss";

const CreateBooking = () => {
  return (
    <section className="actionBooking">
      <form className="form">
        <fieldset>
          <legend>Make an appointment</legend>
          <div className="inputWrapper">
            <label for="name">First name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="inputWrapper">
            <label for="lastName">Last name:</label>
            <input type="text" id="lastName" name="lastName" />
          </div>
          <div className="inputWrapper">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="inputWrapper">
            <label for="bookingDate">Date:</label>
            <input type="date" id="bookingDate" name="bookingDate" />
          </div>
          <div className="inputWrapper">
            <input type="submit" value="Submit" className="btn accept" />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default CreateBooking;
