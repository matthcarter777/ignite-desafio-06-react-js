import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";

export function Banner() {

  return (
    <Box 
      w="100%"
      h="80"
      backgroundImage="url('/images/Background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <SimpleGrid columns={2}>
        <Box
          p="20"
          justifyContent="center"
        >
          <Heading fontSize="4xl" fontWeight="md">
            5 Continentes, <br/> infinitas possibilidades.
          </Heading>
          <Text 
            mt="4"
            fontSize="1.2rem"
          >
            Chegou a hora de tirar do papel a viagem que voce sempre sonhou.</Text>
        </Box>
        <Box
          mt="20"
          display="flex"
          justifyContent="center"
        >
          <Image src="/images/Airplane.png" />
        </Box>
      </SimpleGrid>
    </Box>
  )
}