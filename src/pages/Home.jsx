import React from 'react'
import ChatCompletion from '../components/ChatCompletion'
import { Box, Text } from '@chakra-ui/react'

const Home = () => {
    return (
        <Box bg={'#EFEAD8'}>
            <Text
                p={10}
                textAlign={'center'}
                fontSize='6xl'
                fontWeight='extrabold'
                color={'#6D8B74'}
            >
                Bienvenido a ChatFay
            </Text>
            <ChatCompletion />
        </Box>
    )
}

export default Home