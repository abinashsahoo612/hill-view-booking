"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Sidebar from "./sidebar";

const Roomlist = ({ roomList,checkIn, checkOut }) => {
  // Ensure roomList is always an array
  const safeRoomList = Array.isArray(roomList) ? roomList : [];

  // Initialize counts as an array of zeros, one for each room
  const [counts, setCounts] = useState([]);

  // Reset counts when roomList changes
  useEffect(() => {
    setCounts(safeRoomList.map(() => 0));
  }, [safeRoomList.length]);

  const increase = (idx, max) => {
    setCounts((prev) =>
      prev.map((val, i) => (i === idx ? Math.min(val + 1, max) : val))
    );
  };

  const decrease = (idx) => {
    setCounts((prev) =>
      prev.map((val, i) => (i === idx ? Math.max(val - 1, 0) : val))
    );
  };

  const totalRooms = counts.reduce((sum, c) => sum + c, 0);
  const totalPrice = counts.reduce(
    (sum, c, i) => sum + c * (safeRoomList[i]?.price_per_night || 0),
    0
  );
  const details = counts
    .map((c, i) => {
      if (c > 0) {
        return {
          name: safeRoomList[i]?.name || "Room",
          quantity: c,
          category_id: safeRoomList[i]?.category_id,
          price: safeRoomList[i]?.price_per_night || 0,
        };
      }
      return null;
    })
    .filter(Boolean);
  return (
    <div className="room__list section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-8  xl-mb-30">
            {safeRoomList.map((item, index) => (
              <div key={index} className="room__list-item">
                <div className="room__list-item-left">
                  <div className="room__list-item-image">
                    <img src="/img/hotel/hotel-11.jpg" alt="image" style={{ width: "100%", objectFit: "cover" }} />
                  </div>
                </div>
                <div className="room__list-item-right">
                  <div className="room__list-item-right-content">
                    <h4>
                      <Link href="/room-details">{item.name}</Link>
                    </h4>
                    <ul>
                      <li>
                        <i className="fal fa-bed-alt"></i>({item.available_rooms}) Rooms available
                      </li>
                    </ul>
                  </div>
                  <div className="room__list-item-right-meta">
                    <div className="room__list-item-right-meta-top">
                      <span>Rs {item.price_per_night}+TAX/Night</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <button
                        type="button"
                        onClick={() => decrease(index)}
                        style={{
                          width: "30px",
                          height: "50px",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                        disabled={counts[index] === 0}
                      >
                        −
                      </button>
                      <input
                        type="number"
                        readOnly
                        value={counts[index] || 0}
                        style={{
                          width: "50px",
                          textAlign: "center",
                          fontSize: "16px",
                          borderRadius: "4px",
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => increase(index, item.available_rooms)}
                        style={{
                          width: "30px",
                          height: "50px",
                          borderRadius: "4px",
                          cursor: "pointer",
                        }}
                        disabled={counts[index] >= item.available_rooms}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Sidebar details={details} count={totalRooms} totalPrice={totalPrice} disableBook={totalPrice <= 0} checkIn={checkIn} checkOut={checkOut}/>
        </div>
      </div>
    </div>
  );
};

export default Roomlist;
