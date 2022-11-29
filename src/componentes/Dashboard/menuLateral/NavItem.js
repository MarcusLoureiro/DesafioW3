import React, { useState } from 'react'
import {
    Flex,
    Text,
    Icon,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import NavHoverBox from './NavHoverBox'
import colors from '../../../mocks/colors'

export default function NavItem({ icon, title, description, active, navSize }) {
    const [activeStatus, changeActive] = useState(active)
    const [activeBox, changeActiveBox] = useState(false)

    if (true) {
        return (
            <Flex
                mt={30}
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
            >
                <Menu placement="right">
                    <Box
                        backgroundColor={activeStatus && colors.cor11}
                        p={3}
                        borderRadius={4}
                        _hover={{ textDecor: 'none', backgroundColor: colors.cor11 }}
                        w={navSize == "large" && "100%"}
                        onClick={() => {
                            changeActive(!activeStatus)
                        }}


                    >
                        <MenuButton isActive={false} background={''} w="100%">
                            <Flex>
                                <Icon as={icon} fontSize="xl" color={activeStatus ? 'white' : "gray.500"} />
                                <Text color={activeStatus ? 'white' : "gray.500"} fontFamily={'Exo'} ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
                            </Flex>
                        </MenuButton>
                    </Box>
                    {/*<MenuList
                        background={'none'}
                        py={0}
                        border="none"
                        w={200}
                        h={200}
                        ml={5}

                    >
                
                            <NavHoverBox title={title} icon={icon} description={description} />
               
                    </MenuList>*/}
                </Menu>
            </Flex>
        )
    } else {

    }



}