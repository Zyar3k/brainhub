import { useContext, useRef, useState } from "react";
import request from "../../helpers/request";
import { GlobalContext } from "../../context/GlobalProvider";

import "./CreateBooking.scss";
import InputWrapper from "./InputWrapper";

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
          <InputWrapper
            inputName={inputName}
            name="name"
            type="text"
            title="First name"
          />
          <InputWrapper
            inputName={inputLastName}
            name="lastName"
            type="text"
            title="Last name"
          />
          <InputWrapper
            inputName={inputEmail}
            name="email"
            type="email"
            title="Email"
          />
          <InputWrapper
            inputName={inputBookingDate}
            name="bookingDate"
            type="date"
            title="Date"
          />
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
