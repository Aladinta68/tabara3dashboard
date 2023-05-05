import { Box, Button, NativeSelect, TextField } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Alert from 'react-bootstrap/Alert';


const Team = ({adddonors, wilayas, dairas, blods, getalldairaofwilaya,handleSwitchChange}) => {
 
  const isNonMobile = useMediaQuery("(min-width:600px)");


const handleFormSubmit = (e) => {
  
  const data = new FormData(e.target);
  const formData = Object.fromEntries(data.entries());
  console.log(formData)
  adddonors(formData);
};

const handlewilaya = (e) => {
  const getwilayaid = e.target.value;
  getalldairaofwilaya(getwilayaid)
}


  return (
    <Box m="20px">
      <Header title="Add Donors" subtitle=" Adding New Donors" />
      <Box>
      <Alert variant='danger'>
              لقد تم التسجيل من قبل بواسطة احد البيانات المدخلة
            </Alert>
            </Box>
          <form onSubmit={handleFormSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            فصيلة الدم 
            </InputLabel>
            <NativeSelect
              defaultValue='blod'
              required
              inputProps={{
                name: 'blood',
                id: 'uncontrolled-native',
              }}
            >
            <option value="blod"  selected disabled>فصيلة الدم </option>
            {
              (
                blods.map((bld) => {
                  return (
                    <option key={bld.id} value={bld.id}>{bld.type}</option>
                  )
                })
              )
            }
            </NativeSelect>
          </FormControl>
          <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            الولاية
            </InputLabel>
            <NativeSelect
              onChange={(e) => handlewilaya(e)} 
              defaultValue='wilaya'
              required
              inputProps={{
                name: 'wilaya',
                id: 'uncontrolled-native',
              }}
            >
            <option value="wilaya" selected disabled>الولاية</option>
            {
              (
                wilayas.map((wil) => {
                  return (
                    <option value={wil.number} key={wil.number}>{wil.name}</option>
                  )
                })
              )
            }
            </NativeSelect>
          </FormControl>
          <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
            الدائرة
            </InputLabel>
            <NativeSelect
              defaultValue='daiira'
              required
              inputProps={{
                name: 'daiira',
                id: 'uncontrolled-native',
              }}
            >
            <option value="daira" selected disabled>الدائرة</option>
            {
              (
                dairas.map((dai) => {
                  return (
                    <option key={dai.number} value={dai.number}>{dai.name}</option>
                  )
                })
              )
            }
            </NativeSelect>
          </FormControl>
              <TextField
                required
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                id="email"
                name="email"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                id="password"
                name="password"
                type="password"
                label="password"
                sx={{ gridColumn: "span 4" }}
                required
              />
              <TextField
                required
                fullWidth
                variant="filled"
                type="number"
                label="Phone Number"
                id="n_tel"
                name="n_tel"
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" className="my-3">
                Create New User
              </Button>
            </Box>
          </form>
    </Box>
  );
};
export default Team;
