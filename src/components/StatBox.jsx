import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";


const StatBox = ({ donornumber, icon, paragr }) => {


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%"  display="flex" flexDirection="row" alignItems="center" justifyContent="center">
          {icon}
          <Typography
            marginLeft="30px"
            variant="h4"
            fontWeight="bold"
            sx={{ color: colors.grey[100] }}
          >
            {donornumber}
            {paragr}
          </Typography>
    </Box>
  );
};

export default StatBox;
