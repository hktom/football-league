import { Box, Heading } from "@chakra-ui/react";

function Layout({ children, title }) {
  return (
    <Box>
      <Heading textAlign={"center"}>{title}</Heading>

      <Box maxW="90%" mx="auto" mt="20px" minHeight="74vh">
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
        <Heading fontSize="14px" color="footer.color">
          API Version:1.0
        </Heading>
      </Box>
    </Box>
  );
}

export default Layout;
