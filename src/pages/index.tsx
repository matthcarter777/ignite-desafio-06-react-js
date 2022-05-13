import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Information } from '../components/Information'
import { TravelTypes } from '../components/TravelTypes'


const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />
      <Banner />
      <TravelTypes />
      <Information />
    </Flex>
  )
}

export default Home
