import React from 'react'
import colors from '../../mocks/colors'
import logo from '../../assets/logo.svg'
import { Flex, Spacer, Box, ButtonGroup, Heading, Button, Image, Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import Logo from '../Header/Logo'
import MenuHeader from '../Header/Menu'
import Acesso from '../Header/Acesso'

class Homepage extends React.Component {
    render() {
        return (
            <Flex minWidth='max-content' alignItems='center' gap='2' margin={5}>
                <Logo/>
                <MenuHeader />
                <Acesso />
            </Flex>

        );
    }
}

export default Homepage