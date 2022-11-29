import React from 'react'
import colors from '../../../../../mocks/colors';
import textos from '../../../../../mocks/textos';
import {Spacer, Button, Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react'
import {ChevronDownIcon} from '@chakra-ui/icons'

const servicos = textos.servicos
const sobre = textos.sobre
const ajuda = textos.ajuda

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
                            {textos.labelServicos}
                        </MenuButton>
                        <MenuList fontFamily='Exo'>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} >{servicos.serv01.titulo}</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} >{servicos.serv02.titulo}</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} >{servicos.serv03.titulo}</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} >{servicos.serv04.titulo}</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }} >{servicos.serv05.titulo}</MenuItem>
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
                            {textos.labelSobre}
                        </MenuButton>
                        <MenuList fontFamily='Exo'>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }}>{sobre.sobre01}</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }}>{sobre.sobre02}</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }}>{sobre.sobre03}</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }}>{sobre.sobre04}</MenuItem>
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
                            {textos.labelAjuda}
                        </MenuButton>
                        <MenuList fontFamily='Exo'>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }}>{ajuda.ajuda02}</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }}>{ajuda.ajuda03}</MenuItem>
                            <MenuItem _hover={{ bg: colors.cor11, textColor: 'white' }}>{ajuda.ajuda01}</MenuItem>
                        </MenuList>
                    </Menu>
                </Spacer>
            </>
        );
    }
}

export default MenuHeader