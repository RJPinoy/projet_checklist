import Header from "../composants/Header";
import LeftChecklist from "../composants/LeftChecklist";
import RightChecklist from "../composants/RightChecklist";
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
                    <LeftChecklist />
                </ul>
                </nav>

                <article id='newList'>
                    <button onClick={goToFormulaire}>+</button>
                </article>
            </section>

            <section id='right'>
                <article className='noList'>
                <p>Oh no! Start now to create a new list.</p>
                </article>

                <article>
                <RightChecklist />
                <RightChecklist />
                </article>
            </section>
            </div>
        </>
    );
}
 
export default Dashboard;