import { useContext } from "react";

import { GlobalContext } from "../../context/GlobalProvider";

const BookingList = () => {
  const { bookings } = useContext(GlobalContext);
  console.log(bookings);
  return <div>BookingList</div>;
};

export default BookingList;
