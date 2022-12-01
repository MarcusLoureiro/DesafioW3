import React, { useEffect, useState } from 'react'
import {
    Image,
    Text,
    Button,
    useDisclosure,
    Modal,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalOverlay,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useToast
} from '@chakra-ui/react'

import { Card, Box, CardBody, CardFooter } from '@chakra-ui/react'
import colors from '../../mocks/colors';




export default function CardGift({ title, description, imagem }) {


    const toast = useToast();
    const { isOpen, onOpen, onClose } = useDisclosure()
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

    function showToast(validacao){
        if(validacao){
            toast({
                title: `Cartão presente ${title} comprado`,
                description: "O saldo será descontado da sua carteira.",
                status: 'success',
                duration: 3000,
                isClosable: true,
              });
        }else{
            toast({
                title: `Cartão presente ${title} não foi comprado`,
                description: "Transação não finalizada com sucesso.",
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
        }
        
    }



    function createModal() {
        return (
            <>
                <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent fontFamily={'Exo'}>
                        <ModalHeader textAlign={'center'}>{`Gift Card ${title}`}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text fontWeight='bold' mb='1rem'>
                                Insira abaixo o valor que deseja resgatar em cartão presente.
                            </Text>
                            <FormControl mt="5%">
                                <FormLabel htmlFor="text" fontWeight={'normal'}>
                                    Valor do Cartão Presente
                                </FormLabel>
                                <Input textColor={colors.cor12} type={'number'} placeholder={'Ex: R$ 1.000,00'} />
                            </FormControl>
                            <FormControl mt="5%">
                                <FormLabel htmlFor="text" fontWeight={'normal'}>
                                    Senha
                                </FormLabel>
                                <Input textColor={colors.cor12} type={'password'} />
                            </FormControl>
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={()=>{showToast(false)}}>
                                Comprar
                            </Button>
                            <Button variant='ghost'  onClick={onClose}>Cancelar</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </>
        )
    }


    return (
        <>
            <Box>
                <Card margin={5} w={windowSize.innerWidth * 0.2} maxH={windowSize.innerHeight * 0.5} alignItems={'center'} justifyContent={'center'}>
                    <CardBody alignItems={'center'}>
                        <Image w={'auto'} h={windowSize.innerHeight * 0.1} src={imagem} />
                    </CardBody>
                    <CardFooter flexDirection={'column'}>
                        <Text textAlign={'flex-start'} paddingBottom={5}>{description}</Text>
                        <Button onClick={() => onOpen()} color={'white'} bgColor={colors.cor10}>Comprar</Button>
                    </CardFooter>
                </Card>
                <modalGiftCard />
                {createModal()}
            </Box>


        </>





    );
}


