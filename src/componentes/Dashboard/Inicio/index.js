import { Box, Flex, Grid, Icon } from "@chakra-ui/react";
import BackgroundCard1 from "../../../assets/bgCard.svg";
import React from "react";
import { FaWallet } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
import { RiMastercardFill } from "react-icons/ri";
import {
  invoicesData,
  newestTransactions,
  olderTransactions,
} from "../../../variables/general";
import CartaoCredito from "./components/CartaoCredito";
import Fatura from "./components/Faturas";
import CardSaldo from "./components/CardSaldo";
import Transacoes from "./components/Transacoes";

function Inicio() {
  return (
    <>
      <Flex direction='column' pt={{ base: "120px", md: "75px" }}>
        <Grid templateColumns={{ sm: "1fr"}} templateRows='1fr'>
          <Box>
            <Grid
              templateColumns={{
                sm: "1fr",
                md: "1fr 1fr",
                xl: "1fr 1fr 1fr 1fr",
              }}
              templateRows={{ sm: "auto auto auto", md: "1fr auto", xl: "1fr" }}
              gap='26px'>
              <CartaoCredito
                backgroundImage={BackgroundCard1}
                title={"Banco D3"}
                number={"7812 2139 0823 XXXX"}
                validity={{
                  name: "DATA VALIDADE",
                  data: "05/24",
                }}
                cvv={{
                  name: "CVV",
                  code: "09x",
                }}
                icon={
                  <Icon
                    as={RiMastercardFill}
                    w='48px'
                    h='auto'
                    color='gray.400'
                  />
                }
              />

              <CardSaldo
                icon={<Icon h={"24px"} w={"24px"} color='white' as={FaWallet} />}
                title={"Saldo + Cashback"}
                description={"Saldo disponível"}
                amount={2684.4}
              />
              <CardSaldo
                icon={<Icon h={"32px"} w={"32px"} color='white' as={MdAttachMoney} />}
                title={"Cashback"}
                description={"Saldo apenas para Gift Cards"}
                amount={45.84}
              />
            </Grid>
          </Box>

        </Grid>
        
          <Grid >
            <Fatura title={"Faturas"} data={invoicesData} />

          </Grid>

      </Flex>
      <Flex
       flex={1}
        pt={{ base: "120px", md: "75px" }}
        w={'100%'}
        maxWidth={'100%'}
        flexDirection={'column'}
        justifyContent={'flex-start'}
        alignItems={'flex-start'}
        >
        <Transacoes

          title={"Últimas Transações"}
          date={"20 - 28 Novembro"}
          newestTransactions={newestTransactions}
          olderTransactions={olderTransactions}
        />

      </Flex>
    </>


  );
}

export default Inicio;
