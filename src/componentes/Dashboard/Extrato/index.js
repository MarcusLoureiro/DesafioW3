import { Flex, FormControl, Icon, Text, useColorModeValue, Input } from "@chakra-ui/react";
import Card from '../../../components/Card/Card'
import CardBody from '../../../components/Card/CardBody'
import CardHeader from '../../../components/Card/CardHeader'
import TransactionRow from "../../../components/Tables/TransactionRow";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const Extrato = ({
    title,
    date,
    newestTransactions,
    olderTransactions,
}) => {
    const textColor = useColorModeValue("gray.700", "white");

    return (
        <Card w={'100%'} ms={{ lg: "24px" }} paddingRight={'16'} paddingTop={'12'}>
            <CardHeader mb='12px'>
                <Flex direction='column' w='100%'>
                    <Flex
                        direction={{ sm: "column", lg: "row" }}
                        justify={{ sm: "center", lg: "space-between" }}
                        align={{ sm: "center" }}
                        w='100%'
                        my={{ md: "12px" }}>
                        <Text
                            color={textColor}
                            fontSize={{ sm: "lg", md: "xl", lg: "lg" }}
                            fontWeight='bold'>
                            {title}
                        </Text>
                        <Flex align='center' >
                            <Text marginLeft={5} marginRight={2} flexDirection={'row'} color='gray.400' fontSize='sm' fontWeight='semibold'>
                                {`Período`}
                            </Text>
                            <Icon
                                as={FaRegCalendarAlt}
                                color='gray.400'
                                fontSize='md'
                                me='10px'></Icon>

                            <Input
                                
                                size="md"
                                type="date"
                            />
                            <Text marginLeft={5} marginRight={5} flexDirection={'row'} color='gray.400' fontSize='sm' fontWeight='semibold'>
                                {` - `}
                            </Text>
                            <Input
                               
                                size="md"
                                type="date"
                            />

                        </Flex>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <Flex direction='column' w='100%'>
                    <Text
                        color='gray.400'
                        fontSize={{ sm: "sm", md: "md" }}
                        fontWeight='semibold'
                        my='12px'>
                        Extrato da conta
                    </Text>
                    {newestTransactions.map((row) => {
                        return (
                            <TransactionRow
                                name={row.name}
                                logo={row.logo}
                                date={row.date}
                                price={row.price}
                            />
                        );
                    })}
                    {olderTransactions.map((row) => {
                        return (
                            <TransactionRow
                                name={row.name}
                                logo={row.logo}
                                date={row.date}
                                price={row.price}
                            />
                        );
                    })}
                </Flex>
            </CardBody>
        </Card>
    );
};

export default Extrato;
