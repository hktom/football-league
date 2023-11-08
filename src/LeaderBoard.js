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
import { AwayTeam, HomeTeam, SimpleTeam } from "./Team";

function LeaderBoard() {
  const [data, setData] = useState([]);

  const handleFetchData = useCallback(async () => {
    const leagueService = new LeagueService();
    await leagueService.fetchData();
    if (leagueService.success) {
      setData(leagueService.getLeaderboard());
    }
  }, []);

  useEffect(() => {
    handleFetchData();
  }, [handleFetchData]);

  return (
    <Layout title="League Standings">
      <TableContainer>
        <Table variant="simple">
          <Thead h="40px" backgroundColor="table.bg_header">
            <Tr>
              <Th className="text-left">team Name</Th>
              <Th className="text-center">MP</Th>
              <Th className="text-center">GF</Th>
              <th className="text-center">GA</th>
              <Th className="text-center">Points</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((leader, index) => (
              <Tr
                h="70px"
                key={index}
                backgroundColor={index % 2 !== 0 ? "table.bg_striped" : "#fff"}
              >
                <Td className="text-left" w={"60%"}>
                  <SimpleTeam label={leader.teamName} />
                </Td>
                <Td className="text-center" w={"10%"}>{leader.matchPlayed}</Td>
                <Td className="text-center" w={"10%"}>{leader.goalsFor}</Td>
                <Td className="text-center" w={"10%"}>{leader.goalsAgainst}</Td>
                <Td className="text-center" w={"10%"}>
                  {leader.points}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
}

export default LeaderBoard;
