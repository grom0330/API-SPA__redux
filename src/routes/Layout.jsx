import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div
      style={{
        margin: "0px auto",
        width: "1000px",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "end",
        }}
      >
        <NavLink
          style={{
            margin: "10px 20px",
            fontSize: "24px",
            textDecoration: "none",
          }}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/"
        >
          Users
        </NavLink>
        <NavLink
          style={{
            margin: "10px 20px",
            fontSize: "24px",
            textDecoration: "none",
          }}
          className={({ isActive }) => (isActive ? "active-link" : "")}
          to="/albums"
        >
          Albums
        </NavLink>
      </header>
      <main
        style={{
          margin: "50px auto",
          width: "1000px",
          flex: " 1 0 auto",
        }}
      >
        <Outlet />
      </main>
      <footer
        style={{
          borderTop: "1px RGB(0, 0, 0, 0.5) solid",
          flex: "flex: 0 0 auto",
          margin: "0 0 20px 0",
          padding: "20px 0 0 0",
          display: "flex",
          justifyContent: "space-between",
          fontSize: "17px",
          color: "RGB(0, 0, 0, 0.5)",
        }}
      >
        <div>Created by: Oleg Tokarev</div>
        <div>BSU: 2022</div>
      </footer>
    </div>
  );
};

export { Layout };
