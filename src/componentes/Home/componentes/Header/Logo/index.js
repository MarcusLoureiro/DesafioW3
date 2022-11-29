import React from 'react'
import logo from '../../../../../assets/logo.svg'
import textos from '../../../../../mocks/textos';
import {Box, Heading, Image} from '@chakra-ui/react'


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
                    <Heading size='md' fontFamily='Exo'>{textos.nomeBanco}</Heading>
                </Box>
            </>
                
          
        );
    }
}

export default Logo