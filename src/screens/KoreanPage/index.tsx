import { Stack } from "@chakra-ui/react"
import GrammarListPage from "./GrammarListPage"
import BooksPage from "./BooksPage"

const KoreanPage = () => {
    return (
        <Stack>
            <GrammarListPage />
            <BooksPage />
        </Stack>
    )
}

export default KoreanPage