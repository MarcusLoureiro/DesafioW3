import React from 'react'
import colors from '../../../mocks/colors';
import { Flex, Spacer, Box, ButtonGroup, Heading, Button, Image, Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'

class MenuHeader extends React.Component {
    render() {
        return (
            <>

                <Spacer>
                    <Menu >
                        <MenuButton
                            as={Button}
                            bgColor={'white'}
                            transition='all 0.5s'
                            borderRadius='md'
                            _hover={{ bg: colors.cor9 }}
                            _expanded={{ bg: colors.cor10, textColor: 'white' }}
                            rightIcon={<ChevronDownIcon />}
                            fontFamily='Exo'
                        >
                            Serviços
                        </MenuButton>
                        <MenuList>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Conta Corrente</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Conta Poupança</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Cartão de Crédito</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Empréstimos</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Gift Cards</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu >
                        <MenuButton
                            as={Button}
                            bgColor={'white'}
                            transition='all 0.5s'
                            borderRadius='md'
                            _hover={{ bg: colors.cor9 }}
                            _expanded={{ bg: colors.cor10, textColor: 'white' }}
                            rightIcon={<ChevronDownIcon />}
                            fontFamily='Exo'
                        >
                            Sobre
                        </MenuButton>
                        <MenuList>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Quem somos?</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Nossa visão</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Diferencial</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Depoimentos</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu >
                        <MenuButton
                            as={Button}
                            bgColor={'white'}
                            transition='all 0.5s'
                            borderRadius='md'
                            _hover={{ bg: colors.cor9 }}
                            _expanded={{ bg: colors.cor10, textColor: 'white' }}
                            rightIcon={<ChevronDownIcon />}
                            fontFamily='Exo'
                        >
                            Ajuda
                        </MenuButton>
                        <MenuList>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Fale Conosco</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Relatar um erro</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} fontFamily='Exo'>Atendimento via Chat</MenuItem>
                        </MenuList>
                    </Menu>
                </Spacer>
            </>
        );
    }
}

export default MenuHeader