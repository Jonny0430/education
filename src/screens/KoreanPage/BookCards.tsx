"use client";
import {
  Box, VStack, Text, HStack, Badge, Image,
  Button, IconButton, Tooltip, Menu, MenuButton, MenuList, MenuItem, Avatar
} from "@chakra-ui/react";
import { DownloadIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { FiMoreVertical } from "react-icons/fi";
import type { BookDetail } from "./BookDetailDrawer";

type Props = {
  b: BookDetail & { authorImg?: string }; // yangi maydon ixtiyoriy
  onOpenDetail: (b: BookDetail) => void;
};

const USE_PROXY = false;
const makeDownloadHref = (url: string, filename?: string) =>
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  USE_PROXY ? `/api/download?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename ?? "file")}` : url;

export default function BookCards({ b, onOpenDetail }: Props) {
  const attachments = b.attachments ?? [];
  const main = attachments.find(a => a.kind !== "link") ?? attachments[0];

  const handleMainDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!main) return;
    const href = makeDownloadHref(main.url, main.name);
    const a = document.createElement("a");
    a.href = href;
    if (main.kind !== "link") a.download = "";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleOne = (e: React.MouseEvent, url: string, name?: string, isLink?: boolean) => {
    e.stopPropagation();
    const href = makeDownloadHref(url, name);
    const a = document.createElement("a");
    a.href = href;
    if (!isLink) a.download = "";
    a.target = "_blank";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    const files = attachments.filter(a => a.kind !== "link");
    if (files.length === 0) return;
    files.forEach(aItem => {
      const href = makeDownloadHref(aItem.url, aItem.name);
      const tag = document.createElement("a");
      tag.href = href;
      tag.download = "";
      tag.target = "_blank";
      document.body.appendChild(tag);
      tag.click();
      tag.remove();
    });
  };

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="gray.800"
      color="gray.100"
      cursor="pointer"
      _hover={{ transform: "translateY(-2px)", boxShadow: "xl" }}
      transition="all .2s"
      onClick={() => { onOpenDetail(b); }}
    >
      {/* Asosiy kitob muqovasi */}
      <Image src={b.cover} alt={b.title} w="100%" h="160px" objectFit="cover" />

      <VStack align="start" spacing={2} p={3}>
        <HStack w="full" justify="space-between">
          <Text fontWeight="bold" noOfLines={2}>{b.title}</Text>
          {/* Muallif rasmi yoki logotip */}
          {b.authorImg && <Avatar size="sm" src={b.authorImg} name={b.authors[0]} />}
        </HStack>

        <HStack spacing={2}>
          <Badge>{b.pairLang ?? "KO → UZ"}</Badge>
          <Badge variant="subtle" colorScheme="yellow">{b.rating.toFixed(1)}</Badge>
        </HStack>

        <HStack justify="space-between" w="full">
          <Text fontWeight="semibold">${b.price}</Text>
          {b.oldPrice && <Text as="s" color="gray.500">${b.oldPrice}</Text>}
        </HStack>

        {/* Yuklab olish tugmalari */}
        {attachments.length > 0 && (
          <HStack w="full" pt={1} justify="space-between">
            <Tooltip label={main.kind === "link" ? "Havolani ochish" : "Yuklab olish"}>
              <Button
                size="sm"
                variant="outline"
                leftIcon={main.kind === "link" ? <ExternalLinkIcon /> : <DownloadIcon />}
                onClick={handleMainDownload}
              >
                {main.kind === "link" ? "Open" : "Yuklab olish"}
              </Button>
            </Tooltip>

            {attachments.length > 1 && (
              <Menu isLazy>
                <MenuButton
                  as={IconButton}
                  aria-label="Boshqa fayllar"
                  icon={<FiMoreVertical />}
                  size="sm"
                  variant="ghost"
                  onClick={(e) => { e.stopPropagation(); }}
                />
                <MenuList onClick={(e) => { e.stopPropagation(); }}>
                  {attachments.map(a => (
                    <MenuItem
                      key={a.id}
                      icon={a.kind === "link" ? <ExternalLinkIcon /> : <DownloadIcon />}
                      onClick={(e) => { handleOne(e, a.url, a.name, a.kind === "link"); }}
                    >
                      {a.name}{a.size ? ` — ${a.size}` : ""}
                    </MenuItem>
                  ))}
                  {attachments.some(a => a.kind !== "link") && (
                    <MenuItem icon={<DownloadIcon />} onClick={handleAll}>
                      Barchasini yuklab olish
                    </MenuItem>
                  )}
                </MenuList>
              </Menu>
            )}
          </HStack>
        )}
      </VStack>
    </Box>
  );
}
