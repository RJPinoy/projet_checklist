import { createSlice } from '@reduxjs/toolkit';
import listInit from './ListInit';

const listSlice = createSlice({
  name: 'lists',
  initialState: listInit,
  reducers: {
    addNewList: (state, action) => {
      const { title, description, status } = action.payload;
      const newList = {
        id: (state.lists.length + 1).toString(),
        title,
        description,
        status,
      };

      return {
        ...state,
        lists: [...state.lists, newList],
      };
    },

    updateList: (state, action) => {
      const { listTargetId, newTitle, newDescription } = action.payload;
      const updatedLists = state.lists.map((list) =>
        list.id === listTargetId ? { ...list, title: newTitle, description: newDescription } : list
      );

      return {
        ...state,
        lists: updatedLists,
      };
    },
  },
});

export const { addNewList, updateList } = listSlice.actions;
export default listSlice.reducer;