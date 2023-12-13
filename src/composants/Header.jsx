import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/');
  }

    return (  
        <div id='header'>
          <div id='logo' onClick={ goToDashboard }></div>
  
          <h1 onClick={ goToDashboard }>Pre-fight checklist</h1>
        </div>
    );
}
 
export default Header;