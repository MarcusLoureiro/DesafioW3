import React, { useState, useEffect } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import InputMask from "react-input-mask";

import colors from '../../../mocks/colors';
const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
        <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%" fontFamily={'Exo'}>
          Transferência
        </Heading>
        <Flex>
          <FormControl mr="5%">
            <FormLabel fontWeight={'normal'}>
              Agência Origem
            </FormLabel>
            <Input textColor={colors.cor12} type="number" placeholder="Agência Origem" />
          </FormControl>
  
          <FormControl>
            <FormLabel htmlFor="text" fontWeight={'normal'}>
              Conta Origem
            </FormLabel>
            <Input  textColor={colors.cor12} type="number" placeholder="Conta Origem"/>
          </FormControl>

      
        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="text" fontWeight={'normal'}>
            Nome Completo
          </FormLabel>
          <Input textColor={colors.cor12} type="text"  placeholder={'Ex: José Henrique'}/>
        </FormControl>
      </>
    );
  };
  
  const Form2 = () => {
    return (
        <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%" fontFamily={'Exo'}>
          Transferência
        </Heading>
        <Flex>
          <FormControl mr="5%">
            <FormLabel fontWeight={'normal'}>
              Agência Destino
            </FormLabel>
            <Input textColor={colors.cor12} type="number" placeholder="Agência Destino" />
          </FormControl>
  
          <FormControl>
            <FormLabel htmlFor="text" fontWeight={'normal'}>
              Conta Destino
            </FormLabel>
            <Input  textColor={colors.cor12} type="number" placeholder="Conta Destino"/>
          </FormControl>

      
        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="text" fontWeight={'normal'}>
            Nome Completo
          </FormLabel>
          <Input textColor={colors.cor12} type="text"  placeholder={'Ex: José Henrique'}/>
        </FormControl>
        <FormControl mt="2%">
          <FormLabel htmlFor="text" fontWeight={'normal'}>
            Valor da Transferência
          </FormLabel>
          <Input textColor={colors.cor12} type={`R$` & {}}  placeholder={'Ex: R$ 1.000,00'}/>
        </FormControl>
        <FormControl mt="2%">
          <FormLabel htmlFor="text" fontWeight={'normal'}>
            Senha
          </FormLabel>
          <Input textColor={colors.cor12} type="password" />
        </FormControl>
      </>
    );
  };
  


export default function Transferencia() {
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

    const toast = useToast();
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(50);
    return (
      <>
        <Box
          borderWidth="1px"
          rounded="lg"
          boxShadow={'lg'}
          w={windowSize.innerWidth * 0.8}
          h={windowSize.innerHeight * 0.60}
          maxWidth={'90%'}
          p={6}
          marginTop={windowSize.innerHeight*0.05}
          marginRight={windowSize.innerWidth*0.05}
          as="form"
          fontFamily={'Exo'}>
          <Progress
            colorScheme={'yellow'}
            hasStripe
            value={progress}
            mb="5%"
            mx="5%"
            isAnimated></Progress>
          {step === 1 ? <Form1 /> : <Form2 />}
          <ButtonGroup mt="5%" w="100%">
            <Flex w="100%" justifyContent="space-between">
              <Flex>
                <Button
                  onClick={() => {
                    setStep(step - 1);
                    setProgress(progress - 50);
                  }}
                  isDisabled={step === 1}
                  background={colors.cor10}
                  color='white'
                  variant="solid"

                  w="7rem"
                  mr="5%">
                  Voltar
                </Button>
                <Button
                  w="7rem"
                  isDisabled={step === 2}
                  onClick={() => {
                    setStep(step + 1);
                    if (step === 3) {
                      setProgress(100);
                    } else {
                      setProgress(progress + 50);
                    }
                  }}
                  background={colors.cor10}
                  color='white'>
                  Próximo
                </Button>
              </Flex>
              {step === 2 ? (
                <Button
                  w="7rem"
                  colorScheme="blue"
                  variant="solid"
                  onClick={() => {
                    toast({
                      title: 'Transferência Enviada.',
                      description: "O saldo será descontado da sua carteira.",
                      status: 'success',
                      duration: 3000,
                      isClosable: true,
                    });
                  }}>
                  Confirmar
                </Button>
              ) : null}
            </Flex>
          </ButtonGroup>
        </Box>
      </>
    );
  }

