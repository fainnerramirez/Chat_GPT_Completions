import React from 'react'
import ChatCompletion from '../components/ChatCompletion'
import { Box, Text } from '@chakra-ui/react'

const Home = () => {
    return (
        <Box>
            <Text
                mt={20}
                textAlign={'center'}
                bgGradient='linear(to-l, #7928CA, #FF0080)'
                bgClip='text'
                fontSize='6xl'
                fontWeight='extrabold'
            >
                Bienvenido a Chat-Fainner
            </Text>
            <ChatCompletion />
        </Box>
    )
}

export default Home