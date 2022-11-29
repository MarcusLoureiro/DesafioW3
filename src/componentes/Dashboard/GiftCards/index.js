import React, { useEffect, useState } from 'react'
import { Flex, Heading, Text, Button, Image } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import colors from '../../../mocks/colors';
import CardGift from '../../../components/Card/CardGift';

import xbox from '../../../assets/giftCards/xbox.png'
import habomax from '../../../assets/giftCards/hbomax.png'
import netflix from '../../../assets/giftCards/netflix.png'
import disney from '../../../assets/giftCards/disneyplus.png'
import uber from '../../../assets/giftCards/uber.png'
import ifood from '../../../assets/giftCards/ifood.png'
import lol from '../../../assets/giftCards/lol.png'
import steam from '../../../assets/giftCards/steam.png'
import spotify from '../../../assets/giftCards/spotify.png'


export default function GiftCards() {
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
            <Flex flex={1}
                w={'100%'}
                maxWidth={'80%'}
                marginRight={windowSize.innerWidth * 0.05}
                marginLeft={windowSize.innerWidth * 0.05}
                marginTop={windowSize.innerHeight * 0.05}
                marginBottom={windowSize.innerHeight * 0.05}
                flexDirection={'row'}
                justifyContent={'flex-start'}
                alignItems={'flex-start'}
                flexWrap='wrap'>


                <CardGift {...{
                    title: 'XBOX',
                    description: 'Compre agora mesmo e resgate em seu console. Créditos de 25, 50 ou 100 reais para usar em toda a loja Xbox',
                    imagem: xbox
                }} />
                <CardGift {...{
                    title: 'HBOMAX',
                    description: 'Compre agora mesmo e resgate em seu console. Créditos de 25, 50 ou 100 reais para usar em toda a loja Xbox',
                    imagem: habomax
                }} />
                <CardGift {...{
                    title: 'NETFLIX',
                    description: 'Compre agora mesmo e resgate em seu console. Créditos de 25, 50 ou 100 reais para usar em toda a loja Xbox',
                    imagem: netflix
                }} />
                <CardGift {...{
                    title: 'DISNEY+',
                    description: 'Compre agora mesmo e resgate em seu console. Créditos de 25, 50 ou 100 reais para usar em toda a loja Xbox',
                    imagem: disney
                }} />
                <CardGift {...{
                    title: 'UBER',
                    description: 'Compre agora mesmo e resgate em seu console. Créditos de 25, 50 ou 100 reais para usar em toda a loja Xbox',
                    imagem: uber
                }} />
                <CardGift {...{
                    title: 'IFOOD',
                    description: 'Compre agora mesmo e resgate em seu console. Créditos de 25, 50 ou 100 reais para usar em toda a loja Xbox',
                    imagem: ifood
                }} />
                <CardGift {...{
                    title: 'LEAGUE OF LEGENDS',
                    description: 'Compre agora mesmo e resgate em seu console. Créditos de 25, 50 ou 100 reais para usar em toda a loja Xbox',
                    imagem: lol
                }} />
                <CardGift {...{
                    title: 'STEAM',
                    description: 'Compre agora mesmo e resgate em seu console. Créditos de 25, 50 ou 100 reais para usar em toda a loja Xbox',
                    imagem: steam
                }} />
                <CardGift {...{
                    title: 'SPOTIFY',
                    description: 'Compre agora mesmo e resgate em seu console. Créditos de 25, 50 ou 100 reais para usar em toda a loja Xbox',
                    imagem: spotify
                }} />


            </Flex>
        </>





    );
}


