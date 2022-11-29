import React, { useEffect, useState } from 'react'
import { Flex } from '@chakra-ui/react'
import { itemContato } from '../../CardItem'
import textos from '../../../mocks/textos';

const contatos = textos.contatos;


export default function Footer() {

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    return (

        <Flex flex={1}
            w={'100%'}
            maxWidth={'80%'}
            marginRight={windowSize.innerWidth * 0.05}
            marginLeft={windowSize.innerWidth * 0.05}
            marginTop={windowSize.innerHeight * 0.05}
            marginBottom={windowSize.innerHeight * 0.05}
            flexDirection={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            flexWrap='wrap'>
            {itemContato(
                windowSize.innerWidth,
                windowSize.innerHeight,
                contatos.cont01.titulo,
                contatos.cont01.descricao
            )}
            {itemContato(
                windowSize.innerWidth,
                windowSize.innerHeight,
                contatos.cont02.titulo,
                contatos.cont02.descricao
            )}
            {itemContato(
                windowSize.innerWidth,
                windowSize.innerHeight,
                contatos.cont03.titulo,
                contatos.cont03.descricao
            )}
            {itemContato(
                windowSize.innerWidth,
                windowSize.innerHeight,
                contatos.cont04.titulo,
                contatos.cont04.descricao
            )}

        </Flex>


    );
}


