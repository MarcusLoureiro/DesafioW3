import React from 'react'
import { useDisclosure } from '@chakra-ui/react'
import colors from '../../mocks/colors'
import { Flex, Text, Box, Image, Button } from '@chakra-ui/react'

export function viewCard(w, h, imagem, texto) {
    return (

        <Flex flex={1}
            w={'100%'}
            flexDirection={'row'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            margin={25}
            marginTop={0}>
            <Box marginRight={0}>
                <Image
                    w={w * 0.2}
                    h={h * 0.25}
                    maxW={850}
                    maxh={400}
                    src={imagem}
                    alt='Logo'
                    alignSelf='center'
                    paddingBottom={4} />
            </Box>
            <Text
                fontFamily={'Exo'}
                fontSize={25}
                color={colors.cor1}>
                {texto}
            </Text>


        </Flex>


    )
}

export function useViewCardCollapse(w, h, imagem, titulo, texto) {
    const { getDisclosureProps, getButtonProps } = useDisclosure()

    const buttonProps = getButtonProps()
    const disclosureProps = getDisclosureProps()
    return (
        <Flex flex={1}
            w={'100%'}
            flexDirection={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            margin={25}
            marginTop={0}>
            <Text
                textAlign={'center'}
                fontFamily={'Exo'}
                fontWeight={'bold'}
                fontSize='20px'
                maxWidth={w * 0.5}
                paddingBottom={5}
                color={colors.cor10}
            >
                {titulo}
            </Text>
            <Button
                w={w * 0.3}
                h={h * 0.4}
                bgColor={'white'}
                _hover={{ bg: 'white' }}
                _focus={{ bg: 'white' }}
                boxShadow={'lg'}
                icon
                {...buttonProps}>
                <Box >
                    <Image
                        w={w * 0.3}
                        h={h * 0.4}
                        src={imagem}
                        alt='Logo'
                        alignSelf='center'
                        paddingBottom={0} />
                </Box>
            </Button>

            <Text
                textAlign={'justify'}
                fontFamily={'Exo'}
                fontWeight={'bold'}
                fontSize='20px'
                maxWidth={w * 0.5}
                padding={5}
                color={colors.cor8}
                {...disclosureProps}
            >
                {texto}
            </Text>
        </Flex>
    )
}









