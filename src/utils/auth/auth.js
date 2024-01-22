export const useSession = () => {
  if (localStorage.getItem("username") !== null) {
    return {
      isLogin: true,
      username: localStorage.getItem("username"),
      email: localStorage.getItem("email"),
    };
  }
  return {
    isLogin: false,
    username: null,
  };
};
