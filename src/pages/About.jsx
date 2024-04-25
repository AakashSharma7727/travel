import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <h1 className="text-4xl font-bold mb-8 mt-[60px] md:mt-[40px] ">About Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="w-full text-xl md:w-1/2">
          <p className="mb-4 text-justify">Welcome to our travel site! We are passionate about helping you explore the world and create unforgettable memories. Our team of experts have curated a selection of the best travel destinations, activities, and accommodations to make your trip planning easy and enjoyable.</p>
          <p className="mb-4 text-justify">We believe that travel should be accessible to everyone, which is why we offer a variety of options to fit any budget. Whether you're looking for a luxury getaway or a budget-friendly adventure, we've got you covered.</p>
        </div>
        <div className="w-full md:ml-5 md:w-1/2">
          <img src="https://media.istockphoto.com/id/1392494719/photo/woman-with-pink-suitcase-and-passport-with-boarding-pass-standing-on-passengers-ladder-of.jpg?s=612x612&w=0&k=20&c=MVUZvIdaUmvRKdG-B5EEGGkIVFj51jss-b6IkxqY3fg=" alt="About us" className="object-cover object-center rounded-lg" />
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 mt-8">Our Mission</h2>
      <p className="mb-4 text-xl">Our mission is to provide exceptional service and support to our customers, from the moment you start planning your trip until you return home. We're here to answer any questions you may have and help you create the trip of a lifetime.</p>
      <h2 className="text-2xl font-bold mb-4 mt-8">Our Team</h2>
      <p className="mb-4 text-[17px] ">Meet our team of travel experts who are dedicated to making your trip planning experience as smooth and enjoyable as possible.</p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>John Doe</strong> - Founder and CEO</li>
        <li><strong>Jane Smith</strong> - Head of Marketing</li>
        <li><strong>Bob Johnson</strong> - Lead Developer</li>
        <li><strong>Sally Brown</strong> - Customer Support Manager</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Our Values</h2>
      <p className="mb-4 text-[17px] ">At our travel site, we believe in:</p>
      <ul className="list-disc list-inside mb-4">
        <li><strong>Quality</strong> - We strive to provide the highest quality travel experiences to our customers.</li>
        <li><strong>Integrity</strong> - We are honest and transparent in all of our dealings with our customers and partners.</li>
        <li><strong>Innovation</strong> - We are constantly looking for new and better ways to serve our customers and improve our platform.</li>
        <li><strong>Community</strong> - We believe in giving back to the communities we visit and making a positive impact on the world.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 mt-8">Our History</h2>
      <p className="mb-4 text-[17px] ">Our travel site was founded in 2010 by John Doe, who had a vision of creating a platform that would make it easy for people to plan and book their dream vacations. Over the years, we've grown into a team of travel experts who are passionate about helping our customers explore the world and create unforgettable memories.</p>
      <h2 className="text-2xl font-bold mb-4 mt-8">Our Partners</h2>
      <p className="mb-4 text-[17px] ">We work with a wide range of partners, including airlines, hotels, tour operators, and activity providers, to bring you the best travel experiences at the best prices. Our partners share our commitment to quality, integrity, and innovation, and we're proud to work with them to create unforgettable travel experiences for our customers.</p>

     

    </div>
      <Footer />
    </>

  )
}

export default About