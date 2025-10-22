import React from "react";

// ✅ Importing images from your assets folder
import seaview from "../images/seaview.jpg";
import resort from "../images/resort.jpg";
import capsule from "../images/capsule.jpg";
import apartment from "../images/apartment.jpg";
import farmhouse from "../images/farmhouse.jpg";
import familyfriendly from "../images/familyfriendly.jpg";
import novotel from "../images/novotel.jpg";
import grtgrand from "../images/grtgrand.jpg";
import leela from "../images/leela.jpg";

const Content = () => {
  return (
    <main className="py-5">
      <div className="container">
        {/* Discover Section */}
        <div className="d-flex justify-content-between align-items-baseline mb-3">
          <h2>Discover your new favourite stay</h2>
          <a href="#" className="text-decoration-none small">
            View all types
          </a>
        </div>

        <div className="row g-3 mb-5">
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <img src={seaview} className="card-img-top" alt="Sea view" />
              <div className="card-body">
                <h5 className="card-title">Sea view</h5>
                <p className="card-text small text-muted">
                  Wake up to ocean views and salty air.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="card">
              <img src={resort} className="card-img-top" alt="Resort" />
              <div className="card-body">
                <h5 className="card-title">Resort</h5>
                <p className="card-text small text-muted">
                  All-inclusive comfort and leisure.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="card">
              <img src={capsule} className="card-img-top" alt="Capsule" />
              <div className="card-body">
                <h5 className="card-title">Capsule</h5>
                <p className="card-text small text-muted">
                  Compact stays for the budget traveller.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="card">
              <img src={apartment} className="card-img-top" alt="Apartment" />
              <div className="card-body">
                <h5 className="card-title">Apartment</h5>
                <p className="card-text small text-muted">
                  Feel at home with full amenities.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="card">
              <img src={farmhouse} className="card-img-top" alt="Farmhouse" />
              <div className="card-body">
                <h5 className="card-title">Farmhouse</h5>
                <p className="card-text small text-muted">
                  Escape to countryside comfort.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="card">
              <img
                src={familyfriendly}
                className="card-img-top"
                alt="Family Friendly"
              />
              <div className="card-body">
                <h5 className="card-title">Family friendly</h5>
                <p className="card-text small text-muted">
                  Rooms and activities for the whole family.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Section */}
        <div className="d-flex justify-content-between align-items-baseline mb-3">
          <h2>Recommended stays for you</h2>
          <a href="#" className="text-decoration-none small">
            See all recommendations
          </a>
        </div>

        <div className="row g-3">
          <div className="col-sm-6 col-md-4">
            <div className="card">
              <img src={novotel} className="card-img-top" alt="Novotel" />
              <div className="card-body">
                <h5 className="card-title">Novotel</h5>
                <p className="card-text small text-muted">
                  Modern comfort in the city centre.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="card">
              <img src={grtgrand} className="card-img-top" alt="GRT Grand" />
              <div className="card-body">
                <h5 className="card-title">GRT Grand</h5>
                <p className="card-text small text-muted">
                  Luxury stays with excellent service.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-6 col-md-4">
            <div className="card">
              <img src={leela} className="card-img-top" alt="The Leela" />
              <div className="card-body">
                <h5 className="card-title">The Leela</h5>
                <p className="card-text small text-muted">
                  Iconic hospitality and premium dining.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Content;
