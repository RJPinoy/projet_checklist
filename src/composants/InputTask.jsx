const InputTask = () => {
    return (  
        <div className='divInputTask'>
            <input className="inputTaskTitle" type="text" placeholder="Write a task."/>
            <input className="inputTaskDescription" type="text" placeholder="Write a description."/>
            
            <img className="delete" src="./delete.svg" />
        </div>
    );
}
 
export default InputTask;