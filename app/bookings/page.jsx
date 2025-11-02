"use client";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import ScrollToTopButton from "../scroll-to-top/scrollToTop";
import { PacmanLoader } from "react-spinners";

const Bookings = () => {
  const { data: session, status } = useSession();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!session) return;

    const fetchBookings = async () => {
      try {
        const res = await fetch(`/api/get-bookings?user_id=${session.user.id}`);
        if (!res.ok) throw new Error("Failed to fetch bookings");

        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [session]);

  

  if (!session) {
    return <p className="text-center mt-10">Please log in to view your bookings.</p>;
  }

  return (
    <>
      <HeaderOne />
      <BreadCrumb title="Bookings" innerTitle="Bookings" bgImage="/img/banner/Entrance12.png"/>
      {loading && (
        <div style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(255,255,255,0.7)',
          zIndex: 9999
        }}>
          <PacmanLoader color="#B89146" size={30} />
        </div>
      )}
      <div className="container my-10">
        <h3 className="mb-4">Your Bookings</h3>

        {loading ? (
          <p>Loading your bookings...</p>
        ) : bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <div className="booking-list">
            {bookings.map((booking) => (
              <div key={booking.id} className="booking-card mb-4 p-4 border rounded shadow-sm">
                <h5>Booking ID: {booking.id}</h5>
                <p><strong>Check-in:</strong> {booking.check_in_date}</p>
                <p><strong>Check-out:</strong> {booking.check_out_date}</p>
                <h6>Rooms:</h6>
                <ul>
                  {booking.items?.map((item, idx) => (
                    <li key={idx}>
                      {item.name} - {item.quantity} × ₹{item.price_per_night} = ₹{item.quantity * item.price_per_night}
                    </li>
                  ))}
                </ul>
                <p><strong>Total Price:</strong> ₹{booking.total_price}</p>
                <p><strong>Discount:</strong> {booking.discount}%</p>
                <p><strong>Final Price:</strong> ₹{booking.total_price - (booking.total_price * (booking.discount/100))}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Bookings;
