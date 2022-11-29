import React from 'react'
import {Box} from '@chakra-ui/react'
import Header from './componentes/Header'
import BoasVindas from './componentes/BoasVindas'
import DestaqueTitulo from './componentes/DestaqueTitulo'
import Servicos from './componentes/Servicos'
import Destaques from './componentes/Destaques'
import Footer from './componentes/Footer'
import DestaqueSecao from './componentes/DestaqueSecao'
import textos from '../../mocks/textos'




export default function Homepage() {
    return (
        <>
            <Box>
                <Header />
                <BoasVindas />
                <DestaqueTitulo {...{titulo:textos.tituloDestaques}} />
                <Destaques />
                <DestaqueTitulo {...{titulo:textos.tituloServicos}} />
                <Servicos />
                <DestaqueSecao />
                <Footer />
            </Box>
        </>
    );
}


