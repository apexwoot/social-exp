export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_INPUT = 'UPDATE-NEW-POST-INPUT';

const initialState = {
  postsData: [
    { id: 1, message: 'Hello, how are you?', likesCount: 10 },
    { id: 2, message: 'What are you doing?Dude?!', likesCount: 17 },
    { id: 3, message: 'Are you ok?', likesCount: 4 },
  ],
  newPostInput: '',
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const id = state.postsData[state.postsData.length - 1]?.id + 1;
      return {
        ...state,
        postsData: [...state.postsData, { id: id ? id : 0, message: state.newPostInput }],
        newPostInput: '',
      };
    }
    case UPDATE_NEW_POST_INPUT: {
      return {
        ...state,
        newPostInput: action.input,
      };
    }
    default:
      return state;
  }
};

export const addPost = () => {
  return { type: ADD_POST };
};
export const updateNewPostInput = (input) => {
  return { type: UPDATE_NEW_POST_INPUT, input: input };
};

export default profileReducer;
