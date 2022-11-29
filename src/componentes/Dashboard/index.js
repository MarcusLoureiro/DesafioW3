import React, { useEffect, useState } from 'react'
import colors from '../../mocks/colors'
import { Flex, Text, Box, Image, Spacer, Button } from '@chakra-ui/react'
import Sidebar from './menuLateral';
import Billing from './Inicio';
export default function Dashboard() {

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

    return (
        <>
            <Flex flexDirection={'row'}>
                <Sidebar />
                <Billing />
            </Flex>
        </>





    );
}


