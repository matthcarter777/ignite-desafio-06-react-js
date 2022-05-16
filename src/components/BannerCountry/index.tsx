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
        h="400px"
        w="100%"
        paddingTop="20rem"
        paddingLeft="7rem"
      >
        <Heading>Europa</Heading>
      </Flex>
    </Box>
  )
}