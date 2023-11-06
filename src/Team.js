import { Box, Heading, Image } from "@chakra-ui/react";

export function HomeTeam({ label, score }) {
  return (
    <Box display="flex" alignItems="center" justifyItems="flex-end">
      <Box
        flexGrow="1"
        display="flex"
        alignItems="center"
        justifyItems="flex-end"
      >
        <Heading px="0px" flexGrow="1">
          {label}
        </Heading>
        <Image
          src={`https://flagsapi.codeaid.io/${label}.png`}
          alt={label}
          w="53px"
          h="37px"
          mx="20px"
          objectFit={"cover"}
        />
      </Box>
      <Heading px="0px">{score}</Heading>
    </Box>
  );
}

export function AwayTeam({ label, score }) {
  return (
    <Box display="flex" alignItems="center" justifyItems="flex-start">
      <Heading pr="20px">{score}</Heading>
      <Image
        src={`https://flagsapi.codeaid.io/${label}.png`}
        alt={label}
        w="53px"
        h="37px"
        mx="20xp"
        objectFit={"cover"}
      />
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
