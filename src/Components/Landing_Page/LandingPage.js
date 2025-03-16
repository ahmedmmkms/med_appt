import React from 'react'; // Importing React library for building UI components
import './LandingPage.css'; // Importing styles for Landing Page component

// Functional component for the Landing Page
function LandingPage() {

    return (
        <div className="LandingPage">
            <section className="hero-section"> {/* Hero section container */}
                <div>
                    <div data-aos="fade-up" className="flex-hero"> {/* Div container with fade-up animation */}

                        <h1>
                            Your Health<br />

                            {/* Main heading for the Landing Page */}
                            <span className="text-gradient">
                                Our Responsibility {/* Subheading with gradient effect */}
                            </span>
                        </h1>

                        <div className="blob-cont"> {/* Container for blob shape */}
                            <div className="blue blob"></div> {/* Blue blob shape */}
                        </div>

                        <div className="blob-cont"> {/* Another container for blob shape */}
                            <div className="blue1 blob"></div> {/* Blue1 blob shape */}
                        </div>

                        <h4>
                            Finding the right doctor has never been easier. StayHealthy connects you with top healthcare professionals based on your needs, allowing you to search by specialty, book appointments effortlessly, and leave reviews to help others make informed decisions. Whether you need a routine check-up or specialized care, StayHealthy ensures a seamless and stress-free experience. Take control of your health today—because your well-being matters!
                        </h4> {/* Description text for the Landing Page */}

                        <a href="#services"> {/* Link to scroll down to services section */}
                            <button className="button">Get Started</button> {/* Button to navigate to services section */}
                        </a>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage; // Exporting Landing Page component as default