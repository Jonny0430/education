import { Stack } from "@chakra-ui/react"
import SoulteBooksPage from "./SoulteBooksPage"
import GrammarListPage from "./GrammarListPage"

const KoreanPage = () => {
    return (
        <Stack>
            <GrammarListPage />
            <SoulteBooksPage />
        </Stack>
    )
}

export default KoreanPage