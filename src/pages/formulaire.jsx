import React, { useState } from 'react';
import Header from '../composants/Header';
import Task from '../composants/Task';
import { useNavigate } from 'react-router-dom';

const Formulaire = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
      navigate('/');
  };

  const [tasks, setTasks] = useState([]);

  const addNewTask = () => {
      const newTask = <Task key={tasks.length} />;

      setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <>
        <Header />
        

        <div id="formulaire">
            <img className='back' src="/back.svg" alt="back arrow" onClick={ goToDashboard }/>

            <form>
                <div id="listTitle" >
                    <input type="text" placeholder="Write your title for this new list." />
                </div>
                <div id="desc" >
                    <input type="text" placeholder="Write a description." />
                </div>

                { tasks }
            </form>
        </div>

        <div className='divButton'>
          <button id='newTask' onClick={addNewTask}>+</button>

          <button id='saveButton'>SAVE</button>
        </div>
    </>
  );
};

export default Formulaire;