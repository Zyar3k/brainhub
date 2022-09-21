import { useContext, useRef, useState } from "react";
import request from "../../helpers/request";
import { GlobalContext } from "../../context/GlobalProvider";

import "./CreateBooking.scss";

const CreateBooking = () => {
  const { fetchData } = useContext(GlobalContext);
  const [error, setError] = useState(false);

  const inputName = useRef();
  const inputLastName = useRef();
  const inputEmail = useRef();
  const inputBookingDate = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let name = inputName.current.value;
    let lastName = inputLastName.current.value;
    let email = inputEmail.current.value;
    let bookingDate = inputBookingDate.current.value;

    const booking = {
      name,
      lastName,
      email,
      bookingDate,
    };

    try {
      if (
        name !== "" &&
        lastName !== "" &&
        email !== "" &&
        bookingDate !== ""
      ) {
        await request.post("/bookings", booking);
        fetchData();
        e.target.reset();
        setError(false);
      } else {
        setError(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="actionBooking">
      <form className="form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Make an appointment</legend>
          <div className="inputWrapper">
            <label htmlFor="name">First name:</label>
            <input ref={inputName} type="text" id="name" name="name" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="lastName">Last name:</label>
            <input
              ref={inputLastName}
              type="text"
              id="lastName"
              name="lastName"
            />
          </div>
          <div className="inputWrapper">
            <label htmlFor="email">Email:</label>
            <input ref={inputEmail} type="email" id="email" name="email" />
          </div>
          <div className="inputWrapper">
            <label htmlFor="bookingDate">Date:</label>
            <input
              ref={inputBookingDate}
              type="date"
              id="bookingDate"
              name="bookingDate"
            />
          </div>
          {error ? <h4>Please fill all fields</h4> : null}
          <div className="inputWrapper">
            <input type="submit" value="Submit" className="btn accept" />
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default CreateBooking;
