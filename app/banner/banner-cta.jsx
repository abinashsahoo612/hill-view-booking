"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const BannerCta = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut) {
      setError("Please select both Check In and Check Out dates");
      return;
    }
    setError("");

    // Redirect with query params
    router.push(
      `/searched-rooms?checkIn=${encodeURIComponent(checkIn)}&checkOut=${encodeURIComponent(checkOut)}`
    );
  };

  return (
    <div className="row">
      <form onSubmit={handleSubmit}>
        <div className="check__area">
          <div className="check__area-item">
            <p>
              Check In
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                required
              />
            </p>
          </div>
          <div className="check__area-item">
            <p>
              Check Out
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
            </p>
          </div>
          <div className="check__area-item button">
            <button className="theme-btn" type="submit">
              Check Now
            </button>
          </div>
        </div>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default BannerCta;
