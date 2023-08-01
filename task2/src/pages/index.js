import React from "react";
import { Poppins } from 'next/font/google';
import Header from "@/Components/Header/Header";
import ClientsCarousel from "@/Components/Carousel/ClientsCarousel";
import Testimonial from "@/Components/Carousel/Testimonial";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin']
})

const services = [
  {
    img: 's1',
    title: 'Visibility',
    content: 'Your house will appear as a ‘featured listing’ on the home page, ensuring your house gets the maximum visibility'
  },
  {
    img: 's2',
    title: 'Real Local Agents',
    content: 'You are backed by a team of Real estate agents who know the market in and out. With their market insights, experience and sound data, your home will sell in no time.'
  },
  {
    img: 's3',
    title: 'Email & Notification',
    content: 'Users get instant notifications about new listings, price hikes, price drops, and neighborhood alerts. We get your property shown to people who are actively looking and'
  },
  {
    img: 's4',
    title: 'Professional photos',
    content: 'With professional staging and photos, we make your house  reach the best of its abilities and show it off because looks are what sell.'
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <div className={`relative h-[450px] md:h-[400px] lg:h-screen overflow-hidden banner ${poppins.className}`}>
        <div className="banner-inner absolute top-0 left-0 w-full h-full">
          <div className="md:w-2/4 mx-auto text-center mt-8 md:mt-4 lg:mt-[10%] px-2 md:px-0">
            <h2 className="md:text-2xl lg:text-3xl font-semibold">Thinking of selling your home?</h2>
            <p className="my-2 lg:my-4 text-[12px] lg:text-sm font-medium text-gray-800">Get an instant estimate of your home’s value. You can quickly determine the estimated value of <br className="hidden lg:block" /> your home by answering a few quick questions.</p>
            <input type="text" className="bg-white border-2 border-primary text-gray-900 text-sm rounded-md block p-2 w-[80%] mx-auto" placeholder="Enter your address..." required />
            <button className="bg-primary text-white p-2 rounded-full mt-4 px-5">Get Free Estimate</button>
          </div>
        </div>
      </div>

      <div className="bg-[#F4F8FC] py-10 text-center">
        <h2 className="mb-5 text-lg font-bold">Featured on</h2>
        <ClientsCarousel />
      </div>

      <div className="py-16 max-w-screen-xl mx-auto grid md:grid-cols-2 px-3 lg:px-0 lg:grid-cols-4 gap-7 lg:gap-5 text-center">
        {
          services.map((service, index) => {
            return (
              <div key={service.title + index}>
                <img src={`/services/${service.img}.png`} alt="service image" className="h-[200px] w-auto mx-auto mb-4" />
                <h2 className="font-bold mb-2">{service.title}</h2>
                <p className="text-[13px] text-gray-500 font-medium">{service.content}</p>
              </div>
            )
          })
        }
      </div>

      <div className="bg-[#ECF4FA] py-10 text-center pb-20">
        <h2 className="mb-1 text-lg font-bold">The Canadian Home</h2>
        <p className="text-[15px] text-gray-500 font-medium mb-8">What customers say about the The Canadian Home experience</p>
        <Testimonial />
      </div>
      <h5 className="text-center bg-[#F3F8FC] text-gray-600 py-2">Copyright © 2023 The Canadian Home Realty Inc.</h5>
    </>
  )
}
