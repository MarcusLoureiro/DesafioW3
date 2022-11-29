import React, { useEffect, useState } from 'react'

//Assets

import homeImagem from '../../../assets/homeImagem.png'
import bg from '../../../assets/triangulos2.svg'


//Libs
import { Flex, Text, Box, Image, Spacer,} from '@chakra-ui/react'
import Typewriter from "typewriter-effect";

//mocks
import colors from '../../../mocks/colors'
import textos from '../../../mocks/textos';



export default function BoasVindas() {

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
        <Flex bgRepeat={'no-repeat'} bgImage={`url(${bg})`} flex={1} w={'100%'} marginRight={5} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
            <Box p='4' textAlign={'center'} marginLeft={windowSize.innerWidth * 0.1}>
                <Text fontFamily={'Exo'} fontSize='30px' color={colors.cor10} fontWeight={'bold'}>
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`${textos.labelBemVindo}`)
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString(`${textos.nomeBanco}`)
                                .pauseFor(1000)
                                .start();
                        }}
                    />
                </Text>
                <Text fontFamily={'Exo'} fontSize='30px' color={colors.cor1} textAlign={'center'} >
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(`\n${textos.labelDigitalizar},\n`)
                                .typeString(`\n${textos.labelDesburocratizar},\n`)
                                .typeString(`\n${textos.labelDescentralizar}`)
                                .start();
                        }}
                    />
                </Text>
            </Box>
            <Spacer />
            <Box p='4' marginRight={windowSize.innerWidth * 0.1}>
                <Image
                    w={windowSize.innerWidth * 0.6}
                    h={windowSize.innerHeight * 0.7}
                    maxW={850}
                    maxh={400}
                    src={homeImagem}
                    alt='Logo'
                    alignSelf='center'
                    paddingBottom={4} />
            </Box>
        </Flex>


    );
}


