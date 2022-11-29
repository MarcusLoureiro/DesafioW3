import React, { useEffect, useState } from 'react'


import colors from '../../../mocks/colors'


import { Flex, Text, Box } from '@chakra-ui/react'





export default function DestaqueTitulo({titulo}) {

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
                <Flex flex={1} w={'100%'} marginRight={5} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'center'}>
                    <Box
                        alignSelf={'flex-start'}
                        marginLeft={windowSize.innerWidth * 0.1}
                        marginTop={windowSize.innerHeight * 0.05}
                        marginBottom={windowSize.innerHeight * 0.05}>
                        <Text
                            fontFamily={'Exo'}
                            fontWeight={'bold'}
                            fontSize='30px'
                            color={colors.cor12}
                        >
                            {titulo}
                        </Text>
                        <Box
                            maxWidth={100}
                            borderBottom={'4px'}
                            borderBottomColor={colors.cor12}
                            marginTop={'16px'} />
                    </Box>
                </Flex>

                
    );
}


