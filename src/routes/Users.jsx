import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUsers } from "../asyncActions.js/actions";

export default function Users() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            margin: "2px 0",
          }}
        >
          <Link
            to={`${user.id}`}
            style={{
              textDecoration: "none",
              fontSize: "20px",
              color: "black",
            }}
          >
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
}
