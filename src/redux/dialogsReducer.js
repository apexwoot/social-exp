export const UPDATE_NEW_DIALOG_MESSAGE_INPUT = 'UPDATE-NEW-DIALOG-MESSAGE-INPUT';
export const ADD_MESSAGE = 'ADD-MESSAGE';

const initialState = {
  dialogsData: [
    { id: 1, name: 'Apex' },
    { id: 2, name: 'Woot' },
    { id: 3, name: 'Oleg' },
    { id: 4, name: 'Nazar' },
  ],
  messagesData: [
    { id: 1, messageBody: 'Hello!' },
    { id: 2, messageBody: 'How are you?!' },
    { id: 3, messageBody: 'How is your life going on!?' },
    { id: 4, messageBody: 'Yo Yo!' },
  ],
  newDialogsInput: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const id = state.messagesData[state.messagesData.length - 1]?.id + 1;
      return {
        ...state,
        messagesData: [...state.messagesData, { id: id, messageBody: state.newDialogsInput }],
        newDialogsInput: '',
      };
    }
    case UPDATE_NEW_DIALOG_MESSAGE_INPUT: {
      return {
        ...state,
        newDialogsInput: action.input,
      };
    }
    default:
      return state;
  }
};

export const updateNewDialogMessageInputAC = (input) => {
  return { type: UPDATE_NEW_DIALOG_MESSAGE_INPUT, input: input };
};
export const addMessageAC = () => {
  return { type: ADD_MESSAGE };
};

export default dialogsReducer;
