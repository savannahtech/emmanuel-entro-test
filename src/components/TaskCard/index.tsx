import { Box, Flex, Image, Link, Text, Button } from "@chakra-ui/react";
import { formatDateTime } from "@/utils/formatDate";
import NextLink from "next/link";
import { TaskProps } from "@/types/Task.type";
import { useRouter } from "next/navigation";
const TaskCard = ({
  task,
  isSelected,
}: {
  task: TaskProps;
  isSelected?: boolean;
}) => {
  const router = useRouter();
  return (
    <Box
      bg="white"
      boxShadow="card_row"
      borderRadius="lg"
      p={8}
      pr={11}
      display="flex"
      alignItems="center"
      flexDirection={["column", "row"]}
      gap={3}
      justifyContent="space-between"
      border={isSelected ? "2px" : "1px"}
      borderColor={isSelected ? "tag.sapphire.blue.400" : "laminar.gray.100"}
      onClick={() =>
        isSelected === undefined && router.push(`/details/${task.id}`)
      }
      cursor="pointer"
    >
      {/* Left */}
      <Flex gap={6}>
        {/* Logo */}
        <Box
          w={16}
          h={16}
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="lg"
          border="1px"
          borderColor="tag.sapphire.blue.400"
          bg="tag.sapphire.blue.1000"
          gap={6}
        >
          <Image src="/images/pocket.svg" alt="Check" boxSize={10} />
        </Box>
        <Flex direction="column" justify="space-around" cursor="pointer">
          <Text
            color="laminar.gray.1000"
            fontSize="14px"
            fontWeight="semibold"
            lineHeight="18px"
          >
            {task.title}
          </Text>
          <Flex align="center" gap={2}>
            <Box
              color="laminar.gray.500"
              fontSize="xs"
              fontWeight="semibold"
              lineHeight="18px"
            >
              {task?.taskAssignee?.name || "Unassigned"}
            </Box>
            <Text
              color="laminar.gray.500"
              fontSize="xs"
              fontWeight="medium"
              lineHeight="18px"
            >
              Creation Date
            </Text>
            <Text
              color="laminar.gray.600"
              fontSize="xs"
              fontWeight="normal"
              lineHeight="18px"
            >
              {formatDateTime(task.creationDate)}
            </Text>
          </Flex>
        </Flex>
      </Flex>
      {/* Right */}

      <Flex
        align="center"
        pl={8}
        borderLeft={[0, "1px"]}
        borderColor="laminar.gray.200"
        cursor="pointer"
        gap={4}
      >
        <Button
          color="laminar.gray.700"
          fontSize="12px"
          lineHeight="20"
          fontWeight={500}
          borderWidth="1px"
          borderColor="laminar.gray.200"
          borderRadius="6px"
          background="transparent"
        >
          {task.status}
        </Button>
        <Box boxSize={6}>
          <Image src="/images/chevron-right.svg" alt="Chevron" />
        </Box>
      </Flex>
    </Box>
  );
};

export default TaskCard;
