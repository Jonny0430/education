// src/components/KoreanFAQ.tsx
"use client";
import type { FC } from "react";
import {
  Box,
  Container,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

type FaqItem = { id: string; q: string; a: string };

const FAQS: FaqItem[] = [
  {
    id: "what-included",
    q: "Kurs nimalarni o‘z ichiga oladi?",
    a: "Hangul (alifbo)dan boshlab A1–B1 grammatika, so‘z boyligini oshirish, talaffuz va tinglab tushunish mashqlari, TOPIK I/II testlari, uy vazifalari va mentor fikr-mulohazasi kiradi.",
  },
  {
    id: "level-test",
    q: "Qaysi darajadan boshlashim kerak? Joylash test bormi?",
    a: "Ha. Ro‘yxatdan o‘tgandan so‘ng 10–15 daqiqalik onlayn placement testni bajarib, tizim sizga mos darajani (A1, A2, B1) tavsiya qiladi.",
  },
  {
    id: "format",
    q: "Darslar formati qanday — jonli yoki yozib olinganmi?",
    a: "Har hafta 2 ta jonli sessiya (Zoom) va oldindan yozib olingan videolar mavjud. Jonli darslar yozib olinadi va istalgan vaqtda qayta ko‘rishingiz mumkin.",
  },
  {
    id: "schedule",
    q: "Darslar jadvali va davomiyligi qancha?",
    a: "Har hafta 2–3 marta, 60–90 daqiqadan. Bir modul 4–6 hafta davom etadi. TOPIK tayyorlov kurslari 8 haftalik maxsus dastur hisoblanadi.",
  },
  {
    id: "homework",
    q: "Uy vazifalari va tekshiruv bo‘ladimi?",
    a: "Ha. Har darsdan keyin qisqa topshiriqlar beriladi. Mentorlar haftasiga kamida 1 marta izoh yoki ovozli fikr bildiradilar.",
  },
  {
    id: "topik",
    q: "TOPIK imtihoniga tayyorgarlik qanday olib boriladi?",
    a: "Hafta davomida real-format testlar, vaqt cheklovi bilan sinovlar va savol tahlillari qilinadi. Eski TOPIK savollari ham ishlatiladi.",
  },
  {
    id: "certificate",
    q: "Kurs yakunida sertifikat beriladimi?",
    a: "Modulni 70% va undan ko‘p bajarib, yakuniy testni topshirganingizdan so‘ng raqamli sertifikat beriladi.",
  },
  {
    id: "devices",
    q: "Qaysi qurilmalarda ishlayman?",
    a: "Kompyuter, planshet yoki telefonda ishlashi mumkin. Chrome yoki Safari brauzerining so‘nggi versiyasidan foydalanish tavsiya etiladi.",
  },
  {
    id: "payments",
    q: "To‘lov va qaytarish siyosati qanday?",
    a: "To‘lovlar oyma-oy amalga oshiriladi. Birinchi 7 kun ichida kurs sizga mos kelmasa, to‘liq qaytarish so‘rashi mumkin.",
  },
  {
    id: "support",
    q: "Savollarim bo‘lsa kimga murojaat qilaman?",
    a: "Platformadagi chat orqali 24/7 yordam, email qo‘llab-quvvatlash va guruh uchun Telegram kanali mavjud.",
  },
];

const KoreanFAQ: FC = () => {
  const pageBg   = useColorModeValue("gray.50", "#0b1220");
  const panelBg  = useColorModeValue("white", "rgba(255,255,255,0.06)");
  const border   = useColorModeValue("blackAlpha.200", "whiteAlpha.200");
  const titleClr = useColorModeValue("gray.900", "white");
  const textClr  = useColorModeValue("gray.700", "gray.300");
  const accent   = useColorModeValue("teal.500", "teal.300");

  return (
    <Box bg={pageBg} py={{ base: 8, md: 12 }} fontFamily={'serif'}>
      <Container maxW="6xl" px={{ base: 4, md: 6 }}>
        <Heading
          as="h2"
          textAlign="center"
          fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
          mb={{ base: 6, md: 8 }}
          color={titleClr}
          fontFamily={'serif'}
        >
          Tez-tez so‘raladigan savollar
        </Heading>

        <Box
          bg={panelBg}
          border="1px solid"
          borderColor={border}
          rounded="2xl"
          shadow="lg"
          overflow="hidden"
        >
          <Accordion allowMultiple defaultIndex={[0]}>
            {FAQS.map((item, idx) => (
              <AccordionItem key={item.id} borderTopWidth={idx === 0 ? 0 : "1px"} borderColor={border}>
                {({ isExpanded }) => (
                  <>
                    <h3>
                      <AccordionButton
                        px={{ base: 4, md: 6 }}
                        py={{ base: 4, md: 5 }}
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        _hover={{ bg: useColorModeValue("blackAlpha.50", "whiteAlpha.100") }}
                      >
                        <Box as="span" flex="1" textAlign="left" fontWeight="semibold" color={titleClr}>
                          {item.q}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel px={{ base: 4, md: 6 }} pb={{ base: 5, md: 6 }}>
                      <Box
                        borderLeft="4px solid"
                        borderColor={isExpanded ? accent : "transparent"}
                        pl={4}
                      >
                        <Text color={textClr}>{item.a}</Text>
                      </Box>
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default KoreanFAQ;
