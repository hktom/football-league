import { Box, Image, Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import style from "./App.module.css";

const MenuLink = ({ logo, label, link }) => {
  return (
    <ChakraLink
      as={ReactRouterLink}
      to={link}
      display="flex"
      alignItems="center"
      justifyItems="flex-start"
      ml="40px"
      color={"header.menu"}
    >
      <Image src={logo} h="25px" mr="5px" />
      {label}
    </ChakraLink>
  );
};

function App() {
  return (
    <Box
      w={"100%"}
      bg="header.bg"
      h="60px"
      mb="60px"
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      px="40px"
    >
      <Box flexGrow="1">
        <Image src="/images/logo.svg" w="110px" />
      </Box>

      <MenuLink logo="/images/schedule.png" label="Schedule" link="/schedule" />
      <MenuLink logo="/images/leaderboard.png" label="LeaderBoard" link="/leaderboard" />
    </Box>
  );
}

export default App;
