import React, { useEffect, useState } from 'react'


import colors from '../../mocks/colors'
import homeImagem from '../../assets/homeImagem.png'
import bg from '../../assets/triangulos2.svg'
import item1 from '../../assets/item1.svg'
import item2 from '../../assets/item2.svg'
import item3 from '../../assets/item3.svg'
import item4 from '../../assets/item4.svg'
import contaCorrente from '../../assets/contaCorrente.svg'
import contaPoupanca from '../../assets/contaPoupanca.svg'
import emprestimo from '../../assets/emprestimo.svg'
import loja from '../../assets/loja.svg'
import cartaoCredito from '../../assets/cartaoCredito.svg'
import Footer from '../../assets/Footer.svg'

import { Flex, Text, Box, Image, Spacer } from '@chakra-ui/react'
import Typewriter from "typewriter-effect";
import Header from '../Header'
import { viewCard, useViewCardCollapse } from '../CardItem'




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
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    return (
        <>
            <Box>
                <Header />
                <Flex bgRepeat={'no-repeat'} bgImage={`url(${bg})`} flex={1} w={'100%'} marginRight={5} flexDirection={'row'} justifyContent={'center'} alignItems={'center'}>
                    <Box p='4' textAlign={'center'} marginLeft={windowSize.innerWidth * 0.1}>
                        <Text fontFamily={'Exo'} fontSize='30px' color={colors.cor10} fontWeight={'bold'}>
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("Seja bem-vindo(a)")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Banco D3.")
                                        .pauseFor(1000)
                                        .start();
                                }}
                            />
                        </Text>
                        <Text fontFamily={'Exo'} fontSize='30px' color={colors.cor1} textAlign={'center'} >
                            <Typewriter
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("\nDigitalizar,\n")
                                        .typeString("\nDesburocratizar,\n")
                                        .typeString("\nDescentralizar.")
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
                            Vem ser cliente e aproveite os benefícios do Banco D3.
                        </Text>
                        <Box
                            maxWidth={100}
                            borderBottom={'4px'}
                            borderBottomColor={colors.cor12}
                            marginTop={'16px'} />
                    </Box>
                </Flex>

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
                    {viewCard(
                        windowSize.innerWidth,
                        windowSize.innerHeight,
                        item1,
                        `O Banco D3 permite que tudo seja feito de forma digital usando o seu celular! Sem filas e transtornos.`
                    )}
                    {viewCard(
                        windowSize.innerWidth,
                        windowSize.innerHeight,
                        item2,
                        `Segurança em todas as etapas da utilização de nossos serviços. Não tem com que se preocupar!`
                    )}
                    {viewCard(
                        windowSize.innerWidth,
                        windowSize.innerHeight,
                        item3,
                        `Milhares de Usuários conectados utilizando nossos serviços de forma fácil e integrada.`
                    )}
                    {viewCard(
                        windowSize.innerWidth,
                        windowSize.innerHeight,
                        item4,
                        `Problema? Não se estresse passando horas no telefone ou indo em uma agência. Use nosso suporte online 24h.`
                    )}

                </Flex>

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
                            Conheça nossos principais serviços para melhorar a sua vida.
                        </Text>
                        <Box
                            maxWidth={100}
                            borderBottom={'4px'}
                            borderBottomColor={colors.cor12}
                            marginTop={'16px'} />
                    </Box>
                </Flex>

                <Flex flex={1}
                    w={'100%'}
                    maxWidth={'80%'}
                    marginRight={windowSize.innerWidth * 0.05}
                    marginLeft={windowSize.innerWidth * 0.05}
                    marginTop={windowSize.innerHeight * 0.05}
                    marginBottom={windowSize.innerHeight * 0.05}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    flexWrap='wrap'>
                    {useViewCardCollapse(
                        windowSize.innerWidth,
                        windowSize.innerHeight,
                        contaCorrente,
                        'Conta Corrente',
                        `Abra uma conta corrente e tenha acesso a inúmeros benefícios
                            como cartão de crédito, avaliação de empréstimos pessoais,
                            usar a nossa loja para compra de Cartões Presente (Gift Cards)
                            seja para assistir aquele streaming, ou comprar créditos em games ou
                            em aplicativos de delivery, ou mesmo aplicativos de mobilidade urbana.
                            Abra já sua conta no Banco D3!`
                    )}
                    {useViewCardCollapse(
                        windowSize.innerWidth,
                        windowSize.innerHeight,
                        contaPoupanca,
                        'Conta Poupança',
                        `Abra uma conta corrente e tenha acesso a inúmeros benefícios
                            como cartão de crédito, avaliação de empréstimos pessoais,
                            usar a nossa loja para compra de Cartões Presente (Gift Cards)
                            seja para assistir aquele streaming, ou comprar créditos em games ou
                            em aplicativos de delivery, ou mesmo aplicativos de mobilidade urbana.
                            Abra já sua conta no Banco D3!`
                    )}
                    {useViewCardCollapse(
                        windowSize.innerWidth,
                        windowSize.innerHeight,
                        emprestimo,
                        'Empréstimos',
                        `Abra uma conta corrente e tenha acesso a inúmeros benefícios
                            como cartão de crédito, avaliação de empréstimos pessoais,
                            usar a nossa loja para compra de Cartões Presente (Gift Cards)
                            seja para assistir aquele streaming, ou comprar créditos em games ou
                            em aplicativos de delivery, ou mesmo aplicativos de mobilidade urbana.
                            Abra já sua conta no Banco D3!`
                    )}
                    {useViewCardCollapse(
                        windowSize.innerWidth,
                        windowSize.innerHeight,
                        cartaoCredito,
                        'Cartão de Crédito',
                        `Abra uma conta corrente e tenha acesso a inúmeros benefícios
                            como cartão de crédito, avaliação de empréstimos pessoais,
                            usar a nossa loja para compra de Cartões Presente (Gift Cards)
                            seja para assistir aquele streaming, ou comprar créditos em games ou
                            em aplicativos de delivery, ou mesmo aplicativos de mobilidade urbana.
                            Abra já sua conta no Banco D3!`
                    )}
                    {useViewCardCollapse(
                        windowSize.innerWidth,
                        windowSize.innerHeight,
                        loja,
                        'Gift Card',
                        `Abra uma conta corrente e tenha acesso a inúmeros benefícios
                                como cartão de crédito, avaliação de empréstimos pessoais,
                                usar a nossa loja para compra de Cartões Presente (Gift Cards)
                                seja para assistir aquele streaming, ou comprar créditos em games ou
                                em aplicativos de delivery, ou mesmo aplicativos de mobilidade urbana.
                                Abra já sua conta no Banco D3!`
                    )}
                </Flex>
                <Box 
                h={windowSize.innerHeight * 0.3}
                w={'100%'}
                bgImage={`url(${Footer})`}>

                </Box>
            </Box>

        </>
    );
}


