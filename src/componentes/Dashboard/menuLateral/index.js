import React, { useEffect, useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    Box,
    Link,
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiFileText,
    FiGift
} from 'react-icons/fi'
import {
    BiTransfer
} from 'react-icons/bi'

import NavItem from './NavItem'
import colors from '../../../mocks/colors'
import Inicio from '../Inicio'
import Transferencia from '../Transferencia'
import GiftCards from '../GiftCards'
import Extrato from '../Extrato'

import useUsuarioLogado from '../../../servicos/useUsuarioLogado'
import formataAgencia from '../../../servicos/formataDadosAgencia'
import formataConta from '../../../servicos/formataDadosConta'
import { newestTransactions, olderTransactions } from '../../../variables/general'


import { useNavigate } from 'react-router-dom';
import { login, logout, selectUser } from '../../../servicos/userSlice';
import { useDispatch, useSelector } from 'react-redux';


export function setPageDash(page) {
    if (page === 0) {
        return (<Inicio />)
    }
    if (page === 1) {
        return (<Transferencia />)
    }
    if (page === 2) {
        return (<Extrato
            title={"Extrato Bancário D3"}
            date={"01 - 28 Novembro"}
            newestTransactions={newestTransactions}
            olderTransactions={olderTransactions} />)
    }
    if (page === 3) {
        return (<GiftCards />)
    }
}




export default function Sidebar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [navSize, changeNavSize] = useState("large")
    const [page, setPage] = useState(0)
    const [activeStatus0, changeActive0] = useState(true)
    const [activeStatus1, changeActive1] = useState(false)
    const [activeStatus2, changeActive2] = useState(false)
    const [activeStatus3, changeActive3] = useState(false)

    const usuario = useUsuarioLogado();
    const nome = usuario.nome;
    const agencia = formataAgencia(usuario.agencia);
    const conta = formataConta(usuario.conta);


    function changePageStatus0() {
        setPage(0)
        changeActive0(true)
        changeActive1(false)
        changeActive2(false)
        changeActive3(false)
    }
    function changePageStatus1() {
        setPage(1)
        changeActive1(true)
        changeActive0(false)
        changeActive2(false)
        changeActive3(false)
    }
    function changePageStatus2() {
        setPage(2)
        changeActive2(true)
        changeActive0(false)
        changeActive1(false)
        changeActive3(false)
    }
    function changePageStatus3() {
        setPage(3)
        changeActive3(true)
        changeActive0(false)
        changeActive1(false)
        changeActive2(false)
    }

    function desconectarUsuario(){
        console.log("Desconectar Usuario ativado")
        dispatch(logout())
        navigate('/')
    }
    

    return (
        <>
            <Flex
                pos="sticky"
                left="5"
                h="95vh"
                marginRight={16}
                marginTop="2.5vh"
                boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
                borderRadius={navSize == "small" ? "15px" : "30px"}
                w={navSize == "small" ? "75px" : "220px"}
                flexDir="column"
                justifyContent="space-between"
            >
                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    as="nav"
                >
                    <IconButton
                        background="none"
                        mt={5}
                        _hover={{ background: colors.cor11 }}
                        icon={<FiMenu />}
                        onClick={() => {
                            if (navSize == "small")
                                changeNavSize("large")
                            else
                                changeNavSize("small")
                        }}
                    />
                    <Box w={'100%'} onClick={() => { changePageStatus0()}}>
                        <NavItem navSize={navSize} icon={FiHome} title="Inicio" description="Aqui você tem visualiza as principais informações da sua conta." active={activeStatus0} />
                    </Box>
                    <Box w={'100%'} onClick={() => { changePageStatus1()}}>
                        <NavItem navSize={navSize} icon={BiTransfer} title="Transferência" description="Realize transferências para outroas contas do Banco D3." active={activeStatus1} />
                    </Box>
                    <Box w={'100%'} onClick={() => { changePageStatus2()}}>
                        <NavItem navSize={navSize} icon={FiFileText} title="Extrato" description="Veja suas transações de entrada e saída da sua conta." active={activeStatus2} />
                    </Box>
                    <Box w={'100%'} onClick={() => { changePageStatus3()}}>
                        <NavItem navSize={navSize} icon={FiGift} title="Gift Cards" description="Que tal comprar aquele gift card e curti música, filmes, jogos e muito mais?" active={activeStatus3} />
                    </Box>




                </Flex>

                <Flex
                    p="5%"
                    flexDir="column"
                    w="100%"
                    alignItems={navSize == "small" ? "center" : "flex-start"}
                    mb={4}
                >
                    <Divider display={navSize == "small" ? "none" : "flex"} />
                    <Flex mt={4} align="center">
                        <Avatar size="sm" src="avatar-1.jpg" />
                        <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"} >
                            <Heading fontSize={'1vx'} fontFamily={'Exo'} as="h3" size="sm">{nome}</Heading>
                            <Text fontFamily={'Exo'} color="gray">{`Ag: ${agencia}`}</Text>
                            <Text fontFamily={'Exo'} color="gray">{`Cc: ${conta}`}</Text>
                            <Link onClick={()=>{desconectarUsuario()}} fontFamily={'Exo'} color="gray">{`Sair`}</Link>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
            <Flex flexDirection={'row'} h={'100%'} w={'100%'}>
                {setPageDash(page)}
            </Flex>

        </>
    )
}