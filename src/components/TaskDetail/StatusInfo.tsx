"use client";
import { Flex, Text, VStack } from "@chakra-ui/react";

const StatusInfo = ({
  title,
  value,
}: {
  title: string;
  value: string | null;
}) => (
  <VStack spacing="6px">
    <Text
      color="laminar.gray.500"
      fontSize="xs"
      fontWeight="medium"
      lineHeight="18px"
    >
      {title}
    </Text>
    <Flex
      p="4px"
      px={3}
      justifyContent="center"
      alignItems="center"
      borderRadius="full"
      bg="#EEF2F8"
    >
      <Text
        color="laminar.gray.700"
        fontSize="13px"
        fontWeight="medium"
        lineHeight="20px"
      >
        {value}
      </Text>
    </Flex>
  </VStack>
);

export default StatusInfo;
