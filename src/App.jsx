import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { Home } from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoutes from "./utils/PrivateRoutes";
import Dashboard from "./pages/Dashboard";
import MyStudy from "./pages/MyStudy";
import Penugasan from "./pages/Penugasan";
import NilaiSertifikat from "./pages/NilaiSertifikat";
import SubjectDetail from "./pages/SubjectDetail";
import Module from "./pages/Module";
import ModuleContent from "./pages/ModuleContent";
import Assignment from "./pages/Assignment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<PrivateRoutes />}>
        <Route element={<Dashboard />} path="/dashboard" />
        <Route element={<MyStudy />} path="/studi-ku" />
        <Route element={<SubjectDetail />} path="/studi-ku/:subjectName/:subjectId" />
        <Route element={<Module />} path="/studi-ku/:subjectName/:subjectId/:module/:sessionId" />
        <Route
          element={<ModuleContent />}
          path="/studi-ku/:subjectName/:subjectId/:module/:sessionId/:content/:moduleContentId"
        />
        <Route element={<Assignment />} path="/studi-ku/:subjectName/:subjectId/tugas/:sessionId" />
        <Route element={<Penugasan />} path="/penugasan" />
        <Route element={<NilaiSertifikat />} path="/nilai-dan-sertifikat" />
      </Route>
      <Route element={<Home />} path="/" />
      <Route element={<Home />} path="*" />
      <Route element={<Login />} path="/login" />
    </>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
