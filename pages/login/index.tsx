import React, { useState, useTransition } from "react";
import style from "../../src/styles/style.module.scss";
import {
  Box,
  Button,
  CircularProgress,
  FormLabel,
  Grid,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import Link from "next/link";
import Image from "next/image";
import { postApi } from "@/utils/api";
import { useRouter } from "next/navigation";
import { LoginValues } from "@/utils/type";


const initialValues: LoginValues = {
  email: "mor_2314",
  password: "83r5^_",
};
export default function Login() {
  const [isPending, IsPending] = useState(false);
  const router = useRouter();
  
  const onFormSubmit = async () => {
    const payload = {
      username: "mor_2314",
      password: "83r5^_",
    };
    IsPending(true);
    try {
      const data = await postApi(
        "https://fakestoreapi.com/auth/login",
        payload
      );
      console.log(data);

      if (data.token) {
        localStorage.setItem("login-user", data.token);
        router.push("/dashboard");
        // window.location.href = "/dashboard"; // Redirect
        IsPending(false);
      } else {
        alert("Login failed: Invalid credentials");
        IsPending(false);
      }
    } catch (error: any) {
      console.error("Login error:", error);
      alert(error?.message || "Login failed: Something went wrong");
      IsPending(false);
    } finally {
      IsPending(false);
    }
  };
  return (
    <>
      <Box className={style.p_login_form}>
        <Box className={style.login_form_l}></Box>
        <Box className={style.login_form_r}>
          <Box>
            <Box className={style.logo}>
              <Image
                src={"./JK_Tech_Logo.svg"}
                alt="Logo"
                width={400}
                height={80}
              />
            </Box>
            <Formik
              initialValues={initialValues}
              // validationSchema={loginValidation}
              onSubmit={onFormSubmit}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Typography variant="h5" className={style.log_txt}>
                    Sign In
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 12 }}>
                      <FormLabel
                        sx={{
                          color: "#000",
                          ".MuiFormLabel-asterisk": { color: "red" },
                        }}
                        required
                      >
                        Email
                      </FormLabel>
                      <TextField
                        fullWidth
                        size="small"
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                        // helperText={(touched.email && errors.email) || " "}
                        error={Boolean(errors.email && touched.email)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 12 }}>
                      <FormLabel
                        sx={{
                          color: "#000",
                          ".MuiFormLabel-asterisk": { color: "red" },
                        }}
                        required
                      >
                        Password
                      </FormLabel>
                      <TextField
                        fullWidth
                        size="small"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.password}
                        onChange={handleChange}
                        // helperText={
                        //   (touched.password && errors.password) || " "
                        // }
                        error={Boolean(errors.password && touched.password)}
                      />
                    </Grid>
                  </Grid>

                  <Box
                    sx={{ textAlign: "center", mt: 3 }}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    {isPending ? (
                      <Button disabled={true} variant="contained">
                        {" "}
                        {isPending ? (
                          <>
                            Sign In
                            <CircularProgress size={30} color="inherit" />
                          </>
                        ) : (
                          ""
                        )}
                      </Button>
                    ) : (
                      <Tooltip
                        title={"Its pre-fill  credentials"}
                        placement="top"
                      >
                        <Button
                          variant="contained"
                          type="submit"
                          className={style.bt}
                        >
                          Sign In
                        </Button>
                      </Tooltip>
                    )}

                    <Typography variant="body1" mt={2} color="text.tabColor">
                      {"Don't have an account? "}
                      <Link href="/signup" passHref>
                        Sign Up
                      </Link>
                    </Typography>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </>
  );
}
