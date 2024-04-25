import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md'
// import contactImage from '../images/contact.jpg'

const Contact = () => {
  return (
    <div className="">
      <Navbar />

      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
        <h1 className="text-3xl font-bold text-center mb-5 mt-[70px] md:mt-[40px] ">Contact Us</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/2 cursor-pointer p-4">
            <img src="https://www.researchgate.net/profile/P-Jops/publication/324715366/figure/fig3/AS:618748771835906@1524532611545/Map-of-Delhi-reproduced-from-Google-Maps-12.png" alt="Contact" className="w-full h-64 object-cover mb-4" />
            <h4 className="text-lg font-bold mb-3">
              <MdLocationOn className="mr-2" />
              Our Address
            </h4>
            <p className="text-gray-600">
              123 Main St.<br />
              Jaipur,Rajasthan
            </p>
            <h4 className="text-lg font-bold mb-3">
              <MdPhone className="mr-2" />
              Phone Number
            </h4>
            <p className="text-gray-600">(123) 456-7890</p>
            <h4 className="text-lg font-bold mb-3">
              <MdEmail className="mr-2" />
              Email Address
            </h4>
            <p className="text-gray-600">info@travel-site.com</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/2 p-4">
            <h4 className="text-lg font-bold mb-3">Send Us a Message</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                  Name
                </label>
                <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                  Email
                </label>
                <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5"></textarea>
              </div>
              <button type="submit" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Contact