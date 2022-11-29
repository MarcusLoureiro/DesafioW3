import React, {useEffect} from 'react';
import {ChakraProvider,theme,} from '@chakra-ui/react';
import WebFont from 'webfontloader';

import Homepage from './componentes/Home';
import Cadastro from './componentes/Cadastro'
import Login from './componentes/Login'
import Dashboard from './componentes/Dashboard';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Droid Sans', 'Exo']
      }
    });
   }, []);
  return (
    <ChakraProvider theme={theme}>
        <Dashboard />
    </ChakraProvider>
  );
}

export default App;
