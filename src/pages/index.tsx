import { Flex } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Header } from '../components/Header'


const Home: NextPage = () => {
  return (
    <Flex
      direction="column"
      h="100vh"
    >
      <Header />
    </Flex>
  )
}

export default Home
