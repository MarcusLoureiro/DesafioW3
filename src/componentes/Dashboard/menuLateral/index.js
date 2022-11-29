import React, { useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading
} from '@chakra-ui/react'
import {
    FiMenu,
    FiHome,
    FiSettings,
    FiFileText,
    FiGift
} from 'react-icons/fi'
import {
    BiTransfer
} from 'react-icons/bi'

import { IoPawOutline } from 'react-icons/io5'
import NavItem from './NavItem'
import colors from '../../../mocks/colors'

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
  
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginRight={16}
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
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
                <NavItem navSize={navSize} icon={FiHome} title="Inicio" description="Aqui você tem visualiza as principais informações da sua conta." active={false}/>
                <NavItem navSize={navSize} icon={BiTransfer} title="Transferência" description="Realize transferências para outroas contas do Banco D3."  active={false}/>
                <NavItem navSize={navSize} icon={FiFileText} title="Extrato" description="Veja suas transações de entrada e saída da sua conta."  active={false} />
                <NavItem navSize={navSize} icon={FiGift} title="Gift Cards" description="Que tal comprar aquele gift card e curti música, filmes, jogos e muito mais?"  active={false}/>
                <NavItem navSize={navSize} icon={FiSettings} title="Configurações" description="Acesse e caso deseje, aletere suas configurações"  active={false}/>
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
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading fontFamily={'Exo'} as="h3" size="sm">Nome cliente</Heading>
                        <Text fontFamily={'Exo'} color="gray">Ag: XXXX</Text>
                        <Text fontFamily={'Exo'} color="gray">Cc: XXXXXX</Text>
                        
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}