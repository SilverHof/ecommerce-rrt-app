import React from 'react'
import './ProductComments.scss'
import { UilFavorite } from '@iconscout/react-unicons'
import { UilThumbsUp } from '@iconscout/react-unicons'
import { UilThumbsDown } from '@iconscout/react-unicons'

import { Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


export const ProductComments = ({ comments }) => {

   return (
      <div className="product-comments">
         <Swiper
            className="product-comments__swiper"
            freeMode={true}
            grabCursor={true}
            slidesPerView={3.1}
            spaceBetween={20}
            modules={[Navigation]}
            navigation
         >
            {
               comments.map((comment: any, index: number) => (
                  <SwiperSlide>
                     <div className="product-comments__item" key={index}>
                        <div className="product-comments__head">
                           <div className="product-comments__head-left">
                              <h2 className="product-comments__name">
                                 {comment.username}
                              </h2>
                              <span className="product-comments__date">
                                 {comment.date}
                              </span>
                           </div>
                           <div className="product-comments__head-right">
                              <UilFavorite className="product-comments__review-icon" />
                              <span className="product-comments__review-text">
                                 {comment.mark}
                              </span>
                           </div>
                        </div>
                        <div className="product-comments__content">
                           <div className="product-comments__content-box">
                              <h2 className="product-comments__content-box-title">
                                 Pros
                              </h2>
                              <p className="product-comments__content-box-text">
                                 {comment.pros}
                              </p>
                           </div>
                           <div className="product-comments__content-box">
                              <h2 className="product-comments__content-box-title">
                                 Cons
                              </h2>
                              <p className="product-comments__content-box-text">
                                 {comment.cons}
                              </p>
                           </div>
                           <div className="product-comments__content-box">
                              <h2 className="product-comments__content-box-title">
                                 Experience
                              </h2>
                              <p className="product-comments__content-box-text">
                                 {comment.experience}
                              </p>
                              </div>
                           <div className="product-comments__marks">
                              <button className="product-comments__mark-like">
                                 <UilThumbsUp className="product-comments__mark-like-icon" />
                                 <span className="product-comments__mark-like-text">{comment.count_of_likes}</span>
                              </button>
                              <button className="product-comments__mark-dislike">
                                 <UilThumbsDown className="product-comments__mark-dislike-icon" />
                                 <span className="product-comments__mark-dislike-text">{comment.count_of_dislikes}</span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </SwiperSlide>
               ))
            }
         </Swiper>
      </div>
   )
}
