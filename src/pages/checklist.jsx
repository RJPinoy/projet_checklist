import Header from "../composants/Header";
import LeftLists from "../composants/LeftLists";
import { useNavigate } from 'react-router-dom';

const Checklist = () => {
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

                </section>
            </div>
        </>
    );
}
 
export default Checklist;