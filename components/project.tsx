"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import { Box, Card, Flex, Text, } from "@radix-ui/themes";


type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  href = "",
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
      <Flex gap="3" direction="column">
        <Box maxWidth="350px" className="hover:bg-blue-100">
          <Card size="2" variant="surface">
            <Flex gap="4" align="center">
              <a href={href}>
           <Image src={imageUrl} width={30} height={30} alt="Image" className="rounded-full aspect-square mb-4" />

                <Text as="div" size="5" weight="bold" className="mb-2">
                  {title}
                </Text>
                <Text as="div" color="gray" size="2">
                  {description}
                </Text>
              </a>
            </Flex>
          </Card>
        </Box>
      </Flex>
    </div>
  );
}