import React, { useState, useEffect } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Button,
    Flex,
    Box,
    Text,
    Link,
    useToast
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { login, logout, selectUser } from '../../../servicos/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../../../mocks/colors';

function Formulario() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [windowSize, setWindowSize] = useState(getWindowSize());
    const toast = useToast();

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

    const {
        handleSubmit,
        register,
        formState: { errors, isSubmitting },
    } = useForm();



    const verificaUsuario = ({ agencia, conta, senha }) => {
        return JSON.parse(window.sessionStorage.usuariosCadastrados).find(
            user =>
                user.agencia === agencia && user.conta === conta && user.senha === senha
        );
    };

    function loginUsuario(values) {
        // Verifica se existe usuário cadastrado
        const buscaUsuario = verificaUsuario({ ...values });
        if (buscaUsuario) {
            // Processo de login
            toast({
                title: `Bem-vindo de volta ${buscaUsuario.nome}`,
                description: "Servidor retorna 200 - Sucesso",
                status: 'success',
                duration: 3000,
                isClosable: true,
              });
            const { cpf, nome } = buscaUsuario;
            const { agencia, conta } = values;
            dispatch(login({ cpf, nome, agencia, conta }));
            // Navegação para o Início
            navigate('/dashboard');
        }else{
            toast({
                title: `Erro. Usuário não localizado.`,
                description: "Servidor retorna 500 - Server Error",
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
        }
    }

    function onSubmit(values) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                loginUsuario(values);
            
            }, 3000);
        });
    }

    return (
        <Box
            bg={'white'}
            w={windowSize.innerWidth * 0.4}
            h={windowSize.innerHeight * 0.6}
            justifyItems={'center'}
            boxShadow={'lg'}
            padding={5}
            borderRadius={8}>


            <Flex direction={'column'} fontFamily={'Exo'} alignItems={'center'}>
                <Text fontFamily={'Exo'} fontWeight={'bold'} fontSize={'lg'} color={colors.cor10} textAlign={'center'}>
                    Preencha com os seus dados.
                </Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.agencia} w={'25vw'} margin={5} textColor={colors.cor10}>
                        <FormLabel htmlFor="agencia">Agência</FormLabel>
                        <Input
                            id="agencia"
                            placeholder="Agência"
                            type="number"
                            size="sm"
                            {...register('agencia', {
                                required: 'Campo obrigatório',
                                maxLength: {
                                    value: 4,
                                    message: 'O número da agência não pode exceder 4 dígitos',
                                },
                            })}
                        />

                        <FormErrorMessage>
                            {errors.agencia && errors.agencia?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.conta} w={'25vw'} margin={5} textColor={colors.cor10}>
                        <FormLabel htmlFor="conta">Conta</FormLabel>
                        <Input
                            id="conta"
                            placeholder="Conta"
                            type="number"
                            size="sm"
                            {...register('conta', {
                                required: 'Campo obrigatório',
                                maxLength: {
                                    value: 8,
                                    message: 'O número da conta não pode exceder 8 dígitos',
                                },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.conta && errors.conta?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.senha} w={'25vw'} margin={5} textColor={colors.cor10}>
                        <FormLabel htmlFor="senha">Senha</FormLabel>
                        <Input
                            id="senha"
                            placeholder="Senha"
                            type={'password'}
                            size="sm"
                            {...register('senha', {
                                required: 'Campo obrigatório',
                                minLength: {
                                    value: 8,
                                    message: 'A senha deve ter no mínimo 8 dígitos',
                                },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.senha && errors.senha?.message}
                        </FormErrorMessage>
                    </FormControl>

                    <Flex direction={'column'} alignItems={'center'}>
                        <Button
                            w={windowSize.innerWidth * 0.11}
                            mt={4}
                            color={'white'}
                            backgroundColor={colors.cor12}
                            isLoading={isSubmitting}
                            type="submit"
                        >
                            Entrar
                        </Button>
                    </Flex>


                </form>



                <Text fontSize={'0.9vw'} marginTop={15} textAlign={'center'}>Já possui conta?</Text>


                <Button
                    w={windowSize.innerWidth * 0.11}
                    mt={1}
                    color={'white'}
                    backgroundColor={colors.cor12}
                    type="button"
                    onClick={() => navigate('/cadastro')}
                >
                    Criar conta
                </Button>

            </Flex>
        </Box>
    );
}

export default Formulario;