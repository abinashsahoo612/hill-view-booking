"use client";

import { useEffect, useState, useRef } from "react";

export default function RoomsAdmin() {
  const formRef = useRef(null);
  const [rooms, setRooms] = useState([]);
  const [editingRoom, setEditingRoom] = useState(null);
  const [form, setForm] = useState({});

  const fetchRooms = async () => {
    const res = await fetch("/api/rooms");
    const data = await res.json();
    setRooms(data);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  const handleEdit = (room) => {
    setEditingRoom(room);
    setForm(room);
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/rooms", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: editingRoom._id, ...form }),
    });

    if (res.ok) {
      alert("Room updated!");
      setEditingRoom(null);
      fetchRooms();
    } else {
      alert("Error updating room");
    }
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">Manage Rooms</h2>

      {/* Room List */}
      <div className="row">
        {rooms && rooms.map((room) => (
          <div key={room._id} className="col-md-4 mb-3">
            <div className="card h-100 shadow-sm">
              {/* <img
                src={room.bannerImage}
                alt={room.title}
                className="card-img-top"
                style={{ height: "150px", objectFit: "cover" }}
              /> */}
              <div className="card-body">
                <h5>{room.title}</h5>
                {/* <p>{room.short_desc}</p> */}
                <p><strong>Price:</strong> ₹{room.price}</p>
                <p><strong>Total Rooms:</strong> {room.totalRooms}</p>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => handleEdit(room)}
                >
                  Edit
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Form */}
      {editingRoom && (
        <div className="card p-4 mt-5 shadow-sm">
          <h4>Edit Room: {editingRoom.title}</h4>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-2">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={form.title || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label>Short Description</label>
              <input
                type="text"
                name="short_desc"
                value={form.short_desc || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label>Description</label>
              <textarea
                name="description"
                value={form.description || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={form.price || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label>Beds</label>
              <input
                type="number"
                name="bed"
                value={form.bed || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label>Bed Types</label>
              <input
                type="text"
                name="bedType"
                value={form.bedType || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label>Guests</label>
              <input
                type="number"
                name="guest"
                value={form.guest || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label>Max Guests</label>
              <input
                type="number"
                name="maxguest"
                value={form.maxguest || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label>Total Rooms</label>
              <input
                type="number"
                name="totalRooms"
                value={form.totalRooms || ""}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <button className="btn btn-success mt-2" type="submit">
              Save Changes
            </button>
            <button
              type="button"
              className="btn btn-secondary mt-2 ms-2"
              onClick={() => setEditingRoom(null)}
            >
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
