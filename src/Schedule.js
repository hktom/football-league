import React, { useState, useEffect, useCallback } from "react";
import LeagueService from "./services/LeagueService";
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
import { AwayTeam, HomeTeam } from "./Team";

function Schedule() {
  const [data, setData] = useState([]);

  const handleFetchData = useCallback(async () => {
    const leagueService = new LeagueService();
    await leagueService.fetchData();
    if (leagueService.success) {
      setData(leagueService.matches);
    }
  }, []);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  return (
    <Layout title="League Schedule">
      <TableContainer>
        <Table variant="simple">
          <Thead h="40px" backgroundColor="table.bg_header">
            <Tr>
              <Th textAlign="left">Date/Time</Th>
              <Th textAlign="left">Stadium</Th>
              <Th textAlign="right">Home Team</Th>
              <th textAlign="center"></th>
              <Th textAlign="left">Away Team</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((match, index) => (
              <Tr
                h="70px"
                key={index}
                backgroundColor={index % 2 !== 0 ? "table.bg_striped" : "#fff"}
              >
                <Td textAlign="left">{match.matchDate}</Td>
                <Td textAlign="left">
                  {match.stadium}
                </Td>
                <Td textAlign="right" px={"0"}  w="45%">
                  <HomeTeam
                    label={match.homeTeam}
                    score={match.homeTeamScore}
                  />
                </Td>
                <Td textAlign="center" w="4px" px={"10px"}>:</Td>
                <Td textAlign="left" px={"0"}>
                  <AwayTeam
                    label={match.awayTeam}
                    score={match.awayTeamScore}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

export default Schedule;
