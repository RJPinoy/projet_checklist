import { createSlice } from '@reduxjs/toolkit';
import ApiData from './ListInit';

const listSlice = createSlice({
  name: 'lists',
  initialState: ApiData,
  reducers: {
    getListFromApi: (state, action) => {
      const data = action.payload;

      return {
        ...state,
        lists: data
      };
    },

    updateList: (state, action) => {
      const { listTargetId, newTitle, newDescription, newTasks } = action.payload;
      const updatedLists = state.lists.map((list) => list.id === listTargetId
          ? {
              ...list,
              title: newTitle,
              description: newDescription,
              todo: newTasks,
            }
          : list
      );

      return {
        ...state,
        lists: updatedLists,
      };
    },

    deleteList: (state, action) => {
      const { listTargetId } = action.payload;
    
      const updatedLists = state.lists.filter((list) => list.id !== listTargetId);
    
      return {
        ...state,
        lists: updatedLists,
      };
    },    
  },
});

export const { getListFromApi, updateList, deleteList } = listSlice.actions;
export default listSlice.reducer;