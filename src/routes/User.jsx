import img from "../album-icon.png";
import React, { Suspense } from "react";
import { useNavigate, Link, useLoaderData, Await } from "react-router-dom";

export const userLoader = ({ params: { id } }) => {
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((r) => r.json());
  const albumsPromise = fetch(
    `https://jsonplaceholder.typicode.com/albums/?userId=${id}`
  ).then((r) => r.json());
  return { userPromise, albumsPromise };
};

export default function User() {
  const { userPromise, albumsPromise } = useLoaderData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={userPromise}>
        {(user) => (
          <>
            <div style={{ color: "RGB(0, 0, 0, 0.6)" }}>
              <h3 style={{ margin: "5px 0", color: "black" }}>{user.name}</h3>
              <div style={{ margin: "5px 0 0 0" }}>
                Username: {user.username}
              </div>
              <div style={{ margin: "5px 0 0 0" }}>
                Email:{" "}
                <a style={{ textDecoration: "none" }} href="">
                  {user.email}
                </a>
              </div>
              <div style={{ margin: "5px 0 0 0" }}>Phone: {user.phone}</div>
              <div style={{ margin: "5px 0 0 0" }}>
                Site:{" "}
                <a style={{ textDecoration: "none" }} href="">
                  {user.website}
                </a>
              </div>
            </div>
          </>
        )}
      </Await>
      <Await resolve={albumsPromise}>
        {(albums) => (
          <>
            <div>
              <h3 style={{ margin: "50px 0 5px 0" }}>Albums</h3>
              {albums.map((album) => (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={img}
                    style={{
                      width: "17px",
                      height: "17px",
                      margin: "2px 5px 2px 0",
                    }}
                  />
                  <Link
                    to={`/albums/${album.id}`}
                    key={album.id}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    {album.title}
                  </Link>
                </div>
              ))}
            </div>
          </>
        )}
      </Await>
    </Suspense>
  );
}
