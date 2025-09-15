import { Box, useColorModeValue } from "@chakra-ui/react"
import BooksGrid from "./BooksGrid"


const SoultePage = () => {

    const pageBg = useColorModeValue("#f4faff", "#0b1220");
    
    return (
         <Box bg={pageBg} minH="calc(100vh - 64px)"> 
            <BooksGrid />
        </Box>
    )
}

export default SoultePage