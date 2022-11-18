import React, { useEffect, useState } from 'react'

import colors from '../../mocks/colors'
import homeImagem from '../../assets/homeImagem.png'
import { Flex, Text, Box, Image } from '@chakra-ui/react'
import Header from '../Header'

export default function Homepage() {
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
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
      }

    return (
        <>
            <Header />
            <Flex minWidth='max-content' alignItems='center' gap='2' marginLeft={16}>
                <Box flexDirection={'column'} alignItems='center'>
                    <Text noOfLines={[1, 2, 3]} fontFamily={'Exo'} fontSize='50px' color={colors.cor4}>
                        Digitalizar,
                    </Text>
                    <Text noOfLines={[1, 2, 3]} fontFamily={'Exo'} fontSize='50px' color={colors.cor4}>
                        Desburocratizar,
                    </Text>
                    <Text noOfLines={[1, 2, 3]} fontFamily={'Exo'} fontSize='50px' color={colors.cor4}>
                        Descentralizar
                    </Text>
                </Box>

                <Image
                    w={windowSize.innerWidth * 0.6}
                    h={windowSize.innerHeight * 0.7}
                    maxW={850}
                    maxh={400}
                    src={homeImagem}
                    alt='Logo'
                    alignSelf='center'
                    paddingBottom={4} />
            </Flex>
        </>
    );
}


