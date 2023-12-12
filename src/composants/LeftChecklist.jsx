import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateList, deleteList } from "./listsData/ListSlice";
import { deleteDataFromApi } from "./Axios";

const LeftChecklist = ({ id, title, description, todo, statut }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();  
  const location = useLocation();

  const goToChecklist = () => {
      navigate(`/checklist/:id=${id}`, {
        state: {
          id,
          title,
          description,
          todo,
          statut
        },
      });
  };
  
  const goToFormulaire = () => {
    const newTasks = todo.map((task) => ({ ...task }));
  
    dispatch(
      updateList({
        listTargetId: id,
        newTitle: title,
        newDescription: description,
        newTasks: newTasks,
      })
    );
  
    navigate("/formulaire", {
      state: {
        id,
        title,
        description,
        todo: newTasks,
        statut,
      },
    });
  };
  
  const deleteListToState = () => {
    dispatch(
      deleteList({listTargetId: id})
    );

    deleteDataFromApi(id);

    if (id === location.state.id) {
      navigate('/');
    }
  }

  const countInProgressTasks = todo.reduce(
    (count, task) => (task.statut === 1 ? count + 1 : count),
    0
  );

  return (
    <li className="list">
      <p onClick={goToChecklist}>
        - <span>{title} </span>
        
        ({countInProgressTasks}/{todo.length})
          <span>
            {countInProgressTasks > 0 && countInProgressTasks < todo.length
              ? ' (in progress)' : countInProgressTasks === todo.length
              ? ' (completed)' : ' (blank)'}
          </span>
      </p>
  
      <div>
        <img className="settings" src="../settings.svg" onClick={goToFormulaire} />
        <img className="delete" src="../delete.svg" onClick={deleteListToState} />
      </div>
    </li>
  );  
};

export default LeftChecklist;