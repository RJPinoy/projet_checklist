import Header from "../composants/Header";
import LeftLists from "../composants/LeftLists";
import RightLists from "../composants/RightLists";
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const goToFormulaire = () => {
        navigate('/formulaire');
    };

    return (  
        <>
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
                <article className='d-none'>
                    <p>Oh no! Start now to create a new list.</p>
                </article>

                <article>
                    <RightLists />
                </article>
            </section>
            </div>
        </>
    );
}
 
export default Dashboard;