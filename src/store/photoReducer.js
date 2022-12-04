const defaultState = {
  photo: [],
};

const ADD_PHOTO = "ADD_PHOTO";

export const photoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PHOTO:
      return { ...state, photo: [...action.payload] };
    default:
      return state;
  }
};

export const addPhotoAction = (payload) => ({
  type: ADD_PHOTO,
  payload,
});
