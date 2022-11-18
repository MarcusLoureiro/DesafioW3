import React, {useEffect} from 'react';
import Home from './componentes/Home'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import WebFont from 'webfontloader';

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
       <Home />
    </ChakraProvider>
  );
}

export default App;
