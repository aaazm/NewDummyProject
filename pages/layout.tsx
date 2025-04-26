import { Box, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Logout from "../component/Logout/logout";
import Sidebar from "../component/Sidebar";
import style from "../src/styles/style.module.scss";

const nonLayoutRoutes = [
  "/",
  "/login",
  "/signup",
];


const Layout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if (nonLayoutRoutes.includes(router.pathname)) {
        if (localStorage.getItem("login-user")) {
          router.push("/dashboard");
        }
      }
      if (!nonLayoutRoutes.includes(router.pathname)) {
        if (!localStorage.getItem("login-user")) {
            alert('You are not logged in currently');
            router.push("/login");
        }
      }
    }
  }, [router]);

  return (
    <>
      {nonLayoutRoutes.includes(router.pathname) ? (
        <>{children}</>
      ) : (
        <div>
          <Logout />
         <Stack direction={'row'}>
         <Sidebar />
          <Box className={style.main_box}>{children}</Box>
         </Stack>
      </div>
      )}
    </>
  );
};

export default Layout
