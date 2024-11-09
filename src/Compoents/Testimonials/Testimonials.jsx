import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/parallax';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useReviews from '../../hook/useReviews';

const Testimonials = () => {
  const { data: reviews, isLoading, isError } = useReviews();
  
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return <div>Error loading reviews</div>;
  }
  
  // Sort reviews by reviewTime in descending order
  const sortedReviews = reviews.sort((a, b) => new Date(b.reviewTime) - new Date(a.reviewTime));

  console.log(reviews)

  return (
    <>
      <div>
        <h1 className='text-4xl font-extrabold font-sans text-center my-10'>User Reviews</h1>
      </div>
      <div className="relative w-full h-full p-y-10">
        <Swiper
          modules={[Parallax, Pagination, Navigation]}
          spaceBetween={30}
          centeredSlides={true}
          parallax={true}
          navigation={true}
        >
          <div
            slot="container-start"
            className="parallax-bg absolute top-0 left-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/)' }}
            data-swiper-parallax="-23%"
          >

          </div>
          {sortedReviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center h-full p-6 back rounded-lg my-4" style={{ boxShadow: '0 1px 8px rgba(0, 0, 0, 0.5)' }}>


                <p
                  className="text-2xl pb-3"
                  data-swiper-parallax="-200"
                >
                  {review.title}

                </p>

                <div className="flex items-center mb-4">
                  <img
                    src={review.photo}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4"
                    data-swiper-parallax="-400"
                  />
                  <div>
                    <h3
                      className="text-lg font-semibold"
                      data-swiper-parallax="-200"
                    >
                      {review.name}
                    </h3>

                  </div>

                </div>

                <div
                  className="mb-4 text-gray-700"
                  data-swiper-parallax="-400"
                  data-swiper-parallax-duration="900"
                >
                  <p>{review.review}</p>
                </div>
                <div
                  className="opacity-50 transform scale-95"
                  data-swiper-parallax-opacity="0.5"
                  data-swiper-parallax-scale="0.15"
                >
                  <p className="text-sm text-gray-600">{new Date(review.reviewTime).toLocaleDateString()}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
