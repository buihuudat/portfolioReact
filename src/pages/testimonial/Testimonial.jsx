import React from 'react';

import { testimonialData } from '../../sources/data';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./Testimonial.css";

import Carousel from 'react-grid-carousel'

// import required modules
import { Grid, Pagination } from "swiper";

export default function Testimonial() {
  
  return (
    <div className="testimonial" id='testimonial'>
      <div className="testimonial__wrap">
        <div className="testimonial__title">Testimonial</div>
        <div className="testimonial__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, molestiae nisi fugit obcaecati repellat quidem rerum, mollitia qui accusamus aspernatur saepe quisquam, officiis ipsum consequuntur officia neque provident laudantium distinctio!
        </div>
        <div className="testimonial__content">
        <Carousel cols={2} rows={1} gap={10} loop={true} autoplay={1000} >
          {testimonialData.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="testimonial__item">
                <div className="testimonial__item-img">
                  <img src={item.img} alt="testimonial" />
                </div>
                <div className="testimonial__item-content">
                  <div className="testimonial__item-name">
                    <div className="testimonial__name">{item.name}</div>
                    <div className="testimonial__item-icon">
                      <i className={item.start}></i>
                      <i className={item.start}></i>
                      <i className={item.start}></i>
                      <i className={item.start}></i>
                      <i className={item.start}></i>
                    </div>
                  </div>
                  <div className="testimonial__sub">{item.sub}</div>
                  <div className="testimonial__item-desc ">{item.desc}</div>
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        </div>
      </div>
    </div>
  )
}
