import { Outlet, Navigate } from "react-router-dom";
import { useSession } from "./auth/auth";

const PrivateRoutes = () => {
  const { isLogin } = useSession();
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
