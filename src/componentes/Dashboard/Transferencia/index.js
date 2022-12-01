import React, { useState, useEffect } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  useToast
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { login, logout, selectUser } from '../../../servicos/userSlice';
import { useDispatch, useSelector } from 'react-redux';

import formataAgencia from '../../../servicos/formataDadosAgencia';
import formataConta from '../../../servicos/formataDadosConta';
import useUsuarioLogado from '../../../servicos/useUsuarioLogado'

import colors from '../../../mocks/colors';

const caracteresEspeciais = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numeros = /[0-9]/;
const letras = /[a-z]/i;

export default function Transferencia() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const usuario = useUsuarioLogado();
  const nome = usuario.nome;
  const agencia = formataAgencia(usuario.agencia);
  const conta = formataConta(usuario.conta);

  const verificaUsuario = ({ agencia, conta }) => {
    return JSON.parse(window.sessionStorage.usuariosCadastrados).find(
      user =>
        user.agencia === agencia && user.conta === conta
    );
  };

  function realizarTransferencia(values) {
    // Verifica se existe usuário cadastrado
    const buscaUsuario = verificaUsuario({ ...values });
    if (buscaUsuario) {
      // Processo de login
      toast({
        title: `Transferência enviada ${values}`,
        description: "Servidor retorna 200 - Sucesso",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
     /* const { cpf, nome } = buscaUsuario;
      const { agencia, conta } = values;
      dispatch(login({ cpf, nome, agencia, conta }));
      // Navegação para o Início
      navigate('/dashboard');*/
    } else {
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
        realizarTransferencia(values);


      }, 3000);
    });
  }


  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

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
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);

  const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%" fontFamily={'Exo'}>
          Transferência
        </Heading>
        <Flex>
          <FormControl mr="5%">
            <FormLabel fontWeight={'normal'}>
              Agência Origem
            </FormLabel>
            <Input contentEditable={false} value={agencia} textColor={colors.cor12} type="number" placeholder="Agência Origem" />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="text" fontWeight={'normal'}>
              Conta Origem
            </FormLabel>
            <Input contentEditable={false} value={conta} textColor={colors.cor12} type="number" placeholder="Conta Origem" />
          </FormControl>


        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="text" fontWeight={'normal'}>
            Nome Completo
          </FormLabel>
          <Input contentEditable={false} value={nome} textColor={colors.cor12} type="text" placeholder={'Ex: José Henrique'} />
        </FormControl>
      </>
    );
  };

  const Form2 = () => {
    // Testes de validação
    const possuiNumeros = input => !numeros.test(input);
    const possuiCaracteresEspeciais = input => !caracteresEspeciais.test(input);
    const possuiLetras = input => !letras.test(input);
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex>
            <FormControl isInvalid={errors.agencia} w={'25vw'} margin={5} textColor={colors.cor10}>
              <FormLabel htmlFor="agencia">Agência Destino</FormLabel>
              <Input
                id="agencia"
                placeholder="Agência Destino"
                type="number"

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
              <FormLabel htmlFor="conta">Conta Destino</FormLabel>
              <Input
                id="conta"
                placeholder="Conta Destino"
                type="number"

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


          </Flex>
          <Flex>
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

            <FormControl isInvalid={errors.senha} w={'25vw'} margin={5} textColor={colors.cor10}>
              <FormLabel htmlFor="senha">Valor</FormLabel>
              <Input
                id="valor"
                placeholder="Ex: 100"
                type={'number'}

                {...register('senha', {
                  required: 'Campo obrigatório',
                  minLength: {
                    value: 2,
                    message: 'O valor deve ter no mínimo 2 dígitos',
                  },
                })}
              />
              <FormErrorMessage>
                {errors.senha && errors.senha?.message}
              </FormErrorMessage>
            </FormControl>

          </Flex>


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
          <Flex direction={'column'} alignItems={'center'}>
            <Button
              w={windowSize.innerWidth * 0.11}
              mt={4}
              color={'white'}
              backgroundColor={colors.cor12}
              isLoading={isSubmitting}
              type="submit"
            >
              Confirmar
            </Button>
          </Flex>




        </form>

      </>
    );
  };



  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        boxShadow={'lg'}
        w={windowSize.innerWidth * 0.8}
        h={windowSize.innerHeight * 0.8}
        maxWidth={'90%'}
        p={6}
        marginTop={windowSize.innerHeight * 0.05}
        marginRight={windowSize.innerWidth * 0.05}
        as="form"
        fontFamily={'Exo'}>
        <Progress
          colorScheme={'yellow'}
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : <Form2 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 50);
                }}
                isDisabled={step === 1}
                background={colors.cor10}
                color='white'
                variant="solid"

                w="7rem"
                mr="5%">
                Voltar
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 2}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 2) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 50);
                  }
                }}
                background={colors.cor10}
                color='white'>
                Próximo
              </Button>
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}

