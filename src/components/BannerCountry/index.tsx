import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

export function BannerCountry() {

  return (
    <Box 
      w="100%"
      h="100%"
      backgroundImage="url('/images/london.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <Flex
        h="100%"
        w="100%"
        justify={["center", "flex-start"]}
        paddingTop="20rem"
        paddingLeft="4rem"
        paddingBottom="5rem"
      >
        <Heading fontSize={["4xl", "4xl"]}>Europa</Heading>
      </Flex>
    </Box>
  )
}