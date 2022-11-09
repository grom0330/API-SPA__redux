import React, { useCallback } from "react";
import { useNavigate, Link, useLoaderData } from "react-router-dom";

export const loader = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (r) => r.json()
  );
  return { users };
};

export default function Users() {
  const navigate = useNavigate();
  const navigateToUser = useCallback(
    (id) => () => navigate(`${id}`),
    [navigate]
  );

  const { users } = useLoaderData();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {users.map((user) => (
        <div
          style={{
            margin: "2px 0",
          }}
        >
          <Link
            key={user.id}
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
