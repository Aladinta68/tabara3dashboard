import { useState,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import axios from 'axios'

function App() {
 const [theme, colorMode] = useMode();
 const [isSidebar, setIsSidebar] = useState(true);
 const [bldtypnmbr, setbldtypnmbr] = useState([]);
 const [wilayas, setwilayas] = useState([]);
 const [dairas, setdairas] = useState([]);
 const [blods, setblods] = useState([]);
 const [listdonors, setlistdonors] = useState([]);
 const [onedonor, setonedonor] = useState([]);


const getlistdonors = async () => {
  const listdnr = await axios.get("http://127.0.0.1:8000/donors/");
  setlistdonors(listdnr.data);
}
const getdataofonedonor = async (id) => {
  const onedonorr = await axios.get(`http://127.0.0.1:8000/donors/${id}/`);
  setonedonor(onedonorr.data);
}
 const adddonors = async (data) => {
  axios.post('http://127.0.0.1:8000/donors/', data)
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}
const getallwilaya = async () => {
  const wil = await axios.get("http://127.0.0.1:8000/wilaya/")
  setwilayas(wil.data)
}

const getalldairaofwilaya = async (numero_wilaya) => {
  const dair = await axios.get(`http://127.0.0.1:8000/wilaya/${numero_wilaya}/`)
  setdairas(dair.data)
}
const getallblod = async () => {
  const bld = await axios.get("http://127.0.0.1:8000/bloodTypes/")
  setblods(bld.data)
} 
const getblodtypenumber = async () => {
    const nmbrblod = await axios.get("http://127.0.0.1:8000/bloodTypes/");
    setbldtypnmbr(nmbrblod)
  }

useEffect(() => {
  getlistdonors()
  getblodtypenumber();
  getallwilaya();
  getallblod();
}, []);


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard bldtypnmbr={bldtypnmbr} />} />
              <Route path="/team" element={<Team adddonors={adddonors} wilayas={wilayas} dairas={dairas} blods={blods} getalldairaofwilaya={getalldairaofwilaya} />} />
              <Route path="/contacts" element={<Contacts listdonors={listdonors} getdataofonedonor={getdataofonedonor} onedonor={onedonor} wilayas={wilayas} dairas={dairas} blods={blods} getalldairaofwilaya={getalldairaofwilaya} />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/line" element={<Line />} />
              <Route path="/pie" element={<Pie bldtypnmbr={bldtypnmbr} />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
