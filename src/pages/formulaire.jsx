import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addNewList, updateList } from '../composants/listsData/ListSlice';

import Header from '../composants/Header';
import Task from '../composants/Task';

const Formulaire = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const list = useSelector((state) =>
  location.state?.id
    ? state.lists.lists.find((listItem) => listItem.id === location.state.id)
    : null
);

  const [listTitle, setListTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (list) {
      setListTitle(list.title || '');
      setDesc(list.description || '');
    }
  }, [list]);

  const addNewTask = () => {
    const newTask = <Task key={tasks.length} />;
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const saveToState = () => {
    // Determine whether it's an update or a new list
    if (location.state) {
      // Update an existing list
      dispatch(updateList({
        listTargetId: location.state.id,
        newTitle: listTitle,
        newDescription: desc,
      }));
    } else {
      // Create a new list
      dispatch(addNewList({
        title: listTitle,
        description: desc,
        status: 'blank',
      }));
    }

    navigate('/');
  };

  return (
    <>
      <Header />

      <div id="formulaire">
        <img
          className="back"
          src="/back.svg"
          alt="back arrow"
          onClick={() => navigate('/')}
        />

        <form>
          <div id="listTitle">
            <input
              type="text"
              placeholder="Write your title for this new list."
              value={listTitle}
              onChange={(e) => setListTitle(e.target.value)}
            />
          </div>
          <div id="desc">
            <input
              type="text"
              placeholder="Write a description."
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          {tasks}
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