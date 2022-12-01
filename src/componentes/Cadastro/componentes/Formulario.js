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
    useToast,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import users from '../../../mocks/users';
import { useDispatch } from 'react-redux';
import { login } from '../../../servicos/userSlice';
import colors from '../../../mocks/colors';


const caracteresEspeciais = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numeros = /[0-9]/;
const letras = /[a-z]/i;

function Formulario() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const toast = useToast();

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


    const {
        handleSubmit,
        register,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm();

    function cadastrarUsuario(values) {
        // Verifica se usuário já é cadastrado
        let usuariosCadastrados = JSON.parse(
            window.sessionStorage.usuariosCadastrados
        );

        const usuarioJaCadastrado = usuariosCadastrados.find(
            buscaUsuario => buscaUsuario.cpf === values.cpf
        );
        if (!usuarioJaCadastrado) {
            const agencia = '1';
            const conta = String(usuariosCadastrados.length + 1);
            const { nome, cpf, senha } = values;

            usuariosCadastrados.push({
                nome,
                cpf,
                senha,
                agencia,
                conta,
                saldo: 0,
                cartaoCredito: {
                    numero: '0000 0000 0000 0000',
                    validade: '01/26',
                },
                extrato: [],
            });
            window.sessionStorage.setItem(
                'usuariosCadastrados',
                JSON.stringify(usuariosCadastrados)
            );

            // Login da conta cadastrada
            dispatch(login({ cpf, nome, conta, agencia }));

            toast({
                title: `Usuário ${nome} cadastrado. Conta: ${conta} Agência: ${agencia}`,
                description: "Servidor retorna 200 - Sucesso",
                status: 'success',
                isClosable: true,
              });

            // Navegação para o Início
            navigate('/dashboard');
        } else {
            toast({
                title: `Usuário já cadastrado. Redirecionado para Login`,
                description: "Servidor retorna 500 - Usuário já cadastrado.",
                status: 'error',
                isClosable: true,
              });
              navigate('/login');
        }
    }

    function onSubmit(values) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
                cadastrarUsuario(values);
            }, 3000);
        });
    }

    // Testes de validação
    const possuiNumeros = input => !numeros.test(input);
    const possuiCaracteresEspeciais = input => !caracteresEspeciais.test(input);
    const possuiLetras = input => !letras.test(input);

    return (
        <Box b
            bg={'white'}
            w={windowSize.innerWidth * 0.4}
            h={'auto'}
            justifyItems={'center'}
            boxShadow={'lg'}
            padding={5}
            borderRadius={8}>


            <Flex direction={'column'} fontFamily={'Exo'} alignItems={'center'}>
            <Text fontFamily={'Exo'} fontWeight={'bold'} fontSize={'lg'} color={colors.cor10} textAlign={'center'}>
              Preencha com os seus dados.
            </Text>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl isInvalid={errors.nome} w={'25vw'} margin={5} textColor={colors.cor10}>
                        <FormLabel htmlFor="nome">Nome</FormLabel>
                        <Input
                            id="nome"
                            placeholder="Nome"
                            {...register('nome', {
                                required: 'Campo obrigatório',
                                validate: {
                                    possuiNumeros,
                                    possuiCaracteresEspeciais,
                                },
                            })}
                        />

                        <FormErrorMessage>
                            {errors.nome &&
                                ((errors.nome?.type === 'possuiNumeros' &&
                                    'O nome não deve ter números') ||
                                    (errors.nome?.type === 'possuiCaracteresEspeciais' &&
                                        'O nome não deve ter caracteres especiais') ||
                                    errors.nome?.message)}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.cpf} w={'25vw'} margin={5} textColor={colors.cor10}>
                        <FormLabel htmlFor="cpf">CPF</FormLabel>
                        <Input
                            id="cpf"
                            placeholder="CPF"
                            {...register('cpf', {
                                required: 'Campo obrigatório',
                                validate: { possuiCaracteresEspeciais, possuiLetras },
                            })}
                        />
                        <FormErrorMessage>
                            {errors.cpf &&
                                ((errors.cpf?.type === 'possuiCaracteresEspeciais' &&
                                    'O CPF não deve ter pontuação') ||
                                    (errors.cpf?.type === 'possuiLetras' &&
                                        'O CPF não deve ter letras') ||
                                    errors.cpf?.message)}
                        </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.senha} w={'25vw'} margin={5} textColor={colors.cor10}>
                        <FormLabel htmlFor="senha">Senha</FormLabel>
                        <Input
                            id="senha"
                            placeholder="Senha"
                            type={'password'}
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

                    <FormControl isInvalid={errors.confirmacaoSenha} w={'25vw'} margin={5} textColor={colors.cor10}>
                        <FormLabel htmlFor="confirmacaoSenha">Confirmação de Senha</FormLabel>
                        <Input
                            id="confirmacaoSenha"
                            placeholder="Confirmar senha"
                            type={'password'}
                            {...register('confirmacaoSenha', {
                                required: 'Campo obrigatório',
                                minLength: {
                                    value: 8,
                                    message: 'A senha deve ter no mínimo 8 dígitos',
                                },
                                validate: input =>
                                    input === getValues('senha') || 'As senhas não são iguais',
                            })}
                        />
                        <FormErrorMessage>
                            {errors.confirmacaoSenha && errors.confirmacaoSenha?.message}
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
                            Cadastrar
                        </Button>
                    </Flex>


                </form>
              

                <Button
                    w={windowSize.innerWidth * 0.11}
                    mt={4}
                    color={'white'}
                    backgroundColor={colors.cor12}
                    type="button"
                    onClick={() => navigate(-1)}
                >
                    Entrar na conta
                </Button>
            </Flex>
        </Box>
    );
}

export default Formulario;