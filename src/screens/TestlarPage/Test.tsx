"use client";
import {
  HStack, Select, Input, Tag, TagLabel, TagCloseButton, Wrap, WrapItem,
} from "@chakra-ui/react";
import { useState } from "react";

export type FilterState = {
  category: "HAMMASI" | "TOPIK" | "ISHCHI";
  level: "HAMMASI" | "Boshlang'ich" | "O'rta 1" | "O'rta 2" | "Yuqori" | "Ishchilar";
  query: string;
};
export default function TestFilters({
  value, onChange,
}: { value: FilterState; onChange: (v: FilterState) => void }) {
  const [local, setLocal] = useState(value);

  const apply = (patch: Partial<FilterState>) => {
    const next = { ...local, ...patch };
    setLocal(next);
    onChange(next);
  };
  return (
    <HStack spacing={3} flexWrap="wrap">
      <Select w="200px" value={local.category}
        onChange={(e) => { apply({ category: e.target.value as FilterState["category"] }); }}>
        <option value="HAMMASI">Barcha bo‘limlar</option>
        <option value="TOPIK">TOPIK</option>
        <option value="ISHCHI">Ishchilar imtihoni</option>
      </Select>

      <Select w="220px" value={local.level}
        onChange={(e) => { apply({ level: e.target.value as FilterState["level"] }); }}>
        <option value="HAMMASI">Bosqich: barchasi</option>
        <option value="Boshlang'ich">Boshlang‘ich</option>
        <option value="O'rta 1">O‘rta (초급)</option>
        <option value="O'rta 2">O‘rta 2</option>
        <option value="Yuqori">Yuqori</option>
        <option value="Ishchilar">Ishchilar</option>
      </Select>

      <Input
        w="280px"
        placeholder={`Qidirish: "particles", "읽기"`}
        value={local.query}
        onChange={(e) => { apply({ query: e.target.value }); }}
      />

      <Wrap>
        <WrapItem>
          <Tag size="md" variant="subtle" colorScheme="purple">
            <TagLabel>Review rejimi: Natijada</TagLabel>
            <TagCloseButton isDisabled />
          </Tag>
        </WrapItem>
      </Wrap>
    </HStack>
  );
}
