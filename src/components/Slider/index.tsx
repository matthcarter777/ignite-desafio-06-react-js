import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SliderData {
  name: string;
  image: string;
  description: string; 
}

interface SliderProps {
  data: SliderData[];
}

export function Slider({ data }: SliderProps) {
  return (
    <Flex
      p={["0", "20"]}
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
        { data.map(country => (
          <SwiperSlide key={country.name}>
              <Box 
                w="100%"
                h="80"
                backgroundImage={`url(${country.image})`}
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
                  <Heading fontSize="4xl">{ country.name }</Heading>
                  <Text fontWeight="bold" fontSize="1.2rem">{ country.description }</Text>
                </Flex>
              </Box>
            </SwiperSlide>
        )) }
      </Swiper>
    </Flex>
  )
}