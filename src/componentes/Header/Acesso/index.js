import React from 'react'
import colors from '../../../mocks/colors'
import { Flex, Spacer, Box, ButtonGroup, Heading, Button, Image, Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'

class Acesso extends React.Component {
    render() {
        return (
            <>
                <ButtonGroup gap='2'>
                    <Button fontFamily='Exo' color={'white'} backgroundColor={'gray'} _hover={{ backgroundColor: colors.cor10 }}>Criar Conta</Button>
                    <Button fontFamily='Exo' color={'white'} backgroundColor={colors.cor10} _hover={{ backgroundColor: colors.cor10 }}> Acessar Conta</Button>
                </ButtonGroup>
            </>


        );
    }
}

export default Acesso