import { Box, Heading, Image } from "@chakra-ui/react";

export function HomeTeam({ label, flag, score }) {
  return (
    <Box display="flex" alignItems="center" justifyItems="flex-start">
      <Heading px="20px">{label}</Heading>
      <Box>
        <Image src={flag} alt={label} w="53px" h="37px" />
      </Box>
      <Heading px="20px">{score}</Heading>
      <Heading px="20px">:</Heading>
    </Box>
  );
}

export function AwayTeam({ label, flag, score }) {
  return (
    <Box display="flex" alignItems="center" justifyItems="flex-start">
      <Heading px="20px">{score}</Heading>
      <Box>
        <Image src={flag} alt={label} w="53px" h="37px" />
      </Box>
      <Heading px="20px">{label}</Heading>
    </Box>
  );
}

export function Team({ label, flag }) {
    return (
      <Box display="flex" alignItems="center" justifyItems="flex-start">
        <Box>
          <Image src={flag} alt={label} w="53px" h="37px" />
        </Box>
        <Heading px="20px">{label}</Heading>
      </Box>
    );
  }
  