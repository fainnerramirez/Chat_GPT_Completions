import { Box, Button, Input, Textarea, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { getResponseQuestion } from '../openai/api';

const ChatCompletion = () => {

    const [response, setResponse] = useState("");
    const [question, setQuestion] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleResponseQuestion = async () => {
        setIsLoading(true);

        let responseApi = await getResponseQuestion(question);

        for await (const chunk of responseApi) {
            const content = chunk.choices[0].delta.content;
            if (content != undefined) {
                const listStyledContent = content.replace(/(\d+\.\s.*?)(?=\d+\.|\Z)/gs, '<li>$1</li>');
                const codeStyledContent = listStyledContent.replace(/```(.+?)```/gs, '<code>$1</code>');
                setResponse(prevResponse => prevResponse + codeStyledContent);
            }
        }

        setIsLoading(false);
    }

    return (
        <Box width={'100wh'} height={'100vh'}>
            <VStack spacing={5}>
                <Box width={'50%'} margin={'auto'}>
                    <Textarea
                        borderRadius={10}
                        rows={20}
                        value={response}
                        placeholder='Aqui estará tu respuesta'
                        size='lg'
                        onChange={(e) => console.log(e.target.value)}
                    />
                </Box>
                <Box width={'50%'} margin={'auto'} >
                    <Input type='text' placeholder='¿Cual es tu pregunta?' onChange={(e) => setQuestion(e.target.value)} />
                    <Button 
                        isLoading={isLoading}
                        loadingText="Generando respuesta..."
                        mt={3} 
                        colorScheme={'blue'} 
                        onClick={handleResponseQuestion}>Enviar pregunta</Button>
                </Box>
            </VStack>
        </Box>
    )
}

export default ChatCompletion