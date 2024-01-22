import { Suspense } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { TextField } from "../../components/default/TextField";
import { Checkbox } from "../../components/default/Checkbox";
import { Button } from "../../components/default/Button";
import { DashedText } from "../../components/default/DashedText";
import { toast } from "react-hot-toast";

export const LoginModule = () => {
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email !== "" && password !== "") {
      localStorage.setItem("username", email.split("@")[0]),
        localStorage.setItem("email", email),
        navigate("/dashboard");
      return toast.success("Login success");
    }
    toast.error("Invalid email or password");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    login(e.target[0].value, e.target[1].value);
  };

  return (
    <Suspense fallback={"loading.."}>
      <AuthLayout
        h="screen"
        title="Masuk"
        description="Silahkan masuk menggunakan email dan kata sandi yang terdaftar"
      >
        <form onSubmit={onSubmit} className="flex flex-col w-full justify-start">
          <TextField
            type="email"
            variant="lg"
            name={"email"}
            placeholder="Masukkan Email"
            label="Email"
            required
          />
          <TextField
            type="password"
            variant="lg"
            name={"password"}
            placeholder="Masukkan Kata Sandi"
            label="Kata Sandi"
            required
          />
          <div className="flex w-full justify-between my-2">
            <Checkbox variant="lg" name={"remember"} label="Ingat Saya" />
            <div className="text-primary-base cursor-pointer">Lupa Kata Sandi?</div>
          </div>
          <div className="flex flex-col my-4">
            <Button
              type="submit"
              className="w-auto disabled:bg-neutral-300 h-auto text-[18px] text-white p-4 rounded-lg border-2 border-neutral-200 appearance-none bg-primary-600 font-[700]"
            >
              Masuk
            </Button>

            {/* <DashedText text="Atau" />

            <Button
              onClick={() => {}}
              type="button"
              className="w-auto h-auto text-[18px] text-black p-3 rounded-lg border-2 border-neutral-300 appearance-none bg-white font-[700] flex items-center justify-center gap-x-4"
            >
              <img src="/icons/Google.svg" width={24} height={24} alt="google" />{" "}
              <span>Masuk Dengan Google</span>
            </Button>
            <div className="flex w-full items-center justify-center my-4 gap-x-4 mb-4 font-[500] text-[18px] text-neutral-500">
              <span>Belum punya akun?</span>
              <Link className="text-primary-600" href={"/auth/register"}>
                Daftar Disini
              </Link>
            </div> */}
          </div>
        </form>
      </AuthLayout>
    </Suspense>
  );
};
