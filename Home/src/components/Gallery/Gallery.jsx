// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Gallery.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const Gallery = () => {
  return (
    <section className="g-wrapper">
      <h1
        className="primaryText"
        style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          marginTop: "1.6rem",
        }}
      >
        Gallery
      </h1>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        style={{ marginBottom: "2rem" }}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <img src="large.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="room2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="small.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="ayodhya.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="baranti.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="flower.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="mithonDam.webp" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="room1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="recep.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Gallery;
