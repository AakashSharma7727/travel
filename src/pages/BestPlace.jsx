import React from 'react'
import Navbar from './Navbar'
import Places from './Places'
import Footer from './Footer'
import PlaceCard from './PlaceCard';

const PlacesData = [
  {
    img: "https://www.shopkhoj.com/wp-content/uploads/2018/07/World-Trade-Park.jpg",
    title: "World Trade Park",
    location: "Malviya Nagar",
    description: "A WTP encompasses everything from a raw water pump house to a DM storage tank, and the location of the pretreatment plants is far from the DM plant control room, where normally the main PLC and operator station are placed for control and operation.",
    
  },
  {
    img: "https://i.pinimg.com/originals/55/0b/88/550b88b3948685b5e7dfdd3a10dcd0ce.jpg",
    title: "Galta Ji",
    location: "Jaipur",
    description:
      "The temple is known for its natural springs, the water from which accumulates in tanks (kunds). There are seven tanks, the holiest being the Galta Kund, which never goes dry. It is considered auspicious to bathe in the waters of Galtaji, especially on Makar Sankranti, and thousands come to bathe every yea",
    
  },
  {
    img: "https://www.shikhar.com/blog/wp-content/uploads/2019/05/jal-mahal-Jaipur.jpg",
    title: "Jal Mahal",
    location: "Jaipur",
    description:
      "Jal Mahal is built in red sandstone and is a 5-storied building out of which four floors remain under the water. Only the top floor is visible when the lake is full. The palace is spread across a huge surface area of 300 acres and has a maximum depth of",
    
  },
  {
    img: "https://cdn.wallpapersafari.com/39/95/yzehYS.jpg",
    title: "JaiGarh Fort",
    location: "Jaipur",
    description: "The Jaigarh Fort is the most imposing and spectacular fort that overlooks Jaipur. It is famous for the Jaivana canon, considered the largest canon in the world. ",

  },
  {
    img: "https://w0.peakpx.com/wallpaper/159/511/HD-wallpaper-amber-fort-jaipur-bing-amer-fort.jpg",
    title: "Amber Fort",
    location: "Jaipur",
    description:
      "One of the top tourist attractions of Jaipur, the huge Amer Palace Fort sits atop a small hill, and is located at a distance about 11 km from the main city. The magnificent Amer Fort is an extensive palace complex that has been built with pale yellow and pink sandstone, and with white marble.",
  
  },
  {
    img: "https://t4.ftcdn.net/jpg/01/86/03/91/360_F_186039131_DtzFlukfaDy0Fdsgq6HzJwGGJ1II5Ls9.jpg",
    title: "City Palace",
    location: "Jaipur",
    description:
      "Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruli",
    
  },
  {
    img: "https://indiathrills.com/wp-content/uploads/2020/07/Jawhar-Circle-in-Jaipur-.jpg",
    title: "Patrika Gate",
    location: "Jaipur",
    description:
      "Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruli",

  },
  {
    img: "https://static2.tripoto.com/media/filter/tst/img/794126/TripDocument/1536222899_1536222896173.jpg",
    title: "Vidhan Sabha",
    location: "Jaipur",
    description:
      "Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruli",

  },
  {
    img: "https://www.thepinkcityholidays.com/wp-content/uploads/2021/06/alberthallnight.jpg",
    title: "Albert Hall",
    location: "Jaipur",
    description:
      "Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruli",

  },
  {
    img: "https://www.tourism.rajasthan.gov.in/content/dam/rajasthan-tourism/english/city/explore/103.jpg",
    title: "Gangoury Bazar",
    location: "Jaipur",
    description:
      "Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruli",

  },
  {
    img: "https://c0.wallpaperflare.com/preview/297/636/951/ancient-architectural-architectural-design-architecture.jpg",
    title: "Hawa Mahal",
    location: "Jaipur",
    description:
      "Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruli",

  },
  {
    img: "https://www.andbeyond.com/wp-content/uploads/sites/5/jamtar-mantar-jaipur.jpg",
    title: "Jantar Mantar",
    location: "Jaipur",
    description:
      "Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruli",

  },
  {
    img: "https://static.toiimg.com/photo/39669197.cms",
    title: "Birla Mandhir",
    location: "Jaipur",
    description:
      "Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruli",

  },
  {
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/10/e3/0f/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
    title: "Mothi suns",
    location: "Jaipur",
    description:
      "Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruli",

  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Nahargarh_fort_jaipur.jpg",
    title: "Nahargarh Fort",
    location: "Jaipur",
    description:
      "Located deep within the walled city, the City Palace Complex was conceived and built by Maharaja Sawai Jai Singh II, the founder of Jaipur. A beautiful fusion of Mughal and Rajput architecture, the palace is still home to the last ruli",

  },
];

const BestPlace = ({ handleOrderPopup }) => {
  return (
    <div>
      <Navbar />
      <div className="dark:bg-gray-900 dark:text-white mt-6 bg-gray-50 py-3">
        <section data-aos="fade-up" className="container mx-auto  px-3">
          <h1 className=" my-8 border-l-8 border-primary/50 md:mt-[30px] mt-[60px] py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  )
}

export default BestPlace
