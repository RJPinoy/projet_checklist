const LeftChecklist = ({
    id, title, description, status}) => {

    return (  
        <li className="list">- { title } ( { status } )</li>
    );
}
 
export default LeftChecklist;