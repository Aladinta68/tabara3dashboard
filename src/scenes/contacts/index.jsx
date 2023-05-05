import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import useMediaQuery from "@mui/material/useMediaQuery";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from 'axios'
import { useState } from "react";
import { Dialog, DialogTitle,FormControl,InputLabel,NativeSelect,TextField, DialogContent, DialogActions, Button } from "@mui/material";


const Contacts = ({listdonors, wilayas, dairas, blods, getalldairaofwilaya}) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [openDialog, setOpenDialog] = useState(false);
  const [donorIdToDelete, setDonorIdToDelete] = useState(null);
  const [openDialog2, setOpenDialog2] = useState(false);
  const [onedonorid, setonedonorid] = useState('');
  const [nebld, setnebld] = useState('');
  const [newil, setnewil] = useState('');
  const [nedai, setnedai] = useState('');
  const [neem, setneem] = useState('');
  const [nepas, setnepas] = useState('');
  const [nenmr, setnenmr] = useState('');

  const handlewilaya = (e) => {
    const getwilayaid = e.target.value;
    getalldairaofwilaya(getwilayaid);
  }

  const handleupdatesubmit = (e) => {
    e.preventDefault(); 
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data.entries()); 
    const id = onedonorid;
    axios.put(`http://127.0.0.1:8000/donors/${id}/`, formData)
      .then(() => {
        setOpenDialog2(false);
        window.location.reload(); 
      })
      .catch((error) => {
        console.log(error);
        setOpenDialog2(false);
      });
      };
  


  const handleUpdate =  (id,blood,wilaya,daiira,email,password,n_tel) => {
    setOpenDialog2(true);
    setonedonorid(id);
    setnebld(blood);
    setnewil(wilaya);
    setnedai(daiira);
    setneem(email);
    setnepas(password);
    setnenmr(n_tel);
  };
 
  const handleDelete = (id) => {
    setDonorIdToDelete(id);
    setOpenDialog(true);
  };
  const handleConfirmDelete = () => {
    axios.delete(`http://127.0.0.1:8000/donors/${donorIdToDelete}/`)
      .then(() => {
        setOpenDialog(false);
        window.location.reload(); 
      })
      .catch((error) => {
        console.log(error);
        setOpenDialog(false);
      });
  };
  
  const columns = [
    { field: "id",
     headerName: "id",
      flex: 0.5 },
    {
      field: "blood",
      headerName: "blood",
      flex: 1,
    },
    {
      field: "wilaya",
      headerName: "wilaya",
      flex: 1,
    },
    {
      field: "daiira",
      headerName: "daiira",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "password",
      headerName: "password",
      flex: 1,
    },
    {
      field: "n_tel",
      headerName: "n_tel",
      flex: 1,
    },
    {
      field: "status",
      headerName: "status",
      flex: 1,
    },
    {
      field: "update",
      headerName: "Update",
      flex: 1,
      renderCell: (params) => (
        <IconButton aria-label="update" onClick={() => handleUpdate(params.row.id,params.row.blood,params.row.wilaya,params.row.daiira,params.row.email,params.row.password,params.row.n_tel)}>
          <EditIcon />
        </IconButton>
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      flex: 1,
      renderCell: (params) => (
        <IconButton aria-label="delete" onClick={() => handleDelete(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      ),
    },
  ];

  return (
    <>
    <Box m="20px">
      <Header
        title="Donors"
        subtitle="List of Donors "
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={listdonors}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
    <Box m="20px">
      {/* ... */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this donor?
        </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button color="error" onClick={handleConfirmDelete}>Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>










    <Box >
        <Dialog  open={openDialog2} onClose={() => setOpenDialog2(false)}>
        <DialogTitle>Update</DialogTitle>
        <DialogContent>
        <form onSubmit={handleupdatesubmit}>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": { gridColumn: isNonMobile ? undefined : "span 4",width: "75%"
            },
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
        <option selected value={nebld}>{nebld}</option>
        {
          (
            blods.map((bld) => {
              return (
                <option key={bld.id} value={bld.id} >{bld.type}</option>
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
          defaultValue='wilaya'
          onChange={(e) => handlewilaya(e)} 
          required
          inputProps={{
            name: 'wilaya',
            id: 'uncontrolled-native2',
          }}
        >
        <option selected value={newil}>{newil}</option>
        {
          (
            wilayas.map((wil) => {
              return (
                <option value={wil.number} key={wil.number} >{wil.name}</option>
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
            id: 'uncontrolled-native3',
          }}
        >
        <option selected value={nedai}>{nedai}</option>
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
      defaultValue={neem}
      onChange={(e) => setneem(e.target.value)}
      sx={{ gridColumn: "span 4" }}
    />
    <TextField
      fullWidth
      variant="filled"
      id="password"
      name="password"
      type="password"
      label="password"
      value={nepas}
      defaultValue={nepas}
      onChange={(e) => setnepas(e.target.value)}
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
      defaultValue={nenmr}
      onChange={(e) => setnenmr(e.target.value)}
      sx={{ gridColumn: "span 4" }}
    />
    <Button type="submit" color="success" variant="contained" className="my-3" >Update</Button>
        </Box>
        </form> 
      </DialogContent>
        <DialogActions>
          <Button color="secondary" onClick={() => setOpenDialog2(false)}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </Box>
    </>
  );
};

export default Contacts;
