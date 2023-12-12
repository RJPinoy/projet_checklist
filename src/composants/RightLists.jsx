import React from "react";
import { useSelector } from "react-redux";
import RightChecklist from "./RightChecklist";

const RightLists = () => {
  const lists = useSelector((state) => state.lists.lists);

  return (
    <>
      <RightChecklist lists={lists} statut={ 1 } statutString="in progress" />
      <RightChecklist lists={lists} statut={ 0 } statutString="blank" />
      <RightChecklist lists={lists} statut={ 2 } statutString="completed" />
    </>
  );
};

export default RightLists;