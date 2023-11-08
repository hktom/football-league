import { Box, Img } from "@chakra-ui/react";

function NoFound() {
    return (
        <Box mx="auto" display={'flex'} justifyContent={'center'}>
            <Img src="/Images/404.png" alt="404" />
        </Box>
    );
}

export default NoFound;