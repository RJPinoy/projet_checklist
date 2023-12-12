import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../composants/Header';
import InputTask from '../composants/InputTask';
import { addDataToApi, deleteDataFromApi, updateDataFromApi } from '../composants/Axios';

const Formulaire = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const list = useSelector((state) =>
    location.state?.id
      ? state.lists.lists.find((listItem) => listItem.id === location.state.id)
      : null
  );

  const [listTitle, setListTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todo, setTasks] = useState([]);

  useEffect(() => {
    if (list) {
      setListTitle(list.title || '');
      setDesc(list.description || '');
    }
  }, [list]);

  const addNewTask = () => {
    const newInputTask = <InputTask key={todo.length} />;
    setTasks((prevTasks) => [...prevTasks, newInputTask]);
  };

  const deleteTask = (key) => {
    let divTasks = document.getElementsByClassName('divInputTask');
    divTasks[key].remove();
  };

  let inputExistingTasks;
  if (location.state) {
    inputExistingTasks = list.todo.map((task, index) => (
      <div key={index} className='divInputTask'>
        <input
          className="inputTask"
          type="text"
          defaultValue={task.title}
        />

        <img className="delete" src="./delete.svg" onClick={() => deleteTask(index) }/>
      </div>
    ));
  };

  const saveToState = () => {
    const taskInputs = document.getElementsByClassName('inputTask');
    const newTasks = Array.from(taskInputs).map((input) => ({
      title: input.value,
      description: '',
    }));
  
    if (location.state) {
      updateDataFromApi(location.state.id, {
        id: location.state.id,
        title: listTitle,
        description: desc,
        todo: newTasks,
      })
    } else {
      addDataToApi({
        title: listTitle,
        description: desc,
        todo: newTasks,
        statut: 0,
      })
    }
  
    navigate('/');
  };

  const deleteListToState = () => {
    console.log(location.state)

    if (location.state) {
      deleteDataFromApi(location.state.id)
    }
  
    navigate('/');
  }

  return (
    <>
      <Header />

      <div id="formulaire">
        <form>
          <div id="listTitle">
            <img
              className="back"
              src="/back.svg"
              alt="back arrow"
              onClick={() => navigate('/')}
            />

            <input
              type="text"
              placeholder="Write your title for this new list."
              value={ listTitle }
              onChange={(e) => setListTitle(e.target.value)}
            />

            <img className="delete deleteList" src="./delete.svg" onClick={ deleteListToState }/>
          </div>
          <div id="desc">
            <input
              type="text"
              placeholder="Write a description."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>
          
          {inputExistingTasks}
          {todo}
        </form>
      </div>

      <div className="divButton">
        <button id="newTask" onClick={addNewTask}>
          +
        </button>

        <button id="saveButton" onClick={saveToState}>
          SAVE
        </button>
      </div>
    </>
  );
};

export default Formulaire;