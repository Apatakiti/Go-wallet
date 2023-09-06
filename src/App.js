// import React, { useState } from 'react'
// import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ThemeProvider } from '@mui/material/styles';
import  CssBaseline   from '@mui/material/CssBaseline';
import { globalColorContext, useColorMode } from "./theme";
import SideBar from '../src/scenes/bars/sidebar'
import Topbar from '../src/scenes/bars/TopBar'
import Button from '@mui/material/Button';

function App() {
  const [theme, colorState] = useColorMode()

  return ( 
    <ProSidebarProvider>
     <globalColorContext.Provider value={colorState} >
      <ThemeProvider theme={theme} >
        <div id="app" style={{ display:"flex" }} >
            <CssBaseline />
            <SideBar />
            <main style={{flexBasis:"100%"}}>
              <Topbar />
              <h1 style={{ color: "green", textAlign:"center" }}> React-Pro-Sidebar </h1>
              <Button variant="contained" color="secondary"> Click me </Button>
            </main>
          </div>
       </ThemeProvider>
     </globalColorContext.Provider>
</ProSidebarProvider>
  );
}

export default App;
