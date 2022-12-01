import React, { useEffect, useState } from 'react'
import colors from '../../../mocks/colors'
import { Flex, Text, Box, Button } from '@chakra-ui/react'
import textos from '../../../mocks/textos';
import { useNavigate } from 'react-router-dom';





export default function DestaqueSecao() {

    let navigate = useNavigate()
    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    return (
        <Flex flex={1}
            w={'100%'}
            maxWidth={'100%'}
            bg={colors.cor10}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            paddingRight={windowSize.innerWidth * 0.05}
            paddingLeft={windowSize.innerWidth * 0.05}
            paddingTop={windowSize.innerHeight * 0.025}
            paddingBottom={windowSize.innerHeight * 0.025}
            flexWrap='wrap'>
            <Box
                w={'100%'}
                justifyContent={'center'}>
                <Text
                    w={'100%'}
                    h={'100%'}
                    fontFamily={'Exo'}
                    fontWeight={'bold'}
                    fontSize='25px'
                    color={'white'}
                    textAlign={'center'}
                    paddingBottom={5}

                >
                    {textos.tituloCliente01}
                    <br></br>
                    {textos.tituloCliente02}
                </Text>

            </Box>
            <Button
                fontFamily='Exo'
                color={'black'}
                backgroundColor={colors.cor13}
                _hover={{ backgroundColor: colors.cor12, color: 'white' }}
                onClick={()=>{navigate('cadastro')}}
            >{textos.labelCriarConta}
            </Button>
        </Flex>


    );
}


