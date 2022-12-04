const defaultState = {
  albums: [],
};

const ADD_MANY_ALBUMS = "ADD_MANY_ALBUMS";
const ADD_ALBUM = "ADD_ALBUM";

export const albumsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MANY_ALBUMS:
      return { ...state, albums: [...action.payload] };
    case ADD_ALBUM:
      return { ...state, albums: [action.payload] };
    default:
      return state;
  }
};

export const addManyAlbumsAction = (payload) => ({
  type: ADD_MANY_ALBUMS,
  payload,
});
export const addAlbumAction = (payload) => ({
  type: ADD_ALBUM,
  payload,
});
