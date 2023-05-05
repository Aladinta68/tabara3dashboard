import { Box } from "@mui/material";
import Header from "../../components/Header";
import Radarchart from "../../components/Radarchart";

const Radar = () => {
  return (
    <Box m="20px">
      <Header title="Radar Chart" subtitle="Simple Radar Chart" />
      <Box height="75vh">
        <Radarchart  />
      </Box>
    </Box>
  );
};

export default Radar;
