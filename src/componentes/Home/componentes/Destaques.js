import React, { useEffect, useState } from 'react'



import item1 from '../../../assets/item1.svg'
import item2 from '../../../assets/item2.svg'
import item3 from '../../../assets/item3.svg'
import item4 from '../../../assets/item4.svg'
import { Flex} from '@chakra-ui/react'
import { viewCard } from '../../CardItem'
import textos from '../../../mocks/textos'

const destaques = textos.destaques





export default function Destaques() {

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

        <Flex flex={1}
            w={'100%'}
            maxWidth={'80%'}
            marginRight={windowSize.innerWidth * 0.05}
            marginLeft={windowSize.innerWidth * 0.05}
            marginTop={windowSize.innerHeight * 0.05}
            marginBottom={windowSize.innerHeight * 0.05}
            flexDirection={'row'}
            justifyContent={'flex-start'}
            alignItems={'flex-start'}
            flexWrap='wrap'>
            {viewCard(
                windowSize.innerWidth,
                windowSize.innerHeight,
                item1,
                destaques.dest01
            )}
            {viewCard(
                windowSize.innerWidth,
                windowSize.innerHeight,
                item2,
                destaques.dest02
            )}
            {viewCard(
                windowSize.innerWidth,
                windowSize.innerHeight,
                item3,
                destaques.dest03
            )}
            {viewCard(
                windowSize.innerWidth,
                windowSize.innerHeight,
                item4,
                destaques.dest04
            )}

        </Flex>
    );
}


