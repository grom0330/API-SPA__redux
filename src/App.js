import Users, { loader as usersLoader } from "./routes/Users";
import User, { userLoader as userLoader } from "./routes/User";
import Album, { loader as albumLoader } from "./routes/Album";
import { Layout } from "./routes/Layout";
import Albums, { loader as albumsLoader } from "./routes/Albums";
import {
  Routes,
  Route,
  NavLink,
  RouterProvider,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFoundPage from "./routes/NotFoundPage";

const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Users />} />
      <Route path="albums" element={<Albums />} />
      <Route path=":id" element={<User />} />
      <Route path="albums/:id" element={<Album />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
