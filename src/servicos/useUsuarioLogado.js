import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from './userSlice'

export default function useUsuarioLogado() {
  const [usuarioLogado, setUsuarioLogado] = useState({});
  const usuario = useSelector(selectUser);
  console.log(window.sessionStorage)

  useEffect(() => {
    // Dados usuário logado
    const retorno = JSON.parse(
      window.sessionStorage.getItem('usuariosCadastrados')
    ).find(buscaUsuario => buscaUsuario.cpf === usuario.cpf);
    setUsuarioLogado(retorno);
  }, []);
  return usuarioLogado;
}