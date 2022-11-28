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
                borderRight="10px solid #FFDA4F"
            />
            <Flex
                h={200}
                w={200}
                flexDir="column"
                alignItems="center"
                justify="center"
                backgroundColor={colors.cor11}
                borderRadius="10px"
                color="#fff"
                textAlign="center"
            >
                <Icon as={icon} fontSize="3xl" mb={4} />
                <Heading fontFamily={'Exo'} size="md" fontWeight="normal">{title}</Heading>
                <Text fontFamily={'Exo'} >{description}</Text>
            </Flex>
        </>
    )
}