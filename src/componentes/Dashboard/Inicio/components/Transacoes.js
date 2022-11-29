import { Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import Card from '../../../../components/Card/Card'
import CardBody from '../../../../components/Card/CardBody'
import CardHeader from '../../../../components/Card/CardHeader'
import TransactionRow from "../../../../components/Tables/TransactionRow";
import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";

const Transacoes = ({
  title,
  date,
  newestTransactions,
  olderTransactions,
}) => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card w={'100%'} ms={{ lg: "24px" }} paddingRight={'16'}>
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
            <Flex align='center'>
              <Icon
                as={FaRegCalendarAlt}
                color='gray.400'
                fontSize='md'
                me='6px'></Icon>
              <Text color='gray.400' fontSize='sm' fontWeight='semibold'>
                {date}
              </Text>
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
            Mais Recentes
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
          <Text
            color='gray.400'
            fontSize={{ sm: "sm", md: "md" }}
            fontWeight='semibold'
            my='12px'>
            Mais Antigos
          </Text>
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

export default Transacoes;
