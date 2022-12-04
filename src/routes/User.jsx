import img from "../album-icon.png";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchAlbumsByUserId, fetchUser } from "../asyncActions.js/actions";
import { useDispatch, useSelector } from "react-redux";

export default function User() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const albums = useSelector((state) => state.albums.albums);

  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  useEffect(() => {
    dispatch(fetchAlbumsByUserId(id));
  }, []);

  return (
    <div>
      <div>
        {users.length > 0 ? (
          <div>
            {users.map((user) => (
              <div key={user.id}>
                <div style={{ color: "RGB(0, 0, 0, 0.6)" }}>
                  <h3 style={{ margin: "5px 0", color: "black" }}>
                    {user.name}
                  </h3>
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
              </div>
            ))}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
      <div>
        {albums.length > 0 ? (
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
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}
