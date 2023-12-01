import { useNavigate } from 'react-router-dom';

const LeftChecklist = ({
    id, title, description, status}) => {

    const navigate = useNavigate();

    const goToFormulaire = () => {
        navigate('/formulaire', {
            state: {
                title,
                description,
            },
        });
      };

    return (  
        <li className="list" onClick={ goToFormulaire }>- { title } ( { status } )</li>
    );
}
 
export default LeftChecklist;