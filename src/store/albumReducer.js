const defaultState = {
  albums: [],
};

const ADD_MANY_ALBUMS = "ADD_MANY_ALBUMS";

export const albumsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_ALBUMS:
      return { ...state, albums: [...action.payload] };
    default:
      return state;
  }
};

export const addManyAlbumsAction = (payload) => ({
  type: ADD_MANY_ALBUMS,
  payload,
});
