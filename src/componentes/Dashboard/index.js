import React, { useEffect, useState } from 'react'
import colors from '../../mocks/colors'
import { Flex, Text, Box, Image, Spacer, Button } from '@chakra-ui/react'
import Sidebar from './menuLateral';
import Inicio from './Inicio';
import Extrato from './Extrato';
import Transferencia from './Transferencia';
import GiftCards from './GiftCards';

import { newestTransactions, olderTransactions } from '../../variables/general';

export default function Dashboard() {


    return (
        <>
            <Flex flexDirection={'row'} h={'100%'}>
                <Sidebar />
                {/*<Extrato
                    title={"Extrato Bancário D3"}
                    date={"01 - 28 Novembro"}
                    newestTransactions={newestTransactions}
    olderTransactions={olderTransactions} />*/}
                <GiftCards />
                    
            </Flex>
        </>





    );
}


