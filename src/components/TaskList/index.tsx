"use client";
import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import TaskCard from "../TaskCard";
import { TaskProps, TasksMetaProps } from "@/types/Task.type";
import { Box, Skeleton } from "@chakra-ui/react";

const TaskList = ({
  fetchTasks,
}: {
  fetchTasks: (page?: number) => Promise<TasksMetaProps>;
}) => {
  // Initial state
  const [items, setItems] = useState<TaskProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    (async function () {
      console.timeStamp("fetching initial data ... ");
      const { data, page: p, totalPages } = await fetchTasks(page);
      setItems(data);
      setPage(p);
      setTotalPage(totalPages);
      console.timeStamp("fetching initial data ... ");
    })();
  }, [fetchTasks, page]);

  // Simulate async loading of data
  const fetchMoreData = () => {
    if (page >= totalPage) {
      setHasMore(false);
      return;
    }

    // a fake async api call
    setTimeout(async () => {
      // setItems(Tasks.slice(0, items.length + 20));
      const { data, counts, page: p, totalPages } = await fetchTasks(page + 1);
      setItems(data);
      setPage(p);
      setTotalPage(totalPages);
    }, 0);
  };

  return (
    <Box mt={5} w="100%">
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={
          <Box className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton
                key={0}
                height="100px"
                borderRadius="10px"
                boxShadow="lg"
                w="100%"
              ></Skeleton>
            ))}
          </Box>
        }
        // endMessage={
        //   <p style={{ textAlign: "center" }}>
        //     <b>End of tasks</b>
        //   </p>
        // }
        className="space-y-6"
        style={{ width: "100%" }}
      >
        {items.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </InfiniteScroll>
    </Box>
  );
};

export default TaskList;
