import React from "react";
// import FooterLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
// import NatureVid from "../../assets/video/footer.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Gallery",
    link: "/best-places",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <>
      <div className=" dark:bg-gray-950 py-6 relative overflow-hidden">
 
        <img src="https://travelfuntoosh.com/Content/Images/banner.jpg" className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]" alt="" />  
        <div className="container mx-auto px-3 md:px-0 ">
          <div className="grid md:grid-cols-3 pt-3 py-5 rounded-t-xl bg-white/80 backdrop-blur-sm ">
            <div className="py-8 px-4">
              <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left">
                {/* <img src="" alt="" className="max-h-[60px]" /> */}
                {/* TravelloGo */}
              </h1>
              <p className="text-sm font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                facere ab hic accusamus omnis dolor voluptatibus illo, tempore
                eum tenetur.
              </p>
              <br />
              <div className="flex items-center text-xl gap-3 ">
                <FaLocationArrow />
                <p>Jaipur,Rajasthan</p>
              </div>
              <div className="flex items-center text-xl gap-3 mt-3">
                <FaMobileAlt />
                <p>+91 123456789</p>
              </div>
              {/* social handles */}
              <div>
                <div className="flex items-center gap-3 mt-6">
                  <a href="#">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 text-xl hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 text-xl hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold text-justify sm:text-left mb-3">
                    Important Links
                  </h1>
                  <ul className="flex flex-col gap-3">
                    {FooterLinks.map((link) => (
                      <li className="cursor-pointer hover:translate-x-1 duration-300 text-xl hover:!text-primary space-x-1 text-gray-700 dark:text-gray-200">
                        <Link
                          to={link.link}
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          <span>&#11162;</span>
                          <span>{link.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center py-5 bg-[rgb(46,113,119)] border-t-2 border-gray-300/50 bg-primary text-xl text-white z-[9999] ">
              @copyright 2024 All rights reserved || Made with ❤️ by Ashok
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;