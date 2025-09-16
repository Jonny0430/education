import { Stack } from "@chakra-ui/react"
import KoreaWeeklyHero from "./KoreaWeeklyHero"
import KoreaTopStories from "./KoreaTopStories"
import KoreaCardsGrid from "./KoreaCardsGrid"

const XabarPage = () => {
  return (
    <Stack>
      <KoreaWeeklyHero
          article={{
            title: "Seul – smart-shahar tajribasi va yashil transport",
            excerpt:
              "Seul IoT infratuzilmasi, aqlli kameralar va metro tarmog‘i bilan urban mobilitetda ilg‘or. Veloyo‘laklar kengaymoqda, vodorod avtobuslar sinovdan o‘tmoqda.",
            image: "https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1400&auto=format&fit=crop",
            href: "/news/seoul-smart-city",
            tag: "Koreya",
            date: "2025-09-10",
          }}
        />
        <KoreaTopStories />
        <KoreaCardsGrid />
    </Stack>
  )
}

export default XabarPage