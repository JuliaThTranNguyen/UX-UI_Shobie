"use client"
import React from 'react'
import Slider from 'react-slick'
import { SLIDE_IMAGES } from '@/constants'
import Slide from './Slide'

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover:false,
  }
  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
          {
            SLIDE_IMAGES.map((item) => (
              <Slide 
                key = {item.id}
                img = {item.img}
                title = {item.title}
                mainTitle= {item.mainTitle}
                price={item.price}
              />
            ))}
        </Slider>
      </div>
    </div>
  )
}
