import React from 'react'
import ChatCompletion from '../components/ChatCompletion'
import { Box, Text } from '@chakra-ui/react'

const Home = () => {
    return (
        <Box bg={'#EFEAD8'}>
            <Text
                p={{base: 5, lg: 10}}
                textAlign={'center'}
                fontSize={{base: '3xl', lg: '6xl'}}
                fontWeight='extrabold'
                color={'#6D8B74'}
            >
                Bienvenido a ChatiFy
            </Text>
            <ChatCompletion />
        </Box>
    )
}

export default Home