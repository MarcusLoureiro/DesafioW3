import React from 'react'
import colors from '../../../../../mocks/colors'
import textos from '../../../../../mocks/textos';
import {ButtonGroup,Button} from '@chakra-ui/react'


class Acesso extends React.Component {
    render() {
        return (
            <>
                <ButtonGroup gap='2'>
                    <Button fontFamily='Exo' color={'white'} backgroundColor={'gray'} _hover={{ backgroundColor: colors.cor10 }}>{textos.labelCriarConta}</Button>
                    <Button fontFamily='Exo' color={'white'} backgroundColor={colors.cor10} _hover={{ backgroundColor: colors.cor10 }}>{textos.labelAcessaConta}</Button>
                </ButtonGroup>
            </>


        );
    }
}

export default Acesso