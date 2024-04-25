import React from 'react'
import Navbar from './Navbar'
import Modal from 'react-modal'
import Footer from './Footer'

const Services = () => {
  const hotels = [
    {
      name: 'Rambagh Palace',
      description: 'Luxury hotel with top-notch amenities.',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/07/d5/77/rambagh-palace-exterior.jpg?w=700&h=-1&s=1',
      link: '#hotel1'
    },
    {
      name: 'Leela Palace',
      description: 'Affordable hotel with great location.',
      image: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/287450631.jpg?k=95cd1b3a7994e5d06641517f13223d627857101a21f0a4a91e5c1c9a3a19249b&o=&hp=1',
      link: '#hotel2'
    },
    {
      name: '5 star Hotal',
      description: 'Boutique hotel with unique style.',
      image: 'https://digital.ihg.com/is/image/ihg/holiday-inn-jaipur--rajasthan-5949750165-4x3', link: '#hotel3'
    }
  ]

  const restaurants = [
    {
      name: 'Restaurant 1',
      description: 'Fine dining restaurant with delicious food.',
      image: 'https://assets.cntraveller.in/photos/6352d0370831d51e5aa10707/master/w_1600%2Cc_limit/Image%2520to%2520begin%2520with%2520(%2520Rosado).JPEG', 
      link: '#restaurant1'
    },
    {
      name: 'Restaurant 2',
      description: 'Casual restaurant with a cozy atmosphere.',
      image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/f6/a3/6a/rooftop-ambience.jpg?w=600&h=-1&s=1',
      link: '#restaurant2'
    },
    {
      name: 'Restaurant 3',
      description: 'Restaurant with a view, perfect for special occasions.',
      image: 'https://assets.cntraveller.in/photos/612f033d9fd022fa9f74f1e0/master/w_1600%2Cc_limit/Townsend.jpg',
      link: '#restaurant3'
    }
  ]

  const tour = [
    {
      name: 'Golden Triangle Tour',
      description: 'Explore the historic cities of Delhi, Agra, and Jaipur.',
      image: 'https://www.tajmahalinagra.com/wp-content/uploads/2021/12/golden-triangle-tour-india.jpg',
      link: '#tour1',
      price:"20000"
    },
    {
      name: 'Rajasthan Heritage Tour',
      description: 'Discover the rich cultural heritage of Rajasthan.',
      image: 'https://shrikrishnatravel.com/images/rajasthan-heritage-tour.jpg',
      link: '#tour2',
      price:"22000"
    },
    {
      name: 'Wildlife Safari Tour',
      description: 'Embark on a thrilling wildlife adventure in Rajasthan.',
      image: 'https://www.treebo.com/blog/wp-content/uploads/2018/08/Ranthambore-National-Park.jpg',
      link: '#tour3',
      price:"25000"
    }
  ]

  const taxis = [
    {
      name: 'Taxi 1',
      description: 'Fine dining restaurant with delicious food.',
      image: 'https://www.jaipursightseeingtrip.com/img/carousel/jaipur-sightseeing-taxi.jpg',
      link: '#restaurant1'
    },
    {
      name: 'Taxi 2',
      description: 'Casual restaurant with a cozy atmosphere.',
      image: 'https://taxirentaljaipur.com/images/cab_bg.jpg',
      link: '#restaurant2'
    },
    {
      name: 'Taxi 3',
      description: 'Restaurant with a view, perfect for special occasions.',
      image: 'https://www.jaipursightseeingtrip.com/img/carousel/jaipur-airport.jpg',
      link: '#restaurant3'
    }
  ]

  const [modalIsOpen, setModalIsOpen] = React.useState(false)
  const [selectedHotel, setSelectedHotel] = React.useState(null)

  const openModal = (hotel) => {
    setSelectedHotel(hotel)
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mt-[90px] md:mt-[70px] mb-8">Services</h1>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-4  ">
          <div className="bg-white p-6 col-span-3 rounded shadow">
            <h2 className="text-2xl font-bold  mb-4">Tour Packeges</h2>
            <u className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 text-center' l>
              {tour.map((tour, index) => (
                <li key={index} className="flex flex-col border-2 mb-4">
                  <button className='overflow-hidden' onClick={() => openModal(tour)}>
                    <img src={tour.image} alt={tour.name} className="mx-auto h-[220px] w-full object-cover transition duration-700  hover:scale-110" />
                  </button>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{tour.name}</h3>
                    <p>{tour.description}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">price =  ₹{tour.price}</h3>
                  </div>
                </li>
              ))}
            </u>
          </div>
          <div className="bg-white p-6 col-span-3 rounded shadow">
            <h2 className="text-2xl font-bold  mb-4">Hotel Booking</h2>
            <u className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 text-center'l>
              {hotels.map((hotel, index) => (
                <li key={index} className="flex flex-col border-2 mb-4">
                  <button className='overflow-hidden' onClick={() => openModal(hotel)}>
                    <img src={hotel.image} alt={hotel.name} className="mx-auto h-[220px] w-full object-cover transition duration-700  hover:scale-110" />
                  </button>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                    <p>{hotel.description}</p>
                  </div>
                </li>
              ))}
            </u>
          </div>
          <div className="bg-white p-6 col-span-3 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Taxi Booking</h2>
            <u className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 text-center' l>
              {taxis.map((taxis, index) => (
                <li key={index} className="flex flex-col border-2 mb-4">
                  <button className='overflow-hidden' onClick={() => openModal(taxis)}>
                    <img src={taxis.image} alt={taxis.name} className="mx-auto h-[220px] w-full object-cover transition duration-700  hover:scale-110" />
                  </button>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{taxis.name}</h3>
                    <p>{taxis.description}</p>
                  </div>
                </li>
              ))}
            </u>
          </div>
          <div className="bg-white p-6 col-span-3 rounded shadow">
            <h2 className="text-2xl font-bold mb-4">Restaurant Booking</h2>
            <ul className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5 text-center'>
              {restaurants.map((restaurant, index) => (
                <li key={index} className="border mb-4">
                  <button className='overflow-hidden' onClick={() => openModal(restaurant)}>
                    <img src={restaurant.image} alt={restaurant.name} className="mx-auto h-[220px] w-full object-cover transition duration-700  hover:scale-110" />
                  </button>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                    <p>{restaurant.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel={selectedHotel ? selectedHotel.name : ''}>
        {selectedHotel && (
          <div className='mt-9'>
            <h2 className="text-2xl font-bold mb-4">{selectedHotel.name}</h2>
            <img src={selectedHotel.image} alt={selectedHotel.name} className="w-[70%] h-[270px] object-cover mb-4" />
            <p>{selectedHotel.description}</p>
          </div>
        )}
      </Modal> */}
      <Footer/>
    </div>
  )
}

export default Services