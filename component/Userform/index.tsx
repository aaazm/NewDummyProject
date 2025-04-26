import {
  Box,
  Button,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Formik } from "formik";
import style from "../../src/styles/style.module.scss";

interface FormValues {
  userName: string;
  userEmail: string;
  userPassword: string;
}

const initialValues: FormValues = {
  userName: "",
  userEmail: "",
  userPassword: "",
};
const Userform = ({ setOpen }: any) => {
  const onFormSubmit = (values: any) => {
    console.log(values);
    setOpen(false);
  };
  return (
    <Box className={style.user_form}>
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
              Add User
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
                  User Name
                </FormLabel>
                <TextField
                  required
                  fullWidth
                  size="small"
                  type="text"
                  name="userName"
                  placeholder="Enter name"
                  variant="outlined"
                  onBlur={handleBlur}
                  value={values.userName}
                  onChange={handleChange}
                  error={Boolean(errors.userName && touched.userName)}
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
                  Email
                </FormLabel>
                <TextField
                  required
                  fullWidth
                  size="small"
                  type="email"
                  name="userEmail"
                  placeholder="Enter Email"
                  variant="outlined"
                  onBlur={handleBlur}
                  value={values.userEmail}
                  onChange={handleChange}
                  error={Boolean(errors.userEmail && touched.userEmail)}
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
                  User Password
                </FormLabel>
                <TextField
                  required
                  fullWidth
                  size="small"
                  type="text"
                  name="userPassword"
                  placeholder="Enter User Password"
                  variant="outlined"
                  onBlur={handleBlur}
                  value={values.userPassword}
                  onChange={handleChange}
                  error={Boolean(errors.userPassword && touched.userPassword)}
                />
              </Grid>
            </Grid>

            <Box
              sx={{ textAlign: "center", mt: 3 }}
              display={"flex"}
              flexDirection={"column"}
            >
              <Button variant="contained" type="submit" className={style.bt}>
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Userform;
