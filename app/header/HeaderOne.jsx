"use client";

import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { BarKitchen, Blog, Home, Page, Room } from "./Menu";
import DropDown from "./DropDown";
import Link from "next/link";

export default function HeaderOne({ variant }) {
  const { data: session } = useSession();
  const [mobileToggle, setMobileToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <div
      className={`header__sticky ${variant ? variant : ""} ${
        isSticky ? "header__sticky-sticky-menu" : ""
      }`}
    >
      <div className="header__area">
        <div className="container custom__container">
          <div className="header__area-menubar">
            <div className="header__area-menubar-left">
              <div className="header__area-menubar-left-logo">
                <Link href="/">
                  <img src="/logo-1.jpg" alt="logo" />
                </Link>
                <span
                  className={
                    mobileToggle
                      ? "mobile-menu mobile-menu-active"
                      : "mobile-menu"
                  }
                  onClick={() => setMobileToggle(!mobileToggle)}
                >
                  <span></span>
                </span>
              </div>
            </div>
            <div className="header__area-menubar-right">
              <div className="header__area-menubar-right-menu menu-responsive">
                <ul
                  className="mobile__menu"
                  style={{ display: `${mobileToggle ? "block" : "none"}` }}
                >
                  <li>
                    <a href="/">Home</a>
                  </li>

                  <li 
                  // className="menu-item-has-children"
                  >
                    <a href="/rooms">
                    Rooms
                    </a>
                    {/* <DropDown />
                    <ul className="sub-menu">
                      <Room />
                    </ul> */}
                  </li>
                  <li>
                    <a href="/restaurant">Restaurant</a>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link href="/about">About Us</Link>
                  </li>
                  {/* login section */}
                  {!session ? (
                    <li>
                      <Link href="/login">Login</Link>
                    </li>
                  ) : session.user.role === "admin" ? (
                    <li className="menu-item-has-children">
                      <a href="#">Admin</a>
                      <DropDown>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/admin">Rooms</Link>
                          </li>
                          <li>
                            <a
                              onClick={() => signOut({ callbackUrl: "/" })}
                            >
                              Logout
                            </a>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                  ) : (
                    <li className="menu-item-has-children">
                      <a href="#">Profile</a>
                      <DropDown>
                        <ul className="sub-menu">
                          <li>
                            <Link href="/bookings">Bookings</Link>
                            <button
                              onClick={() => signOut({ callbackUrl: "/" })}
                              className="w-full text-left px-4 py-2 hover:bg-gray-100"
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </DropDown>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            {/* <div className="header__area-menubar-right-box">
              <div className="header__area-menubar-right-box-btn">
                <Link className="theme-btn" href="/contact">
                  Book Now<i className="fal fa-long-arrow-right"></i>
                </Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
