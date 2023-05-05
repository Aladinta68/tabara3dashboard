import { Box, Button, TextField , useTheme , Typography} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Profile" subtitle="Manage Admin Profile" />
      <Box display="flex" flexDirection="row">
      <Box  width="50%">
      <Box my="50px" width="80%">
      <h4>Your Email </h4>
      <TextField
        fullWidth
        variant="filled"
        type="text"
        color="red"
        disabled
        placeholder="Aladinta68@gmail.com"
        sx={{ gridColumn: "span 4" }}
      />
      </Box>
      <Box >
      <h4>Change Email </h4>
      <Formik
        onSubmit={handleFormSubmit}
        width="50%"
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} width="50%">
            <Box 
              width="80%"
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            > 
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="New Email"
                onBlur={handleBlur}
                onChange={handleChange}
                name="new email"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Confirm New Email"
                onBlur={handleBlur}
                onChange={handleChange}
                name="confirm email"
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="start" mt="20px" width="50%">
              <Button type="submit" color="secondary" variant="contained">
                Change email
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      </Box>
      </Box>
      <Box width="50%" my="50px">
      <h4>Change Password </h4>
      <Formik
        onSubmit={handleFormSubmit}
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit} width="50%">
            <Box 
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            > 
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Current password"
                onBlur={handleBlur}
                onChange={handleChange}
                name="current password"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label=" New Password"
                onBlur={handleBlur}
                onChange={handleChange}
                name="password"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="passwod"
                label=" Confirm New Password"
                onBlur={handleBlur}
                onChange={handleChange}
                name="confirm password"
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="start" mt="20px" width="50%">
              <Button type="submit" color="secondary" variant="contained">
                Change password
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      </Box>
      </Box>
    </Box>
  );
};

export default Form;
