import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import PieChart from './../../components/PieChart';
import ap from "../../images/ap.png"
import am from "../../images/am.png"
import op from "../../images/op.png"
import om from "../../images/om.png"
import bp from "../../images/bp.png"
import bm from "../../images/bm.png"
import abp from "../../images/abp.png"
import abm from "../../images/abm.png"
import totaldonor from "../../images/totaldonor.png"
import PersonOffIcon from '@mui/icons-material/PersonOff';
import LineChart from './../../components/LineChart';



const Dashboard = ({bldtypnmbr}) => {

  const amoins = bldtypnmbr?.data?.[0]?.number_type;
  const aplus = bldtypnmbr?.data?.[1]?.number_type;
  const omoins = bldtypnmbr?.data?.[2]?.number_type;
  const oplus = bldtypnmbr?.data?.[3]?.number_type;
  const bmoins = bldtypnmbr?.data?.[4]?.number_type;
  const bplus = bldtypnmbr?.data?.[5]?.number_type;
  const abmoins = bldtypnmbr?.data?.[6]?.number_type; 
  const abplus = bldtypnmbr?.data?.[7]?.number_type;
  const totaldonornumber=(amoins+aplus+omoins+oplus+bmoins+bplus+abmoins+abplus);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TABARA3" subtitle="Welcome to your dashboard" />
      </Box>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        > 
          <StatBox
          donornumber={aplus}
            icon={
              <img src={ap}/>
            }
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
          donornumber={amoins}
            icon={
              <img src={am}/>
            }
            
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
          donornumber={bplus}
            icon={
              <img src={bp}/>
            }
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
          donornumber={bmoins}
            icon={
              <img src={bm}/>
            }
          />
        </Box>
        
        {/* ROW 2 */}
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
          donornumber={oplus}
            icon={
              <img src={op}/>
            }
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
          donornumber={omoins}
            icon={
              <img src={om}/>
            }
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
          donornumber={abplus}  
            icon={
              <img src={abp}/>
            }
          />
        </Box>
        <Box
          gridColumn="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
          donornumber={abmoins}
            icon={
              <img src={abm}/>
            }
          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <StatBox
          donornumber={totaldonornumber}
            icon={
              <img src={totaldonor}/>
            }
            paragr={
              <h5>Total donors</h5>
            }
          />
          
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
          donornumber={abmoins}
            icon={<PersonOffIcon color="secondary" fontSize="large"/>}
            paragr={
              <h5>inactif donors</h5>
            }
          />
        </Box>
        {/* ROW 3 */}
        <Box
        gridColumn="span 4"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Blod percentage
        </Typography>
        <Box height="250px" mt="-20px">
          <PieChart bldtypnmbr={bldtypnmbr} isDashboard={true} />
        </Box>
      </Box>
      <Box
        gridColumn="span 8"
        gridRow="span 2"
        backgroundColor={colors.primary[400]}
      >
        <Typography
          variant="h5"
          fontWeight="600"
          sx={{ padding: "30px 30px 0 30px" }}
        >
          Blod stats
        </Typography>
        <Box height="250px" mt="-20px">
          <LineChart isDashboard={true}  />
        </Box>
      </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
             stats
          </Typography>
          <Box height="250px"  mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
