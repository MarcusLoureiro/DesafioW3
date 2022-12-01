import React, {useEffect} from 'react';
import {ChakraProvider,theme} from '@chakra-ui/react';
import WebFont from 'webfontloader';
import Rotas from './rotas/Rotas';
import users from './mocks/users';

window.onbeforeunload = function () {
  window.onunload = function () {
    console.log('unload');
    window.sessionStorage.isMySessionActive = 'false';
  };
  return undefined;
};

window.onload = function () {
  window.sessionStorage.isMySessionActive = 'true';
  window.sessionStorage.setItem(
    'usuariosCadastrados',
    window.sessionStorage.usuariosCadastrados
      ? window.sessionStorage.usuariosCadastrados
      : JSON.stringify(users)
  );
  console.log(
    'onload',
    JSON.parse(window.sessionStorage.getItem('usuariosCadastrados'))
  );
};

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
        <Rotas />
    </ChakraProvider>
  );
}

export default App;
