import {
  Box,
  Heading,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";
import Layout from "./Layout";

function Schedule() {
  return (
    <Layout title="League Schedule">
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead h="40px" backgroundColor="table.bg_header">
            <Tr>
              <Th textAlign="left">Date/Time</Th>
              <Th textAlign="left">Stadium</Th>
              <Th textAlign="right">Home Team</Th>
              <Th textAlign="left">Away Team</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr h="70px">
              <Td textAlign="left">inches</Td>
              <Td textAlign="left" w="70%">millimetres (mm)</Td>
              <Td textAlign="right">25.4</Td>
              <Td textAlign="left">25.4</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

export default Schedule;
