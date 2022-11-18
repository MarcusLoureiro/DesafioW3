import React from 'react'
import logo from '../../../assets/logo.svg'
import { Flex, Spacer, Box, ButtonGroup, Heading, Button, Image, Menu, MenuList, MenuButton, MenuItem } from '@chakra-ui/react'
import { ChevronDownIcon, ArrowForwardIcon } from '@chakra-ui/icons'

class Logo extends React.Component {
    render() {
        return (
            <>
            <Image
                    boxSize='50'
                    src={logo}
                    alt='Logo'
                    alignSelf='center'
                    paddingBottom={4} />
                <Box paddingBottom={2} paddingStart={3}>
                    <Heading size='md' fontFamily='Exo'>Banco D3</Heading>
                </Box>
            </>
                
          
        );
    }
}

export default Logo