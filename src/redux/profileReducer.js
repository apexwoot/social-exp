export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_INPUT = 'UPDATE-NEW-POST-INPUT';
export const SET_USER_PROFILE = 'SET-USER-PROFILE';

const initialState = {
  postsData: [
    { id: 1, message: 'Hello, how are you?', likesCount: 10 },
    { id: 2, message: 'What are you doing?Dude?!', likesCount: 17 },
    { id: 3, message: 'Are you ok?', likesCount: 4 },
  ],
  newPostInput: '',
  currentUserShowing: { fullName: 'Apex Woot' },
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
    case SET_USER_PROFILE: {
      return {
        ...state,
        currentUserShowing: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostInput = (input) => ({ type: UPDATE_NEW_POST_INPUT, input });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export default profileReducer;
