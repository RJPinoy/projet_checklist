import React from "react";
import { useSelector } from "react-redux";
import RightChecklist from "./RightChecklist";

const RightLists = () => {
  const lists = useSelector((state) => state.lists.lists);

  return (
    <>
      <RightChecklist lists={lists} status="in progress" />
      <RightChecklist lists={lists} status="blank" />
      <RightChecklist lists={lists} status="completed" />
    </>
  );
};

export default RightLists;