import Header from "../composants/Header";
import LeftLists from "../composants/LeftLists";
import Task from "../composants/Task";
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateList, getListId } from "../composants/listsData/ListSlice";
import { updateDataFromApi } from "../composants/Axios";
import DeleteConfirm from "../composants/DeleteConfirm";

const Checklist = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    
    const list = useSelector((state) =>
    location.state?.id
        ? state.lists.lists.find((listItem) => listItem.id === location.state.id)
        : null
    );

    const goToFormulaireNew = () => {
        navigate('/formulaire');
    };

    const goToFormulaireUpdate = () => {
        dispatch(
            updateList({
                listTargetId: list.id,
                newTitle: list.title,
                newDescription: list.description,
                newTasks: list.todo,
            })
        );
      
        navigate("/formulaire", {
            state: {
                id: list.id,
                title: list.title,
                description: list.description,
                todo: list.todo,
            },
        });
    };
  
    const deleteListToState = () => {
        const deleteConfirmDiv = document.getElementById('bgDeleteConfirm');
    
        deleteConfirmDiv.classList.toggle('d-none');
        
        dispatch(getListId(list.id));
    }

    const countInProgressTasks = list.todo.reduce(
        (count, task) => (task.statut === 1 ? count + 1 : count),
        0
    );

    const changeTaskStatut = (index) => {
        const updatedTasks = [...list.todo];
        updatedTasks[index] = {
            ...list.todo[index],
            statut: list.todo[index].statut === 0 ? 1 : 0,
        };
    
        dispatch(
            updateList({
                listTargetId: list.id,
                newTitle: list.title,
                newDescription: list.description,
                newTasks: updatedTasks,
            })
        );
    
        updateDataFromApi(list.id, {
            id: list.id,
            title: list.title,
            description: list.description,
            statut: list.statut,
            todo: updatedTasks,
        });
    };
      
    return (  
        <>
            <DeleteConfirm />

            <Header />

            <div id='content'>
                <section id='left'>
                    <article id='navHeader'>
                        <h2>My lists :</h2>
                    </article>

                    <nav id='nav'>
                        <ul>
                            <LeftLists />
                        </ul>
                    </nav>

                    <article id='newList'>
                        <button onClick={ goToFormulaireNew }>+</button>
                    </article>
                </section>

                <section id='rightChecklist'>
                    <article id="checklistHeader">
                        <div>
                            <p>
                                { list.title } 
                                <span>
                                    {countInProgressTasks > 0 && countInProgressTasks < list.todo.length
                                        ? ' (in progress)' : countInProgressTasks === list.todo.length
                                        ? ' (completed)' : ' (blank)'}
                                </span>
                                <br/>
                                { list.description }
                                <br/>
                                ({ countInProgressTasks }/{ list.todo.length })
                            </p>
                        </div>

                        <div>
                            <img className="settings" src="../settings.svg" onClick={ goToFormulaireUpdate }/>
                            <img className="delete" src="../delete.svg" onClick={ deleteListToState }/>
                        </div>
                    </article>

                    <article id="tasks">
                        <Task {...list} changeTaskStatut={ changeTaskStatut }/>
                    </article>
                </section>
            </div>
        </>
    );
}
 
export default Checklist;