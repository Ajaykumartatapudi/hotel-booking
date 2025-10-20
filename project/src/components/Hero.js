// src/components/Hero.jsx
import React from "react";
import "./Hero.css";
import hotelImg from "../images/hotel.jpg";

const Hero = () => {
  return (
    <section
      className="hero py-5"
      style={{
        backgroundImage: `url(${hotelImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        position: "relative",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* 🟢 Dark Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
        }}
      ></div>

      {/* 🟢 Hero Content */}
      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <div className="container">
          <div
            className="row align-items-center justify-content-between"
            style={{ gap: "40px" }} // 👈 gap between text & search card increased
          >
            <div className="col-lg-6 text-gradient">
              <div className="typewriter mb-3">
                <h1 className="display-5 fw-bold">
                  Find and book great places 
                </h1>
              </div>
              <p className="lead text-fade mb-4">
                Discover stays from seaview villas to city apartments — tailored
                for you.
              </p>
            </div>

            {/* 🟢 Search Card */}
            <div
              className="col-lg-5"
              style={{
                marginTop: "-20px", // 👈 brings the card slightly upward (closer to hero text)
              }}
            >
              <div
                className="card search-card p-3"
                style={{
                  boxShadow: "0 8px 30px rgba(0,0,0,0.25)",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255,255,255,0.9)",
                }}
              >
                <form className="row g-2 align-items-end">
                  <div className="col-12">
                    <label className="form-label small mb-1">Where to</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City, property, or landmark"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label small mb-1">Check-in</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label small mb-1">Check-out</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label small mb-1">Persons</label>
                    <select className="form-select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5+</option>
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label className="form-label small mb-1">Rooms</label>
                    <select className="form-select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4+</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100">
                      Search stays
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* End of Search Card */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
