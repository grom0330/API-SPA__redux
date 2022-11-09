import React, { Suspense } from "react";
import { useNavigate, Link, useLoaderData, Await } from "react-router-dom";

export const loader = async ({ params: { id } }) => {
  const albumPromise = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}`
  ).then((r) => r.json());
  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${albumPromise.userId}`
  ).then((r) => r.json());
  const imgPromise = fetch(
    `https://jsonplaceholder.typicode.com/photos/?albumId=${id}`
  ).then((r) => r.json());
  return { userPromise, albumPromise, imgPromise };
};

export default function Album() {
  const { userPromise, albumPromise, imgPromise } = useLoaderData();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Await resolve={albumPromise} errorElement={<div>Error</div>}>
        {(album) => (
          <>
            <div>
              <h3 style={{ margin: "5px 0" }}>{album.title}</h3>
            </div>
          </>
        )}
      </Await>
      <Await resolve={userPromise} errorElement={<div>Error</div>}>
        {(user) => (
          <>
            <div style={{ margin: "0 0 20px 0" }}>
              Created by:
              <Link style={{ textDecoration: "none" }} to={`../${user.id}`}>
                {" "}
                {user.name}{" "}
              </Link>
            </div>
          </>
        )}
      </Await>
      <Await resolve={imgPromise} errorElement={<div>Error</div>}>
        {(photos) => (
          <>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(6, 1fr)",
                gridRowGap: "1em",
              }}
            >
              {photos.map((photo) => (
                <img src={photo.thumbnailUrl} />
              ))}
            </div>
          </>
        )}
      </Await>
    </Suspense>
  );
}
