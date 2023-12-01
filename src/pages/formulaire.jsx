import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../composants/Header';
import Task from '../composants/Task';

const Formulaire = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [tasks, setTasks] = useState([]);
  const [listTitle, setListTitle] = useState('');
  const [desc, setDesc] = useState('');

  const addNewTask = () => {
    const newTask = <Task key={tasks.length} />;
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const saveToState = () => {
    // Save list data to your state or dispatch an action
  };

  useEffect(() => {
    // Set initial values for listTitle and desc when location state changes
    if (location.state) {
      setListTitle(location.state.title || '');
      setDesc(location.state.description || '');
    }
  }, [location.state]);

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