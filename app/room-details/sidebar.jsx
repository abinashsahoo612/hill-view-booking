import Link from 'next/link';
import React from 'react';
import roomStyleAllBlogs from "@/components/data/room-style-all-blogs";

const Sidebar = ({type}) => {
    const roomDetail  = roomStyleAllBlogs[type];
  return (
                <div className="col-xl-3 col-lg-4 lg-mb-30">
                    <div className="all__sidebar sidebar-right-sticky">
                        <div className="all__sidebar-item">
                            <h5>Get Your Quote</h5>
                            <div className="all__sidebar-item-price">
                              {roomDetail.price ? (
                                <>
                                  <ul>
                                    <li><i className="fal fa-bed-alt"></i>({roomDetail.bed}) bed's</li>
                                    <li><i className="fal fa-users"></i>({roomDetail.guest}) Guests</li>
                                    <li><i className="fal fa-users"></i>({roomDetail.maxguest}) Max Guests</li>
                                  </ul>
                                  <h4>₹{roomDetail.price}<span>/Night</span></h4>
                                </>
                              ) : (
                                <>
                                  <ul className='mb-3'>
                                    {roomDetail.area && (
                                      <li><i className="fal fa-warehouse-alt"></i>({roomDetail.area}) Area</li>
                                    )}
                                    {roomDetail.maxCapacity && (
                                      <li><i className="fal fa-users"></i>({roomDetail.maxCapacity}) Max Capacity</li>
                                    )}
                                  </ul>
                                  {/* <h4>₹{roomDetail.price}</h4> */}
                                </>
                              )}
                              <a className="theme-btn" href="/contact">Contact Us<i className="fal fa-long-arrow-right"></i></a>
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
                </div>
  );
};

export default Sidebar;