import React, { useCallback } from "react";
import { useNavigate, Link, useLoaderData } from "react-router-dom";
import img from "../album-icon.png";

export const loader = async () => {
  const albums = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  ).then((r) => r.json());
  return { albums };
};

export default function Albums() {
  const navigate = useNavigate();
  const navigateToAlbum = useCallback(
    (id) => () => navigate(`${id}`),
    [navigate]
  );

  const { albums } = useLoaderData();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "",
      }}
    >
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
            key={album.id}
            to={`${album.id}`}
            style={{
              textDecoration: "none",
              fontSize: "20px",
              margin: "2px 0",
              color: "black",
            }}
          >
            {album.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
