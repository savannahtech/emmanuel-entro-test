"use client";
import { Box, Text, VStack } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

const TabSelector = ({
  selectedTab,
  setSelectedTab,
  tab: { id, name },
}: {
  tab: {
    id: number;
    name: string;
  };
  selectedTab: number;
  setSelectedTab?: Dispatch<SetStateAction<number>>;
}) => (
  <VStack
    cursor="pointer"
    transition="all 200ms ease-in-out"
    onClick={() => setSelectedTab && setSelectedTab(id)}
  >
    <Text
      color={selectedTab === id ? "laminar.gray.900" : "laminar.gray.600"}
      fontSize="sm"
      fontWeight="semibold"
    >
      {name}
    </Text>
    <Box
      w="full"
      h="1px"
      borderRadius="full"
      bg={selectedTab === id ? "laminar.gray.900" : "none"}
    />
  </VStack>
);

export default TabSelector;
