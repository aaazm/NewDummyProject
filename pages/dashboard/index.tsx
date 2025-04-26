import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import style from "../../src/styles/style.module.scss";
import Usertable from "../../component/Usertablelist";
import { useState } from "react";

export default function Dashboard() {
   const[open, setOpen] = useState(false);

   const handleOpen = () =>[
    setOpen(true)
   ]
    return (
        <Box className={style.dash_style} p={3}>
            <Grid container>
              <Grid size={{md: 12}}>
                <Stack direction={'row'} justifyContent={'end'} >
                  <Button className={style.bt} variant={'contained'} onClick={handleOpen}>Add User</Button>
                </Stack>
                <Usertable open={open} setOpen={setOpen} />
              </Grid>
            </Grid>
        </Box>
    );
  }