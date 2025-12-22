import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const items = [
  {
    id: 1,
    name: "Afsana",
    image: "https://i.ibb.co.com/LzhCYgFX/images-euro.jpg",
    text: "BookCourier made my life easier — books arrive right at my doorstep.",
  },
  {
    id: 2,
    name: "Parvez",
    image:
      "https://i.ibb.co.com/TMRKztGY/417029541-2540453809460511-619514336146760614-n-removebg-preview.png",
    text: "Super fast delivery from the library. I’m very satisfied!",
  },
  {
    id: 3,
    name: "Shima",
    image: "https://i.ibb.co.com/0R4cNW41/cheerful-woman-with-binoculars.jpg",
    text: "Ordering and payment are incredibly smooth and easy.",
  },
  {
    id: 4,
    name: "Nishat",
    image:
      "https://i.ibb.co.com/LdsWDFPr/casual-hair-female-beautiful-street.jpg",
    text: "A perfect platform for book lovers. Highly recommended!",
  },
  {
    id: 5,
    name: "Sabbir",
    image:
      "https://i.ibb.co.com/q3yM5zxj/Whats-App-Image-2024-11-24-at-06-48-29-405d3764.jpg",
    text: "Loved the clean UI and lightning-fast service!",
  },
  {
    id: 6,
    name: "Marissa",
    image:
      "https://i.ibb.co.com/x8qrhrjC/427725259-361283546867809-4276318470941113782-n-removebg-preview.png",
    text: "Book delivery and return process is super smooth.",
  },
  {
    id: 7,
    name: "Tanvir",
    image:
      "https://i.ibb.co.com/ZpHwKV8j/funny-smiling-hipster-handsome-man-guy-stylish-summer-cloth-street-sunglasses.jpg",
    text: "An all-in-one book ordering experience. Very helpful!",
  },
];

const Testimonial = () => {

  return (
    <div className="py-4 p-4 container mx-auto">
      <h2 className="text-2xl text-center font-semibold mb-4">
        What people say
      </h2>

      <Swiper
        loop={true}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        modules={[Autoplay]}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1, 
          },
          480: {
            slidesPerView: 1.2, 
          },
          640: {
            slidesPerView: 2, 
          },
          768: {
            slidesPerView: 2.5, 
          },
          1024: {
            slidesPerView: 3, 
          },
          1280: {
            slidesPerView: 4, 
          },
        }}
      >
        {items.map((item) => (
          <SwiperSlide >
            <div
              key={item.id}
              className="p-4  border rounded bg-white dark:bg-slate-800"
            >
              <p className="text-gray-600 dark:text-gray-300 text-center">
                "{item.text}"
              </p>
              <div className="flex justify-between items-center p-3 ">
                <img
                  className="h-14 w-14 rounded-full"
                  src={item.image}
                  alt=""
                />

                <div className="mt-3 font-bold">{item.name}</div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
