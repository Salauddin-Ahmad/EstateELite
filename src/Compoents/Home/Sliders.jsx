import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const Sliders = () => {
  <div>
  <h1 className="text-2xl"> Discover and buy Real Estate Properties</h1>
 </div>
  return (
    <div className="mb-5 mt-[2px]">
 
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 4000 }}
        loop={true}
        loopAdditionalSlides={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/d4Fg3pN/premium-photo-1677782975062-56111703e90e.jpg"
            alt=""
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "20px",
              borderRadius: "5px"
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/89ycR4q/dillon-kydd-pvdx8c6-Y5-BY-unsplash.jpg"
            alt=""
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "20px",
              borderRadius: "5px"
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co.com/yqfxvfc/luca-micheli-Rpv-C77-ex-G0-unsplash.jpg"
            alt=""
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "20px",
              borderRadius: "5px"
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/CxhGGkW5/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg"
            alt=""
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "20px",
              borderRadius: "2px"
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/hjdTDr7y/ronnie-george-9g-Gv-NWBe-Oq4-unsplash.jpg"
            alt=""
            style={{
              width: "100%",
              height: "95vh",
              marginTop: "20px",
              borderRadius: "2px"
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliders;
