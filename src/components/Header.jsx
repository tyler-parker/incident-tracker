import React from "react";  
import {      
    Flex,  
    useColorModeValue,
    Box,
    Portal  
} from "@chakra-ui/react";  

import { HeaderContent } from "./HeaderContent";
  
const Navbar = props => {  
  
    return (
        <Box>
            <Portal>
                <Flex  
                    as="nav"  
                    align="center"  
                    justify="space-between"  
                    wrap="wrap"  
                    padding="1.5rem"  
                    bg={useColorModeValue("gray.600", "gray.900")}  
                    color="teal.300"  
                    borderBottom="1px solid black" 
                    position='fixed'
                    top="0" 
                    w='100%' 
                >  

                    <HeaderContent />

                </Flex>  
            </Portal>

        </Box>  
    );  
};  
  
export default Navbar;  