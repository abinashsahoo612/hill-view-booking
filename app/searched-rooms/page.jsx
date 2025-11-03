"use client";
import { useEffect, useState } from "react";
import Footer from "../footer/footer";
import HeaderOne from "../header/HeaderOne";
import BreadCrumb from "../breadcrumb/breadcrumb";
import Roomlist from "./room-list";
import { PacmanLoader  } from "react-spinners";

const SearchedRoomsPage = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  // read query params on client-side to avoid useSearchParams SSR issues
  useEffect(() => {
    const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
    setCheckIn(params.get("checkIn"));
    setCheckOut(params.get("checkOut"));
  }, []);

  useEffect(() => {
    if (checkIn && checkOut) {
      fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          check_in_date: checkIn,
          check_out_date: checkOut,
        }),
      })
        .then((res) => res.json())
        .then((data) => setRooms(data))
        .finally(() => setLoading(false));
    }
  }, [checkIn, checkOut]);

  return (
    <>
    <HeaderOne />
    <BreadCrumb title="Available Rooms" innerTitle="available-rooms" bgImage="/img/banner/img2.jpg"/>
    {/* {loading && <Loader />} */}
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
    <Roomlist roomList={rooms} checkIn={checkIn} checkOut={checkOut}/>  
    <Footer/>
    </>
  );
};

export default SearchedRoomsPage;
