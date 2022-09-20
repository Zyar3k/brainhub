import BookingList from "../components/BookingList/BookingList";
import CreateBooking from "../components/CreateBooking/CreateBooking";

const Home = () => {
  return (
    <main className="container">
      <CreateBooking />
      <BookingList />
    </main>
  );
};

export default Home;
