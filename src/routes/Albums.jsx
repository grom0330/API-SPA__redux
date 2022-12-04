import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import img from "../album-icon.png";
import { fetchAllAlbums } from "../asyncActions.js/actions";

export default function Albums() {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.albums.albums);

  useEffect(() => {
    dispatch(fetchAllAlbums());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "",
      }}
    >
      {albums.map((album) => (
        <div key={album.id} style={{ display: "flex", alignItems: "center" }}>
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
