import { Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CountryCardProps {
  data: {
    image: string;
    city: string;
    country: string;
    flag: string;
  }
} 


export function CountryCard({ data }: CountryCardProps) {

  return (
    <Flex
      direction="column"
      border="1px solid"
      borderColor="#FFBA08"
      borderRadius="5px"
    >
      <Flex>
        <Image src={data.image} alt={data.city}/>
      </Flex>
      <Flex
        p="4"
        gap="4"
        align="center"
        justifyContent="space-between"
        bg="##FFBA0880"
      >

        <Flex
          direction="column"
        >
          <Heading fontSize="2xl" color="gray.600">{data.city}</Heading>
          <Text color="gray.400">{data.country}</Text>
        </Flex>

        <Image h="10" src={data.flag} alt={data.country}/>
      </Flex>
    </Flex>
  )
}