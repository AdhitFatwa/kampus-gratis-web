import { MdDashboard, MdLogout } from "react-icons/md";

import { TbCategory2 } from "react-icons/tb";
import { Button } from "../../components/default/Button";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import { Navbar } from "../../components/layout/Navbar";
import { toast } from "react-hot-toast";

const AuthButton = () => (
  <div className="flex gap-4">
    <Button
      href="/login"
      type="button"
      className="border-2 border-primary-base text-primary-500 px-4 py-1.5 rounded-lg w-auto h-auto"
    >
      Masuk
    </Button>
    <Button
      disabled={true}
      href="/auth/register"
      type="button"
      className="text-white px-4 py-1.5 border-2 border-primary-500 rounded-lg w-auto h-auto bg-primary-500"
    >
      Daftar
    </Button>
  </div>
);

export const BaseLayout = ({ addSearch }) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("username"), localStorage.removeItem("email");
    navigate("/login");
    toast.success("Logout success");
  };

  const _pop_up_menu = [
    {
      name: "Dashboard",
      onClick: () => navigate("/dashboard"),
      icon: <MdDashboard size={20} className="text-primary-base" />,
    },
    {
      name: "Logout",
      icon: <MdLogout size={20} className="text-error-base" />,
      onClick: () => logout(),
    },
  ];

  const _bottom_nav_items = [
    {
      name: "Dashboard",
      link: "/dashboard",
    },
    {
      name: "Studi Ku",
      link: "/studi-ku",
    },
    {
      name: "Penugasan",
      link: "/penugasan",
    },
    {
      name: "Nilai & Sertifikat",
      link: "/nilai-dan-sertifikat",
    },
  ];

  const _features = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: "/icons/ic-career-plan.svg",
    },
    {
      name: "Studi Ku",
      link: "/studi-ku",
      icon: "/icons/ic-consultation.svg",
    },
    {
      name: "Penugasan",
      link: "/penugasan",
      icon: "/icons/ic-work.svg",
    },
    {
      name: "Nilai & Sertifikat",
      link: "/nilai-dan-sertifikat",
      icon: "/icons/ic-discussion-room.svg",
    },
  ];

  const _nav_rules = ["/dashboard", "/studi-ku", "/penugasan", "/nilai-dan-sertifikat"];

  const _profile_user = {
    email: "email@example.com",
    full_name: "fullname",
    avatar: "",
  };

  const _mobile_menu_item = [
    {
      name: "Semua Fitur",
      icon: <TbCategory2 className="text-neutral-500 p-1 text-3xl" />,
      href: "/semua-fitur",
    },
  ];

  return (
    <Fragment>
      <Navbar
        mobileMenuItems={_mobile_menu_item}
        items={_pop_up_menu}
        features={_features}
        logo={"/icons/logo-kg-new.svg"}
        logoStyle="w-auto h-auto"
        userData={_profile_user}
        bottomNavItems={_bottom_nav_items}
        bottomNavRules={_nav_rules}
        bottomNavItemStyle={`w-auto h-auto p-3 text-[14px] rounded-lg bg-primary-500 text-white font-reguler`}
        button={<AuthButton />}
        withSearch={addSearch}
      />
    </Fragment>
  );
};
