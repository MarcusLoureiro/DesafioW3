import React, { useEffect, useState } from 'react'
import contaCorrente from '../../../assets/contaCorrente.svg'
import contaPoupanca from '../../../assets/contaPoupanca.svg'
import emprestimo from '../../../assets/emprestimo.svg'
import loja from '../../../assets/loja.svg'
import cartaoCredito from '../../../assets/cartaoCredito.svg'
import { Flex} from '@chakra-ui/react'
import {useViewCardCollapse} from '../../CardItem'
import textos from '../../../mocks/textos'

const servicos = textos.servicos

export default function Servicos() {

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
            {useViewCardCollapse(
                windowSize.innerWidth,
                windowSize.innerHeight,
                contaCorrente,
                servicos.serv01.titulo,
                servicos.serv01.descricao
            )}
            {useViewCardCollapse(
                windowSize.innerWidth,
                windowSize.innerHeight,
                contaPoupanca,
                servicos.serv02.titulo,
                servicos.serv02.descricao
            )}
            {useViewCardCollapse(
                windowSize.innerWidth,
                windowSize.innerHeight,
                emprestimo,
                servicos.serv03.titulo,
                servicos.serv03.descricao
            )}
            {useViewCardCollapse(
                windowSize.innerWidth,
                windowSize.innerHeight,
                cartaoCredito,
                servicos.serv04.titulo,
                servicos.serv04.descricao
            )}
            {useViewCardCollapse(
                windowSize.innerWidth,
                windowSize.innerHeight,
                loja,
                servicos.serv05.titulo,
                servicos.serv05.descricao
            )}
        </Flex>



    );
}