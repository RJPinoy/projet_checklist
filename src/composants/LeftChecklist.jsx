import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateList } from "./listsData/ListSlice";

const LeftChecklist = ({ id, title, description, status }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToChecklist = () => {
      navigate('/checklist')
  }

  const goToFormulaire = () => {
    dispatch(
      updateList({
        listTargetId: id,
        newTitle: title,
        newDescription: description,
      })
    );

    navigate("/formulaire", {
      state: {
        id,
        title,
        description,
      },
    });
  };

  return (
    <li className="list">
      <p onClick={ goToChecklist }>- {title} ({status})</p>
      

      <div>
        <img src="./settings.svg" onClick={ goToFormulaire }/>
        <img src="./delete.svg"/>
      </div>
    </li>
  );
};

export default LeftChecklist;