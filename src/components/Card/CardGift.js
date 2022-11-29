import React, { useEffect, useState } from 'react'
import { Image, Heading, Text, Button } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import colors from '../../mocks/colors';


export default function CardGift({title, description, imagem}) {
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
        <>
                <Card margin={5} w={windowSize.innerWidth*0.2} maxH={windowSize.innerHeight*0.5} alignItems={'center'} justifyContent={'center'}>
                    <CardBody alignItems={'center'}>
                        <Image w={'auto'} h={windowSize.innerHeight*0.1} src={imagem}/>
                    </CardBody>
                    <CardFooter flexDirection={'column'}>
                        <Text textAlign={'flex-start'} paddingBottom={5}>{description}</Text>
                        <Button color={'white'} bgColor={colors.cor10}>Comprar</Button>
                    </CardFooter>
                </Card>
          
        </>





    );
}


