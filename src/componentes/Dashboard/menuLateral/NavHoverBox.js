import React from 'react'
import {
    Flex,
    Heading,
    Text,
    Icon
} from '@chakra-ui/react'
import colors from '../../../mocks/colors'

export default function NavHoverBox({ title, icon, description }) {
    return (
        <>
            <Flex

                pos="absolute"
                mt="calc(100px - 7.5px)"
                ml="-10px"
                width={0}
                height={0}
                borderTop="10px solid transparent"
                borderBottom="10px solid transparent"
                borderRight={`10px solid ${colors.cor10}`}
            />
            <Flex
                h={"100%"}
                w={"100%"}
                flexDir="column"
                alignItems="center"
                justify="center"
                backgroundColor={colors.cor10}
                borderRadius="8px"
                color="#fff"
                textAlign="center"
            >
                <Icon as={icon} fontSize="3xl" mb={4} />
                <Heading fontFamily={'Exo'} size="md" fontWeight="normal">{title}</Heading>
                <Text padding={1} fontFamily={'Exo'} >{description}</Text>
            </Flex>
        </>
    )
}