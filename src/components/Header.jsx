import React from "react";  
import {      
    Flex,  
    useColorModeValue  
} from "@chakra-ui/react";  

import { HeaderContent } from "./HeaderContent";
  
const Navbar = props => {  
  
    return (  
        <Flex  
            as="nav"  
            align="center"  
            justify="space-between"  
            wrap="wrap"  
            padding="1.5rem"  
            bg={useColorModeValue("gray.600", "gray.900")}  
            color="teal.300"  
            borderBottom="1px solid black"  
            {...props}  
        >  

             <HeaderContent />

        </Flex>  
    );  
};  
  
export default Navbar;  