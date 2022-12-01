import React from 'react'
import { Flex } from '@chakra-ui/react'
import Sidebar from './menuLateral';


export default function Dashboard() {


    return (
        <>
            <Flex flexDirection={'row'} h={'100%'}>
                <Sidebar />
            </Flex>
        </>





    );
}


