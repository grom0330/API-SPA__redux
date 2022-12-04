import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link, useParams } from "react-router-dom";
import {
  fetchAlbumsById,
  fetchPhoto,
  fetchUser,
} from "../asyncActions.js/actions";

// export const loader = async ({ params: { id } }) => {
//   const albumPromise = await fetch(
//     `https://jsonplaceholder.typicode.com/albums/${id}`
//   ).then((r) => r.json());
//   const userPromise = fetch(
//     `https://jsonplaceholder.typicode.com/users/${albumPromise.userId}`
//   ).then((r) => r.json());
//   const imgPromise = fetch(
//     `https://jsonplaceholder.typicode.com/photos/?albumId=${id}`
//   ).then((r) => r.json());
//   return { userPromise, albumPromise, imgPromise };
// };

export default function Album() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const albums = useSelector((state) => state.albums.albums);
  const photo = useSelector((state) => state.photo.photo);

  useEffect(() => {
    dispatch(fetchAlbumsById(id));
  }, []);

  useEffect(() => {
    if (albums[0]) dispatch(fetchUser(albums[0].userId));
  }, [albums]);

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, []);

  console.log(photo);

  return (
    <div>
      <div>
        {albums.length == 1 ? (
          <div>
            {albums.map((album) => (
              <div key={album.id}>
                <h3 style={{ margin: "5px 0" }}>{album.title}</h3>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div>
        {users.length == 1 ? (
          <div>
            {users.map((user) => (
              <div key={user.id} style={{ margin: "0 0 20px 0" }}>
                Created by:
                <Link style={{ textDecoration: "none" }} to={`../${user.id}`}>
                  {" "}
                  {user.name}{" "}
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>

      <div>
        {photo.length != 0 ? (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridRowGap: "1em",
              }}
            >
              {photo.map((photo) => (
                <img src={photo.thumbnailUrl} />
              ))}
            </div>
          </>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
