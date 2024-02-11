// Actions
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

// Action creators
export const increment = () => {
    return {
      type: 'INCREMENT'
    };
  };
  
  export const decrement = () => {
    return {
      type: 'DECREMENT'
    };
  };

  export const addNote = (note) => {
    return {
      type: 'ADD_NOTE',
      payload: note,
    };
  };
 
  export const deleteNote = (index) => {
    return {
      type: 'DELETE_NOTE',
      payload: index
    };
  };

  export const editNote = (index, newText) => {
    return {
      type: 'EDIT_NOTE',
      payload: { index, newText }
    };
  };
  