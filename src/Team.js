import { Box, Text, Image } from "@chakra-ui/react";

export function HomeTeam({ label, score }) {
  return (
    <Box display="flex" alignItems="center" justifyItems="flex-end">
      <Box
        flexGrow="1"
        display="flex"
        alignItems="center"
        justifyItems="flex-end"
      >
        <Text className="bold-cell" px="0px" flexGrow="1">
          {label}
        </Text>
        <Image
          src={`https://flagsapi.codeaid.io/${label}.png`}
          alt={label}
          w="53px"
          h="37px"
          mx="20px"
          objectFit={"cover"}
        />
      </Box>
      <Text className="bold-cell" px="0px">{score}</Text>
    </Box>
  );
}

export function AwayTeam({ label, score }) {
  return (
    <Box display="flex" alignItems="center" justifyItems="flex-start">
      <Text className="bold-cell" pr="20px">{score}</Text>
      <Image
        src={`https://flagsapi.codeaid.io/${label}.png`}
        alt={label}
        w="53px"
        h="37px"
        mx="20xp"
        objectFit={"cover"}
      />
      <Text className="bold-cell" px="20px">{label}</Text>
    </Box>
  );
}

export function SimpleTeam({ label }) {
  return (
    <Box display="flex" alignItems="center" justifyItems="flex-start">
      <Box>
        <Image
          src={`https://flagsapi.codeaid.io/${label}.png`}
          alt={label}
          w="53px"
          h="37px"
        />
      </Box>
      <Text className="bold-cell" px="20px">{label}</Text>
    </Box>
  );
}
