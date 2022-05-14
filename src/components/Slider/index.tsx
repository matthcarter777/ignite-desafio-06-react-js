import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function Slider() {
  return (
    <Flex
      p="20"
    >
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <Box 
            w="100%"
            h="80"
            backgroundImage="url('/images/europe.png')"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
          >
            <Flex
              w="100%"
              h="100%"
              direction="column"
              justifyContent="center"
              align="center"
              gap="4"
            >
              <Heading fontSize="4xl">Europa</Heading>
              <Text fontWeight="bold" fontSize="1.2rem">O continente mais antigo.</Text>
            </Flex>
          </Box>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Flex>
  )
}