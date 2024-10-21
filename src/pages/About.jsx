import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg mb-6">
                Welcome to Voice Care! We are dedicated to providing the best voice care services.
                Our team of experts is here to help you with all your vocal needs.
            </p>
            <div className="team-section mt-8">
                <h2 className="text-3xl font-semibold mb-3">Our Team</h2>
                <p className="text-lg">
                    Our team consists of experienced professionals who are passionate about voice care.
                    We work together to ensure you receive the highest quality service.
                </p>
            </div>
        </div>
    );
};

export default About;
