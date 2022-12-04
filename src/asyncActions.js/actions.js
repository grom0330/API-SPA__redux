import { addAlbumAction, addManyAlbumsAction } from "../store/albumReducer";
import { addPhotoAction } from "../store/photoReducer";
import { addManyUsersAction, addUserAction } from "../store/userReducer";

export const fetchUsers = () => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((r) => r.json())
      .then((json) => dispatch(addManyUsersAction(json)));
  };
};

export const fetchUser = (id) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((r) => r.json())
      .then((json) => dispatch(addUserAction([json])));
  };
};

export const fetchAlbumsByUserId = (id) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/albums/?userId=${id}`)
      .then((r) => r.json())
      .then((json) => dispatch(addManyAlbumsAction(json)));
  };
};

export const fetchAllAlbums = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((r) => r.json())
      .then((json) => dispatch(addManyAlbumsAction(json)));
  };
};

export const fetchAlbumsById = (id) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((r) => r.json())
      .then((json) => dispatch(addAlbumAction(json)));
  };
};

export const fetchPhoto = (id) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
      .then((r) => r.json())
      .then((json) => dispatch(addPhotoAction(json)));
  };
};
