const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const LOAD_ALL_USERS = 'LOAD-ALL-USERS';
const SET_TOTAL_USER_COUNT = 'SET-TOTAL-USER-COUNT';
const SET_PAGE_SIZE = 'SET-PAGE-SIZE';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';

const initialState = {
  usersData: [],
  pageSize: 15,
  totalUserCount: 0,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.id) u.followed = true;
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        usersData: state.usersData.map((u) => {
          if (u.id === action.id) u.followed = false;
          return u;
        }),
      };
    }
    case LOAD_ALL_USERS: {
      return { ...state, usersData: action.users };
    }
    case SET_TOTAL_USER_COUNT: {
      return {
        ...state,
        totalUserCount: action.number,
      };
    }
    case SET_PAGE_SIZE: {
      return {
        ...state,
        pageSize: action.number,
      };
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.number,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.value,
      };
    }
    default: {
      return state;
    }
  }
};

export const Follow = (id) => ({ type: FOLLOW, id });
export const Unfollow = (id) => ({ type: UNFOLLOW, id });
export const LoadAllUsers = (users) => ({ type: LOAD_ALL_USERS, users });
export const SetTotalUserCount = (number) => ({ type: SET_TOTAL_USER_COUNT, number });
export const SetPageSize = (number) => ({ type: SET_PAGE_SIZE, number });
export const SetCurrentPage = (number) => ({ type: SET_CURRENT_PAGE, number });
export const ToggleIsFetching = (value) => ({ type: TOGGLE_IS_FETCHING, value });

export default usersReducer;
