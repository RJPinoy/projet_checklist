import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateList, deleteList, getListId } from "./listsData/ListSlice";
import { deleteDataFromApi } from "./Axios";

const RightChecklist = ({ lists, statut, statutString }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filteredLists = lists.filter((list) => list.statut === statut);

  const goToChecklist = (listId, listTitle, listDescription, listStatus) => {
    navigate(`/checklist/:id=${listId}`, {
      state: {
        id: listId,
        title: listTitle,
        description: listDescription,
        statut: listStatus,
      },
    });
  };

  const goToFormulaire = (listId, listTitle, listDescription, todo) => {
    const newTasks = [...todo];
    console.log(todo)
  
    dispatch(
      updateList({
        listTargetId: listId,
        newTitle: listTitle,
        newDescription: listDescription,
        newTasks: newTasks,
      })
    );
  
    navigate("/formulaire", {
      state: {
        id: listId,
        title: listTitle,
        description: listDescription,
        todo: newTasks,
      },
    });
  };
  
  const deleteListToState = (listId) => {
    const deleteConfirmDiv = document.getElementById('bgDeleteConfirm');

    deleteConfirmDiv.classList.toggle('d-none');
    
    dispatch(getListId(listId));
  }

  return (
    <div className="TableListDiv">
      <table className="ListTable">
        <thead>
          <tr>
            <th scope="col">List {statutString}</th>
          </tr>
        </thead>
        <tbody>
          {filteredLists.map((list) => {
            const countInProgressTasks = list.todo.reduce(
              (count, task) => (task.statut === 1 ? count + 1 : count),
              0
            );
  
            return (
              <tr key={list.id}>
                <td scope="row" className="list">
                  <p
                    onClick={() =>
                      goToChecklist(
                        list.id,
                        list.title,
                        list.description,
                        list.statut
                      )
                    }
                  >
                    - {list.title} ({countInProgressTasks} / {list.todo.length})
                  </p>
  
                  <div>
                    <img
                      className="settings"
                      src="./settings.svg"
                      onClick={() =>
                        goToFormulaire(
                          list.id,
                          list.title,
                          list.description,
                          list.todo
                        )
                      }
                    />
                    <img
                      className="delete"
                      src="./delete.svg"
                      onClick={() => deleteListToState(list.id)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );  
};

export default RightChecklist;