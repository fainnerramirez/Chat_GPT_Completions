import { Box, Button, Input, Textarea, VStack, Text, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BiSolidDownload } from "react-icons/bi";
import { getResponseQuestion } from '../openai/api';
import ChatToPDF from './TextToPDF.js';
import { CreatePdf } from './TextToPDF.js';
import { MdStarBorder } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const ChatCompletion = () => {

    const [response, setResponse] = useState("");
    const [question, setQuestion] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleResponseQuestion = async () => {
        setIsLoading(true);

        let responseApi = await getResponseQuestion(question);

        for await (const chunk of responseApi) {

            if (chunk.choices[0].finish_reason === 'stop') {
                setIsLoading(false);
                setQuestion(null);
                return;
            }
            const content = chunk.choices[0].delta.content;
            const listStyledContent = content.replace(/(\d+\.\s.*?)(?=\d+\.|\Z)/gs, '<li>$1</li>');
            const codeStyledContent = listStyledContent.replace(/```(.+?)```/gs, '<code>$1</code>');
            setResponse(prevResponse => prevResponse + codeStyledContent);
        }
    }

    const handleChatToPDF = () => {
        response != "" && CreatePdf(response);
    }

    return (
        <Box height={'100vh'}>
            <VStack spacing={5} >
                <HStack spacing={5} flexDir={{base: 'column', md: 'column'}}>
                    <Button rightIcon={<BiSolidDownload />} colorScheme='blue' onClick={handleChatToPDF}>Descargar como PDF</Button>
                    <Button as="a" href='https://github.com/fainnerramirez/Chat_GPT_Completions' target='_blank' leftIcon={<FaGithub />} rightIcon={<MdStarBorder />}>Estrellas en Github</Button>
                </HStack>
                <Box width={{base: '95%', lg: '50%'}} margin={'auto'}>
                    <Textarea
                        fontWeight={'bold'}
                        bg={'#D0C9C0'}
                        color={'#5F7161'}
                        borderRadius={10}
                        rows={20}
                        value={response}
                        placeholder='👉 Fainner Ramirez estuvo aquí 👈'
                        _placeholder={{ opacity: 1, color: 'green.500', textAlign: 'center' }}
                        place
                        size='lg'
                        onChange={(e) => console.log(e.target.value)}
                    />
                </Box>
                <Box width={'50%'} margin={'auto'} >
                    <Input
                        type='text'
                        variant='outline'
                        color={'#FFFFFF'}
                        bg={'#6D8B74'}
                        placeholder='¿Cuál es tu pregunta?'
                        onChange={(e) => setQuestion(e.target.value)}
                        _placeholder={{ opacity: 0.5, color: 'white' }} />
                    <Button
                        bg={'#5F7161'}
                        isLoading={isLoading}
                        loadingText="Generando respuesta..."
                        mt={3}
                        colorScheme={'green'}
                        onClick={handleResponseQuestion}>Enviar pregunta</Button>
                </Box>
            </VStack>
        </Box>
    )
}

export default ChatCompletion