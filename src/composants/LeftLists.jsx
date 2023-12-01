import { useReducer } from "react";
import listInit from "./listsData/ListInit";
import listReducer from "./listsData/ListReducer";
import LeftChecklist from "./LeftChecklist";

const LeftLists = () => {
    const [state, dispatch] = useReducer(listReducer, listInit);

    return (  
        state.lists.map(
            list=>{
                return <LeftChecklist key={list.id} {...list} dispatch={ dispatch } />
            })
    );
};

export default LeftLists;