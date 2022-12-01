import React from 'react'

import {Flex} from '@chakra-ui/react'
import Logo from './Logo';
import MenuHeader from './Menu';
import Acesso from './Acesso';




export default function Header() {
        
        return (
            <Flex minWidth='max-content' alignItems='center' gap='2'  marginRight={5} marginLeft={5} paddingTop={5}>
                <Logo />
                <MenuHeader/>
                <Acesso />
            </Flex>

        );
    }


