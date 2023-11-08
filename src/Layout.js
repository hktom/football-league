import { Box, Heading, Text } from "@chakra-ui/react";

function Layout({ children, title }) {
  return (
    <Box>
      <Heading textAlign={"center"} fontSize={"24px"}>{title}</Heading>

      <Box maxW="90%" mx="auto" mt="20px" minHeight="76vh">
        {children}
      </Box>

      <Box
        height="40px"
        backgroundColor="footer.bg"
        px="40px"
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Text fontSize="14px" color="footer.color">
          API Version:1.0
        </Text>
      </Box>
    </Box>
  );
}

export default Layout;
