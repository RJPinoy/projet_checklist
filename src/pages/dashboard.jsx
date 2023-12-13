import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from "../composants/Header";
import LeftLists from "../composants/LeftLists";
import RightLists from "../composants/RightLists";
import { useNavigate } from 'react-router-dom';
import { fetchDataFromApi } from "../composants/Axios";
import { getListFromApi } from '../composants/listsData/ListSlice';
import { changeListStatus } from '../functions';
import DeleteConfirm from '../composants/DeleteConfirm';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDataFromApi();
        dispatch(getListFromApi(data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  const goToFormulaire = () => {
    navigate('/formulaire');
  };

  changeListStatus();

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
            <button onClick={ goToFormulaire }>+</button>
          </article>
        </section>

        <section id='right'>
          <article className='d-none no-list'>
            <p>Oh no! Start now to create a new list.</p>
          </article>

          <article>
            <RightLists />
          </article>
        </section>
      </div>
    </>
  );
};

export default Dashboard;