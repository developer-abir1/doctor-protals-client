import React from 'react';
import photo from '../../assets/image/Mask Group 7@2x 1 (1).png';
import image from '../../assets/image/people.png';
import peop from '../../assets/image/doctor-small 1.png';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonial = () => {
  return (
    <div className=" container  m-auto">
      <div className=" flex justify-between">
        <div>
          <h2 className=" text-secondary    font-bold">Testimonial</h2>
          <h2 className="text-4xl  text-accent ">What Our Patients Says</h2>
        </div>

        <div className=" flex justify-end ">
          <img src={photo} alt="" className="w-32" />
        </div>
      </div>

      <div className="py-4 px-5 ">
        <Swiper
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 1,
            },
            1024: {
              width: 1024,
              slidesPerView: 2,
            },
            1440: {
              width: 1440,
              slidesPerView: 3,
            },
          }}
        >
          {testimonialData.map((data) => (
            <SwiperSlide>
              <div className="card w-96  bg-base-100  border">
                <div className="card-body">
                  <p className="  text-justify text-xs">{data.description}</p>
                </div>
                <div className="flex   space-x-4  items-center mb-4 ml-4 ">
                  <div>
                    <img
                      src={data.img}
                      alt={data.name}
                      className=" rounded-full     ml-2 border-2  border-primary   w-12"
                    />
                  </div>
                  <div className="">
                    <h2 className=" text-xl font-semibold text-accent  ">
                      {data.name}
                    </h2>
                    <h2 className=" text-secondary">{data.country}</h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;

const testimonialData = [
  {
    id: 5,
    name: 'Winson Herry',
    country: 'California',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est voluptatibus sequi repellendus, enim sit saepe porro, labore beatae unde ipsum in ducimus voluptatem incidunt nesciunt veritatis consequatur, numquam optio molestiae!',
    img: peop,
  },
  {
    id: 67,
    name: 'Winson Herry',
    country: 'California',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est voluptatibus sequi repellendus, enim sit saepe porro, labore beatae unde ipsum in ducimus voluptatem incidunt nesciunt veritatis consequatur, numquam optio molestiae!',
    img: peop,
  },
  {
    id: 69,
    name: 'Winson Herry',
    country: 'California',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est voluptatibus sequi repellendus, enim sit saepe porro, labore beatae unde ipsum in ducimus voluptatem incidunt nesciunt veritatis consequatur, numquam optio molestiae!',
    img: peop,
  },
  {
    id: 69,
    name: 'Winson Herry',
    country: 'California',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est voluptatibus sequi repellendus, enim sit saepe porro, labore beatae unde ipsum in ducimus voluptatem incidunt nesciunt veritatis consequatur, numquam optio molestiae!',
    img: image,
  },
  {
    id: 69,
    name: 'Winson Herry',
    country: 'California',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est voluptatibus sequi repellendus, enim sit saepe porro, labore beatae unde ipsum in ducimus voluptatem incidunt nesciunt veritatis consequatur, numquam optio molestiae!',
    img: image,
  },
  {
    id: 69,
    name: 'Winson Herry',
    country: 'California',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est voluptatibus sequi repellendus, enim sit saepe porro, labore beatae unde ipsum in ducimus voluptatem incidunt nesciunt veritatis consequatur, numquam optio molestiae!',
    img: image,
  },
];
