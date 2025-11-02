"use client";
import Link from 'next/link';
import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { PacmanLoader } from "react-spinners";

const Sidebar = ({details,count,totalPrice,disableBook,checkIn, checkOut}) => {
    const { data: session } = useSession();
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [bookingData, setBookingData] = useState(null);
    const [loading, setLoading] = useState(false);
    const handleBooking = async () => {
        setLoading(true);
        if (!session) {
            const fullPath = window.location.pathname + window.location.search;
            window.location.href = `/login?redirect=${encodeURIComponent(fullPath)}`;
            return;
        }

        try {
        const res = await fetch("/api/create-booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            user: session.user,
            items: details,            
            check_in_date: checkIn,
            check_out_date: checkOut,
            total_price: totalPrice,
            discount: 15
            }),
        });

        if (!res.ok) throw new Error("Booking failed");

        const data = await res.json();
        setBookingData({
            booking_id: data.booking_id,
            user: session.user,
            amount: data.orderAmount,
        });
        setLoading(false);
        setShowPaymentModal(true);
        // console.log(data.payment_session_id);
        // window.location.href = `https://payments-test.cashfree.com/order/#${data.payment_session_id}`;

        } catch (err) {
        console.error("Error:", err);
        alert("Something went wrong!");
        }
    };
    const handlePay = async () => {
        setLoading(true);
        try {
        const res = await fetch("/api/create-payment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            booking_id: bookingData.booking_id,
            user: session.user,
            status: "confirmed",
            payment_status: "paid",
            amount: bookingData.amount,
            payment_provider: "Online",
            }),
        });
        if (!res.ok) throw new Error("Payment update failed");
        setLoading(false);
        window.location.href = "/bookings";
        } catch (err) {
        console.error(err);
        alert("Payment update failed!");
        }
    };

    const handleCancel = async () => {
        setLoading(true);
        try {
        const res = await fetch("/api/cancel-booking", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
            booking_id: bookingData.booking_id,
            user: session.user,
            }),
        });
        if (!res.ok) throw new Error("Booking cancel failed");
        setLoading(false);
        setShowPaymentModal(false);
        } catch (err) {
        console.error(err);
        alert("Payment update failed!");
        }
    };
    return (
        <>
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
        <div className="col-xl-4 col-lg-4 lg-mb-30">
            <div className="all__sidebar">
                <div className="all__sidebar-item">
                    {!disableBook && (
                        <div className="room__details">
                            <h5>Booking Details</h5>
                            <ol>
                                {details.map((room, index) => (
                                <li key={index}>
                                    <strong>{room.name}</strong> - {room.quantity} × RS {room.price} ={" "}
                                    <span>RS {room.quantity * room.price}</span>
                                </li>
                                ))}
                            </ol>
                        </div>
                    )}
                    <h5>Your Price</h5>
                    <div className="all__sidebar-item-price">
                        <ul>
                            <li><i className="fal fa-bed-alt"></i>Total ({count}) Rooms</li>
                            <li><i className="fal fa-wallet"></i>Total Price: RS {totalPrice}</li>
                            <li><i className="fal fa-badge-percent"></i>Discount 15%</li>
                        </ul>

                        {/* Show discount calculation */}
                        <h4>
                            <span style={{ textDecoration: "line-through", color: "gray", fontSize: "14px", marginRight: "8px" }}>
                            RS {totalPrice}
                            </span>
                            RS {(totalPrice - totalPrice * 0.15).toFixed(2)} 
                            
                        </h4>
                    </div>

                    <div className="mt-30">
                        <a
                          className={`theme-btn${disableBook ? ' disabled' : ''}`}
                          onClick={handleBooking}
                          style={{ cursor:"pointer",pointerEvents: disableBook ? 'none' : 'auto', opacity: disableBook ? 0.5 : 1 }}
                        >
                          Book Now<i className="fal fa-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
                {/* <div className="all__sidebar-item">
                    <h5>Category</h5>
                    <div className="all__sidebar-item-category">
                        <ul>
                            <li><Link href="/room-details"><i className="far fa-angle-double-right"></i>Luxury Room<span>(08)</span></Link></li>
                            <li><Link href="/room-details"><i className="far fa-angle-double-right"></i>Small Suite<span>(06)</span></Link></li>
                            <li><Link href="/room-details"><i className="far fa-angle-double-right"></i>Single<span>(05)</span></Link></li>
                            <li><Link href="/room-details"><i className="far fa-angle-double-right"></i>Family<span>(09)</span></Link></li>
                            <li><Link href="/room-details"><i className="far fa-angle-double-right"></i>Double Room<span>(03)</span></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="all__sidebar-item">
                    <h5>Booking Now</h5>
                    <div className="all__sidebar-item-booking">
                        <div className="all__sidebar-item-booking-item mb-10">
                            <select name="select">
                                <option value="1">Check In</option>
                                <option value="2">Check In</option>
                                <option value="3">Check In</option>
                                <option value="4">Check In</option>
                                <option value="5">Check In</option>
                            </select>
                        </div>
                        <div className="all__sidebar-item-booking-item mb-10">
                            <select name="select">
                                <option value="1">Check Out</option>
                                <option value="2">Check Out</option>
                                <option value="3">Check Out</option>
                                <option value="4">Check Out</option>
                                <option value="5">Check Out</option>
                            </select>
                        </div>
                        <div className="all__sidebar-item-booking-item mb-30">
                            <select name="select">
                                <option value="1">Room</option>
                                <option value="2">1 Room</option>
                                <option value="3">2 Room</option>
                                <option value="4">3 Room</option>
                                <option value="5">4 Room</option>
                            </select>
                        </div>
                        <Link className="theme-btn" href="#">Check<i className="fal fa-long-arrow-right"></i></Link>
                    </div>
                </div> */}
            </div>
            {showPaymentModal && bookingData && (
                <div className="modal-overlay">
                <div className="modal-box">
                    <h3>Payment Details</h3>
                    <p><strong>Name:</strong> {bookingData.user.name}</p>
                    <p><strong>Email:</strong> {bookingData.user.email}</p>
                    <p><strong>Phone:</strong> {bookingData.user.phone}</p>
                    <p><strong>Amount:</strong> ₹{bookingData.amount}</p>
                    <div className="modal-actions">
                    <button className="theme-btn" onClick={handlePay}>Pay</button>
                    <button className="theme-btn cancel" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
                <style jsx>{`
                    .modal-overlay {
                    position: fixed;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    background: rgba(0, 0, 0, 0.6);
                    display: flex; align-items: center; justify-content: center;
                    z-index: 9999;
                    }
                    .modal-box {
                    background: white;
                    border-radius: 12px;
                    padding: 30px;
                    width: 90%;
                    max-width: 400px;
                    text-align: center;
                    }
                    .modal-actions {
                    display: flex;
                    justify-content: space-around;
                    margin-top: 20px;
                    }
                    .cancel {
                    background: #ccc;
                    color: #000;
                    }
                `}</style>
                </div>
            )}
        </div>
        </>
    );
};

export default Sidebar;