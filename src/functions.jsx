import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { statutDataFromApi } from './composants/Axios';

export function StatusToString({ statut }) {
    const [statutString, setStatutString] = useState('');
  
    useEffect(() => {
        switch (statut) {
            case 0:
                setStatutString('blank');
            break;

            case 1:
                setStatutString('in progress');
            break;

            case 2:
                setStatutString('completed');
            break;

            default:
                setStatutString('blank');
        }
    }, [statut]);
  
    return statutString;
}

export const changeListStatus = () => {
    const lists = useSelector((state) => state.lists.lists);
  
    {lists.map((list) => {
        const countInProgressTasks = list.todo.reduce(
            (count, task) => (task.statut === 1 ? count + 1 : count),
            0
        )
    
        if(countInProgressTasks > 0 && countInProgressTasks < list.todo.length) {
            statutDataFromApi(list.id, 1)
        } else if (countInProgressTasks === list.todo.length) {
            statutDataFromApi(list.id, 2)
        } else {
            statutDataFromApi(list.id, 0)
        }
    })}
}