import { Box, Typography } from "@mui/material";
import style from "../../src/styles/style.module.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import Link from "next/link";

const Sidebar = () => {
  return (
    <>
      <Box className={style.side_bar}>
        <ul>
          <li className={style.active_nav}>
            <Link href={"/dashboard"}>
              <HomeOutlinedIcon />
              <Typography>Dashboard</Typography>
            </Link>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default Sidebar;
