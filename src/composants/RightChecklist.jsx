import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateList } from "./listsData/ListSlice";

const RightChecklist = ({ lists, status }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const filteredLists = lists.filter((list) => list.status === status);

  const goToChecklist = () => {
    navigate('/checklist')
  } 

  const goToFormulaire = (listId, listTitle, listDescription) => {
    dispatch(
      updateList({
        listTargetId: listId,
        newTitle: listTitle,
        newDescription: listDescription,
      })
    );

    navigate("/formulaire", {
      state: {
        id: listId,
        title: listTitle,
        description: listDescription,
      },
    });
  };

  return (
    <div className="TableListDiv">
      <table className="ListTable">
        <thead>
          <tr>
            <th scope="col">List {status}</th>
          </tr>
        </thead>
        <tbody>
          {filteredLists.map((list) => (
            <tr key={list.id}>
              <td
                scope="row"
                className="list">
                  <p
                onClick={ goToChecklist }>- {list.title}</p>
      

                <div>
                  <img src="./settings.svg"
                  onClick={() =>
                  goToFormulaire(list.id, list.title, list.description)
                  }/>
                  <img src="./delete.svg"/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RightChecklist;