const RightChecklist = ({ lists, status }) => {
    const filteredLists = lists.filter(list => list.status === status);
  
    return (
        <div className='TableListDiv'>
            <table className="ListTable">
                <thead>
                    <tr>
                        <th scope="col">List {status}</th> 
                    </tr>
                </thead>
                <tbody>
                    {filteredLists.map(list => (
                    <tr key={list.id}>
                        <td scope="row">- {list.title}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RightChecklist;  