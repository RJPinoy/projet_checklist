import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getListId, deleteList } from './listsData/ListSlice';
import { deleteDataFromApi } from './Axios';

const DeleteConfirm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState('');
    const [error, setError] = useState('');
    const [listTitle, setListTitle] = useState('');
    
    const deleteConfirm = document.getElementById('bgDeleteConfirm');

    const lists = useSelector((state) => state.lists.lists);
    const selectedListId = useSelector(getListId);
    const idToDelete = selectedListId.payload.lists.selectedListId;

    useEffect(() => {
        const matchedList = lists.find((list) => list.id === idToDelete);

        if (matchedList) {
        console.log('Matched! with ' + matchedList.title);
        setListTitle(matchedList.title);
        }
    }, [lists, idToDelete]);

    const inputChange = (e) => {
        setUserInput(e.target.value);
        setError('');
    };

    const confirm = () => {
        if (userInput === 'delete' || userInput === 'DELETE') {
            console.log('right! ' + userInput);
            setError('');

            dispatch(deleteList({ listTargetId: idToDelete }));
            deleteDataFromApi(idToDelete);

            navigate('/');
            deleteConfirm.classList.toggle('d-none');
        } else {
            setError('Error: Please type "DELETE" to confirm.');
        }
    };

    const cancel = () => {
        deleteConfirm.classList.toggle('d-none');
    };

    return (
        <div id='bgDeleteConfirm' className='d-none'>
        <div className='deleteConfirm'>
            <p>Do you want to delete {listTitle} list ?</p>
            <br />
            <p>Type "DELETE" into the field to confirm.</p>
            <br />
            <input type="text" onChange={inputChange} />
            <br />
            {error && <span style={{ color: 'red' }}>{error}</span>}

            <div>
            <button onClick={confirm}>confirm</button>
            <button onClick={cancel}>cancel</button>
            </div>
        </div>
        </div>
    );
};

export default DeleteConfirm;
