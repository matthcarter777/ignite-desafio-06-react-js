import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { BannerCountry } from "../../components/BannerCountry";
import { Bio } from "../../components/Bio";
import { CountryCard } from "../../components/Country";
import { Header } from "../../components/Header";

export default function Country() {
  const contryData = {
    data: [
      {image: "/images/clondon.png", city: "Londres", country: "Reino Unido", flag:"/images/flagru.png" },
      {image: "/images/paris.png", city: "Paris", country: "França", flag:"/images/flagfrance.png" },
      {image: "/images/rome.png", city: "Roma", country: "Itália", flag:"/images/flagitali.png" },
      {image: "/images/rome.png", city: "Roma", country: "Itália", flag:"/images/flagitali.png" },
      {image: "/images/rome.png", city: "Roma", country: "Itália", flag:"/images/flagitali.png" },
    ]
  }

  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />
      <BannerCountry />
      <Bio />

      <Flex
        direction="column"
        w="100%"
        paddingRight={["3", "7.5rem"]}
        paddingLeft={["3", "7.5rem"]}
        paddingBottom="4rem"
        gap="2rem"
        align={["center", "normal"]}
      >
        <Heading color="gray.600">Cidades + 100</Heading>
        <SimpleGrid columns={4} spacing={4} minChildWidth="320px">
          { contryData.data.map(data => (
            <CountryCard key={data.country} data={data}/>
          ))}
        </SimpleGrid>
      </Flex>

    </Flex>
  )
}