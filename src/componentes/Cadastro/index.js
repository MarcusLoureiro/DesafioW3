import React from 'react';
import { Flex } from '@chakra-ui/react';

import Formulario from './componentes/Formulario'; 
import fundoCadastro from '../../assets/FundoCadastro.svg'

function Cadastro() {

  return (
    <Flex h="100vh" align="center" justify="center" fontSize="xl"  bgImage={`url(${fundoCadastro})`}>
      <Formulario />
    </Flex>
  );
}

export default Cadastro;