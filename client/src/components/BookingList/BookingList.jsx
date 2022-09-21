import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalProvider";

import "./BookingList.scss";

const BookingList = () => {
  const { bookings } = useContext(GlobalContext);

  return (
    <section>
      <h3 className="bookingsHeader">Our appointments</h3>
      <div className="bookings">
        {bookings.length === 0 ? (
          "No appointments in the near future..."
        ) : (
          <>
            {bookings.map((book, index) => (
              <div key={index} className="booking">
                <p className="number">{index + 1}</p>
                <p className="name">
                  {book.name} {book.lastName}
                </p>
                <p className="email">{book.email}</p>
                <p className="date">{book.bookingDate}</p>
                <p className="actions">
                  <i class="fa-solid fa-pen-to-square"></i>
                  <i class="fa-solid fa-trash-can"></i>
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default BookingList;
