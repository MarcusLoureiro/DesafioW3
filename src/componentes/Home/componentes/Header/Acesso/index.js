import React from 'react'
import colors from '../../../../../mocks/colors'
import textos from '../../../../../mocks/textos';
import {ButtonGroup,Button} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';



export default function Acesso(){
        let navigate = useNavigate()
        return (
            <>
                <ButtonGroup gap='2'>
                    <Button 
                    fontFamily='Exo' 
                    color={'white'} 
                    backgroundColor={'gray'} 
                    _hover={{ backgroundColor: colors.cor10 }}
                    onClick={()=>{navigate('cadastro')}}>{textos.labelCriarConta}</Button>
                    <Button 
                    fontFamily='Exo' 
                    color={'white'} 
                    backgroundColor={colors.cor10} 
                    _hover={{ backgroundColor: colors.cor10 }}
                    onClick={()=>{navigate('login')}}>{textos.labelAcessaConta}</Button>
                </ButtonGroup>
            </>


        );
  
}

