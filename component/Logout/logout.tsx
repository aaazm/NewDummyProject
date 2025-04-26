import { Button, Stack } from "@mui/material";
import style from "../../src/styles/style.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
const Logout = () => {
    const router = useRouter()
    const handleLogout = () => {
        localStorage.removeItem("login-user");
        router.push("/login");
      };
  return (
    <>
      <Stack
        justifyContent={"space-between"}
        direction={"row"}
        className={style.logout_nav}
      >
        <Image src={"./JK_Tech_Logo.svg"} alt="Logo" width={200} height={50} />
        <Button variant="contained" onClick={handleLogout}  className={style.bt}>Logout</Button>
      </Stack>
    </>
  );
};

export default Logout;
