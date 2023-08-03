"use client";
import { TaskProps, TasksMetaProps } from "@/types/Task.type";
import TaskCard from "../TaskCard";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Box } from "@chakra-ui/react";

const RelatedCard = ({
  fetchRelatedTask,
  userId,
  isSelectTask,
  selectedRelatedCards,
  handleSelectTask,
}: {
  fetchRelatedTask: (
    page: number,
    userId: number | null
  ) => Promise<TasksMetaProps>;
  userId: number | null;
  handleSelectTask?: (task: TaskProps) => void;
  selectedRelatedCards?: TaskProps[];
  isSelectTask?: boolean;
}) => {
  const [items, setItems] = useState<TaskProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    (async function () {
      const {
        data,
        page: p,
        totalPages,
      } = await fetchRelatedTask(page, userId);
      setItems(data);
      setPage(p);
      setTotalPage(totalPages);
    })();
  }, [fetchRelatedTask, page, userId]);

  // Simulate async loading of data
  const fetchMoreData = () => {
    if (page >= totalPage) {
      setHasMore(false);
      return;
    }

    // a fake async api call
    setTimeout(async () => {
      // setItems(Tasks.slice(0, items.length + 20));
      const {
        data,

        page: p,
        totalPages,
      } = await fetchRelatedTask(page + 1, userId);
      setItems(data);
      setPage(p);
      setTotalPage(totalPages);
    }, 0);
  };

  return (
    <Box w="100%" mt="20px">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>End of tasks</b>
        //   </p>
        // }
        className="space-y-6"
        style={{ width: "100%" }}
      >
        {items.map((task) => (
          <div
            key={task.id}
            onClick={() =>
              isSelectTask && handleSelectTask && handleSelectTask(task)
            }
          >
            <TaskCard
              task={task}
              isSelected={
                isSelectTask &&
                !!selectedRelatedCards?.find((t) => t.id == task.id)
              }
            />
          </div>
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export default RelatedCard;
