import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Box, Button, Divider, HStack, Heading, Text } from '@chakra-ui/react';
import { FcGoogle } from "react-icons/fc";

const Registers = () => {

    const handleGoogle = () => {
        const auth = getAuth();
        const provider = new GoogleAuthProvider();

        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                window.location.href = "/app"
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.customData.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <HStack spacing={10} height={'100vh'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Box>
                <Heading color={'#6D8B74'} as='h1' size='4xl'>Chatify</Heading>
            </Box>
            <Divider orientation='vertical' />
            <Box>
                <Text pt={5} pb={5} fontSize={'20px'} fontWeight={'bold'}>¡Explóralo hoy!</Text>
                <Button leftIcon={<FcGoogle />} variant={'outline'} colorScheme='blue' onClick={handleGoogle}>Ingresa con Google</Button>
            </Box>
        </HStack>
    )
}

export default Registers