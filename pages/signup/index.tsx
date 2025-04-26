import React from "react";
import style from "../../src/styles/style.module.scss";
import {
  Box,
  Button,
  FormLabel,
  Grid,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import Link from "next/link";
import Image from "next/image";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  password: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
}

const initialValues: FormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: 0,
  password: "",
  country: "",
  state: "",
  city: "",
  zipCode: "",
};
export default function Login() {
  const onFormSubmit = async (values: FormValues) => {
    console.log(values);
  };
  return (
    <>
      <Box className={style.p_signup}>
        <Box className={style.signup_l}>
        <Box className={style.logo}>
              <Image
                src={"./JK_Tech_Logo.svg"}
                alt="Logo"
                width={400}
                height={80}
              />
            </Box>
        </Box>
        <Box className={style.signup_r}>
          <Box>
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
                  <Typography variant="h5" className={style.signup_txt}>
                    Sign Up
                  </Typography>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <FormLabel
                        sx={{
                          color: "#000",
                          ".MuiFormLabel-asterisk": { color: "red" },
                        }}
                        required
                      >
                       First Name
                      </FormLabel>
                      <TextField
                        fullWidth
                        size="small"
                        type="test"
                        name="firstName"
                        placeholder="Enter your first name"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.firstName}
                        onChange={handleChange}
                        helperText={(touched.firstName && errors.firstName) || " "}
                        error={Boolean(errors.firstName && touched.firstName)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <FormLabel
                        sx={{
                          color: "#000",
                          ".MuiFormLabel-asterisk": { color: "red" },
                        }}
                        required
                      >
                        Last Name
                      </FormLabel>
                      <TextField
                        fullWidth
                        size="small"
                        type="text"
                        name="lastName"
                        placeholder="Enter your last Name"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.lastName}
                        onChange={handleChange}
                        helperText={(touched.lastName && errors.lastName) || " "}
                        error={Boolean(errors.lastName && touched.lastName)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
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
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.email}
                        onChange={handleChange}
                        helperText={(touched.email && errors.email) || " "}
                        error={Boolean(errors.email && touched.email)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <FormLabel
                        sx={{
                          color: "#000",
                          ".MuiFormLabel-asterisk": { color: "red" },
                        }}
                        required
                      >
                        Phone Number
                      </FormLabel>
                      <TextField
                        fullWidth
                        size="small"
                        type="number"
                        name="phoneNumber"
                        placeholder="Enter your phone Number"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        onChange={handleChange}
                        helperText={(touched.phoneNumber && errors.phoneNumber) || " "}
                        error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
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
                        type="text"
                        name="password"
                        placeholder="Enter your password"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.password}
                        onChange={handleChange}
                        helperText={(touched.password && errors.password) || " "}
                        error={Boolean(errors.password && touched.password)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <FormLabel
                        sx={{
                          color: "#000",
                          ".MuiFormLabel-asterisk": { color: "red" },
                        }}
                        required
                      >
                        Confirm Password
                      </FormLabel>
                      <TextField
                        fullWidth
                        size="small"
                        type="text"
                        name="Password"
                        placeholder="Enter your confirm password"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.password}
                        onChange={handleChange}
                        helperText={(touched.password && errors.password) || " "}
                        error={Boolean(errors.password && touched.password)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <FormLabel
                        sx={{
                          color: "#000",
                          ".MuiFormLabel-asterisk": { color: "red" },
                        }}
                        required
                      >
                        Conutry
                      </FormLabel>
                      <TextField
                        fullWidth
                        size="small"
                        type="text"
                        name="country"
                        placeholder="Enter your country"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.country}
                        onChange={handleChange}
                        helperText={(touched.country && errors.country) || " "}
                        error={Boolean(errors.country && touched.country)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <FormLabel
                        sx={{
                          color: "#000",
                          ".MuiFormLabel-asterisk": { color: "red" },
                        }}
                        required
                      >
                        State
                      </FormLabel>
                      <TextField
                        fullWidth
                        size="small"
                        type="name"
                        name="state"
                        placeholder="Enter your state"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.state}
                        onChange={handleChange}
                        helperText={(touched.state && errors.state) || " "}
                        error={Boolean(errors.state && touched.state)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <FormLabel
                        sx={{
                          color: "#000",
                          ".MuiFormLabel-asterisk": { color: "red" },
                        }}
                        required
                      >
                        City
                      </FormLabel>
                      <TextField
                        fullWidth
                        size="small"
                        type="name"
                        name="city"
                        placeholder="Enter your city"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.city}
                        onChange={handleChange}
                        helperText={(touched.city && errors.city) || " "}
                        error={Boolean(errors.city && touched.city)}
                      />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <FormLabel
                        sx={{
                          color: "#000",
                          ".MuiFormLabel-asterisk": { color: "red" },
                        }}
                        required
                      >
                        Zip Code
                      </FormLabel>
                      <TextField
                        fullWidth
                        size="small"
                        type="name"
                        name="zipCode"
                        placeholder="Enter your zip code"
                        variant="outlined"
                        onBlur={handleBlur}
                        value={values.zipCode}
                        onChange={handleChange}
                        helperText={(touched.zipCode && errors.zipCode) || " "}
                        error={Boolean(errors.zipCode && touched.zipCode)}
                      />
                    </Grid>
                  </Grid>

                  <Stack direction={'row'} alignItems={'center'} columnGap={2} mt={3}>
                   <Tooltip title={'Sign Up Api is not exist its only UI'} placement="top-start">
                   <Button
                      variant="contained"
                      type="submit"
                      color="secondary"
                      className={style.bt}
                    //   disabled={true}
                    >
                      Sign Up
                    </Button>
                   </Tooltip>

                    <Typography variant="body1" mt={1} color="text.tabColor">
                      {"Already have an account? "}
                      <Link href="/login" passHref>
                        Sign In
                      </Link>
                    </Typography>
                  </Stack>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </>
  );
}
