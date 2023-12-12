const InputTask = () => {
    return (  
        <div className='divInputTask'>
            <input className="inputTask" type="text" placeholder="Write a task."/>
            
            <img className="delete" src="./delete.svg" />
        </div>
    );
}
 
export default InputTask;