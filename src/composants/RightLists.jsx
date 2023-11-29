import { useReducer } from "react";
import RightChecklist from "./RightChecklist";
import listInit from "./listsData/ListInit";
import listReducer from "./listsData/ListReducer";

const RightLists = () => {
    const [state, dispatch] = useReducer(listReducer, listInit);

    return (
        <>
            <RightChecklist lists={state.lists} status="in progress" />
            <RightChecklist lists={state.lists} status="blank" />
            <RightChecklist lists={state.lists} status="completed" />
        </>
    );
};

export default RightLists;