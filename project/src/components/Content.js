import React from "react";

// Importing each image individually

const Content = () => {
    return (
        <main className="py-5">
            <div className="container">
                {/* Discover Section */}
                <div className="d-flex justify-content-between align-items-baseline mb-3">
                    <h2>Discover your new favourite stay</h2>
                    <a href="#" className="text-decoration-none small">View all types</a>
                </div>

                <div className="row g-3 mb-5">
                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                           <img src="/images/seaview.jpg" className="card-img-top" alt="Sea view" />
                            <div className="card-body">
                                <h5 className="card-title">Sea view</h5>
                                <p className="card-text small text-muted">Wake up to ocean views and salty air.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                           <img src="/images/resort.jpg" className="card-img-top" alt="resort" />
                           
                            <div className="card-body">
                                <h5 className="card-title">Resort</h5>
                                <p className="card-text small text-muted">All-inclusive comfort and leisure.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                           <img src="/images/capsule.jpg" className="card-img-top" alt="capsule" />
                            
                            <div className="card-body">
                                <h5 className="card-title">Capsule</h5>
                                <p className="card-text small text-muted">Compact stays for the budget traveller.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                           <img src="/images/apartment.jpg" className="card-img-top" alt="apartment" />
                            
                            <div className="card-body">
                                <h5 className="card-title">Apartment</h5>
                                <p className="card-text small text-muted">Feel at home with full amenities.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                           <img src="/images/farmhouse.jpg" className="card-img-top" alt="farmhouse" />
                           
                            <div className="card-body">
                                <h5 className="card-title">Farmhouse</h5>
                                <p className="card-text small text-muted">Escape to countryside comfort.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                           <img src="/images/familyfriendly.jpg" className="card-img-top" alt="familyfriendly" />
                            
                            <div className="card-body">
                                <h5 className="card-title">Family friendly</h5>
                                <p className="card-text small text-muted">Rooms and activities for the whole family.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recommended */}
                <div className="d-flex justify-content-between align-items-baseline mb-3">
                    <h2>Recommended stays for you</h2>
                    <a href="#" className="text-decoration-none small">See all recommendations</a>
                </div>

                <div className="row g-3">
                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                           <img src="/images/novotel.jpg" className="card-img-top" alt="novotel" />
                           
                            <div className="card-body">
                                <h5 className="card-title">Novotel</h5>
                                <p className="card-text small text-muted">Modern comfort in the city centre.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                           <img src="/images/grtgrand.jpg" className="card-img-top" alt="grtgrand" />
                            
                            <div className="card-body">
                                <h5 className="card-title">GRT Grand</h5>
                                <p className="card-text small text-muted">Luxury stays with excellent service.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                           <img src="/images/leela.jpg" className="card-img-top" alt="leela" />
                            
                            <div className="card-body">
                                <h5 className="card-title">The Leela</h5>
                                <p className="card-text small text-muted">Iconic hospitality and premium dining.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};

export default Content;
