import React from "react";
import { useSelector } from "react-redux";
import LeftChecklist from "./LeftChecklist";

const LeftLists = () => {
  const lists = useSelector((state) => state.lists.lists);
  
  return (
    <>
      {lists.map((list) => (
        <LeftChecklist key={list.id} {...list} lists={ lists }/>
      ))}
    </>
  );
};

export default LeftLists;