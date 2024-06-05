import React from "react";
import { Flex, Spin } from "antd";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[70vh] ">
      <Flex align="center" gap="middle">
        <Spin size="small" />
        <Spin />
        <Spin size="large" />
      </Flex>
    </div>
  );
};

export default Loading;
