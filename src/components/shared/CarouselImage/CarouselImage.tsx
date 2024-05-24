'use client'

import Image from "next/image";
import { Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./CarouselImage.module.sass";
import COLOMBIA_BLUR from "app/images/BlurImages";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface CarouselImagesProps {
  images: ImageType[]
}

export const CarouselImage = ({images}: CarouselImagesProps) => {
    
  return(    
    <Swiper key="random1" className={styles.Carousel}
    modules={[Pagination, Autoplay]}
    spaceBetween={10}
    slidesPerView={1}
    autoplay = {true}
    pagination={{ clickable: true }}
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            key={index}
            src={image?.url ?? "/images/NotFoundImage.jpg"}
            alt={image?.alt ?? ""}
            fill
            quality={100}
            placeholder='blur'
            loading="lazy"
            blurDataURL={COLOMBIA_BLUR}
            sizes="(max-width: 300px) 100vw, (max-width: 500px) 50vw, 33vw"
          />
          <div className={styles.Carousel__desc}>
            <p>{image.name}</p>
          </div>                    
        </SwiperSlide>        
      ))}
    </Swiper>
  );
}