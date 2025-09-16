import { Stack, useColorModeValue } from "@chakra-ui/react"
import Narx from "./Narx"
import KoreanPricing from "./KoreanPricing"

const TestPage = () => {
    const pageBg = useColorModeValue("#f4faff", "#0b1220");
    
    return (
        <Stack bg={pageBg} minH="calc(100vh - 64px)">
            <Narx />
            <KoreanPricing />
        </Stack>
    )
}

export default TestPage