"use client";
import {
  Box,
  Text,
  Button,
  Divider,
  Flex,
  EditablePreview,
  EditableInput,
  Editable,
  EditableTextarea,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";
import { formatDateTime } from "@/utils/formatDate";
import { TaskProps, TasksMetaProps } from "@/types/Task.type";
import MenuComponent from "../Menu/Menu";
import { Task, User } from "@prisma/client";
import { useEffect, useState } from "react";
import TabSelector from "../TaskDetail/TabSelector";
import ModalComponent from "../Modal/Modal";
import RelatedCard from "../TaskList/RelatedCard";
import TaskCard from "../TaskCard";
import { useRouter } from "next/navigation";

function TaskCreation({
  users,
  fetchRelatedTask,
  createTask,
}: {
  users: User[];
  fetchRelatedTask: (
    page: number,
    userId: number | null
  ) => Promise<TasksMetaProps>;
  createTask(task: Task): Promise<void>;
}) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [taskTitle, setTaskTitle] = useState("New Task");
  const [taskCreationDate, setTaskCreationDate] = useState(new Date());
  const [taskDescription, setTaskDescription] = useState("");

  const [showMore, setShowMore] = useState(false);
  const tab = {
    name: "Related Tasks",
    id: 0,
  };
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedRelatedCards, setSelectedRelatedCards] = useState<TaskProps[]>(
    []
  );
  const toast = useToast();
  const router = useRouter();
  const handleSubmission = async () => {
    try {
      const data = {
        title: taskTitle,
        creationDate: taskCreationDate,
        description: taskDescription,
        taskAssigneeId: selectedUser?.id || null,
        status: "Open",
      } as Task;
      await createTask(data);
      router.push("/");
    } catch (e) {
      throw e;
    }
  };
  const handleSelectedTask = (task: TaskProps) => {
    const existingTask = !!selectedRelatedCards.find((t) => t.id == task.id);
    if (existingTask)
      return setSelectedRelatedCards(
        selectedRelatedCards.filter((t) => t.id != task.id)
      );
    setSelectedRelatedCards([...selectedRelatedCards, task]);
  };
  return (
    <Box padding="104px">
      <Box
        display="flex"
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        width="full"
        marginTop={5}
      >
        <Flex
          display="flex"
          paddingX={"32px"}
          paddingY={"24px"}
          flexDirection="column"
          alignItems="start"
          gap="24px"
          alignSelf="stretch"
          borderRadius="md"
          backgroundColor="laminar.gray.50"
          width="90%"
        >
          <Flex
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            gap={6}
            alignSelf="stretch"
          >
            <Flex
              display="flex"
              alignItems="center"
              gap={6}
              alignSelf="stretch"
            >
              <Flex
                borderRadius="10px"
                border="tag.sapphire.blue.400"
                backgroundColor="tag.sapphire.blue.1000"
                display="flex"
                width="64px"
                height="64px"
                justifyContent="center"
                alignItems="center"
                gap="24px"
              >
                <Image
                  src="/images/plus-circle.svg"
                  alt="Check"
                  boxSize={"40px"}
                />
              </Flex>
              <Box>
                <Editable value={taskTitle} onChange={setTaskTitle} mb={1}>
                  <EditablePreview />
                  <EditableInput
                  //   _focus={{ outline: "none", boxShadow: "none" }}
                  />
                </Editable>
                <Editable
                  value={formatDateTime(taskCreationDate)}
                  onChange={(e) => setTaskCreationDate(new Date(e))}
                >
                  <EditablePreview />
                  <EditableInput
                    type="datetime-local"
                    _focus={{ outline: "none", boxShadow: "none" }}
                  />
                </Editable>
              </Box>
            </Flex>
            <Flex alignItems="center" columnGap="20px">
              <Text
                color="laminar-gray-500"
                fontSize="13px"
                fontWeight="500"
                lineHeight="20px"
              >
                Assign to
              </Text>
              <MenuComponent
                selectedUser={selectedUser}
                users={users}
                setSelectedUser={setSelectedUser}
              />
            </Flex>
          </Flex>

          {/* Divider */}
          <Divider borderColor="laminar.gray.500" opacity="40" width="full" />

          {showMore && (
            <>
              <Box w="100%">
                <Text
                  color="laminar.gray.500"
                  fontSize="xs"
                  fontWeight="medium"
                  lineHeight="18px"
                >
                  Description
                </Text>
                <Box w="100%">
                  <Box
                    p={4}
                    borderRadius="lg"
                    bg="#EEF2F8"
                    minH="150px"
                    w="100%"
                    h="100%"
                  >
                    <Editable
                      value={taskDescription}
                      onChange={setTaskDescription}
                      w={"100%"}
                      color="laminar.gray.700"
                      fontSize="13px"
                      fontWeight="medium"
                      lineHeight="20px"
                    >
                      <EditablePreview w="70%" />
                      <EditableTextarea
                        w="100%"
                        h="100%"
                        minH="150px"
                        outline="none"
                        _focus={{ outline: "none", boxShadow: "none" }}
                      />
                    </Editable>
                  </Box>
                </Box>
              </Box>

              <Box>
                <HStack spacing={10} mb="20px">
                  <TabSelector tab={tab} selectedTab={0} />
                </HStack>

                <Box className="space-y-6">
                  {selectedRelatedCards.map((task) => (
                    <TaskCard key={task.id} task={task} />
                  ))}
                </Box>
                <Flex
                  alignItems={"center"}
                  mt="20px"
                  cursor="pointer"
                  onClick={() => setShowTaskModal(true)}
                >
                  <Image src="/images/plus.svg" alt="Check" boxSize={"24px"} />
                  <Text
                    color="laminar.gray.700"
                    fontSize="16px"
                    fontWeight="500"
                    lineHeight="18px"
                    ml="10px"
                  >
                    Link to other tasks
                  </Text>
                </Flex>

                {showTaskModal && (
                  <ModalComponent
                    isOpen={showTaskModal}
                    onClose={() => setShowTaskModal(false)}
                    modalTitle="Related Tasks"
                  >
                    <RelatedCard
                      fetchRelatedTask={fetchRelatedTask}
                      userId={selectedUser?.id || null}
                      isSelectTask
                      handleSelectTask={handleSelectedTask}
                      selectedRelatedCards={selectedRelatedCards}
                    />
                  </ModalComponent>
                )}
              </Box>
            </>
          )}
          <Flex display="flex" gap={"24px"} justifyContent="end" width="full">
            <Button
              w="fit-content"
              paddingX="36px"
              borderRadius="6px"
              fontFamily="inter"
              fontSize="12px"
              fontWeight="500"
              lineHeight="20px"
              size="sm"
              color="white"
              textColor={!showMore ? "white" : "laminar.gray.700"}
              _hover={{ bg: !showMore ? "tag.sapphire.blue.1000" : "none" }}
              bg={!showMore ? "tag.sapphire.blue.1000" : "none"}
              variant={!showMore ? "solid" : "outline"}
              onClick={() =>
                !showMore ? setShowMore(true) : setShowMore(false)
              }
            >
              {showMore ? "Back" : "Next"}
            </Button>
            <Button
              w="fit-content"
              paddingY="10px"
              paddingX="36px"
              borderRadius="6px"
              fontFamily="inter"
              fontSize="12px"
              fontWeight="500"
              lineHeight="20px"
              color="white"
              size="sm"
              textColor={showMore ? "white" : "laminar.gray.700"}
              _hover={{ bg: showMore ? "tag.sapphire.blue.1000" : "none" }}
              bg={showMore ? "tag.sapphire.blue.1000" : "none"}
              variant={showMore ? "solid" : "outline"}
              onClick={handleSubmission}
            >
              Finish
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default TaskCreation;
