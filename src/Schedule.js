import React, { useState, useEffect, useCallback } from "react";
import LeagueService from "./services/LeagueService";
import {
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import Layout from "./Layout";
import { AwayTeam, HomeTeam } from "./Team";

function Schedule() {
  const [data, setData] = useState([]);

  const handleFetchData = useCallback(async () => {
    const leagueService = new LeagueService();
    await leagueService.fetchData();
    if (leagueService.success) {
      setData(leagueService.getMatches());
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
              <Th className="text-left hide-on-mobile">Date/Time</Th>
              <Th className="text-left hide-on-tablet">Stadium</Th>
              <Th className="text-right">Home Team</Th>
              <th className="text-center"></th>
              <Th className="text-left">Away Team</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((match, index) => (
              <Tr
                h="70px"
                key={index}
                backgroundColor={index % 2 !== 0 ? "table.bg_striped" : "#fff"}
              >
                <Td className="text-left hide-on-mobile">
                  <Box as="span" display="block" className="text-right">
                    {match.matchDate[0]} <br /> {match.matchDate[1]}
                  </Box>
                </Td>
                <Td className="text-left hide-on-tablet">{match.stadium}</Td>
                <Td className="text-right" px={"0"} w="45%">
                  <HomeTeam
                    label={match.homeTeam}
                    score={match.homeTeamScore}
                  />
                </Td>
                <Td className="text-center" w="4px" px={"10px"}>
                  :
                </Td>
                <Td className="text-left" px={"0"}>
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
