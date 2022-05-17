import { Box, Heading, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box 
      w="100%"
      h="80"
      backgroundImage="url('/images/Background.png')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
    >
      <SimpleGrid columns={2} minChildWidth="320px">
        <Box
          p={["10" , "20"]}
          justifyContent="center"
        >
          <Heading fontSize={["2xl","4xl"]} fontWeight="md">
            5 Continentes, <br/> infinitas possibilidades.
          </Heading>
          <Text 
            mt="4"
            fontSize={["1rem", "1.2rem"]}
          >
            Chegou a hora de tirar do papel a viagem que voce sempre sonhou.</Text>
        </Box>
        { isWideVersion && (
          <Box
            mt="20"
            display="flex"
            justifyContent="center"
          >
            <Image src="/images/Airplane.png" alt="Airplene"/> 
          </Box>
        ) }
      </SimpleGrid>
    </Box>
  )
}