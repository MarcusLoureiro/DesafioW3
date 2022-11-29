import React from 'react'

import {Flex} from '@chakra-ui/react'
import Logo from './Logo';
import MenuHeader from './Menu';
import Acesso from './Acesso';


class Homepage extends React.Component {
    render() {
        return (
            <Flex minWidth='max-content' alignItems='center' gap='2'  marginRight={5} marginLeft={5} paddingTop={5}>
                <Logo />
                <MenuHeader/>
                <Acesso />
            </Flex>

        );
    }
}

export default Homepage