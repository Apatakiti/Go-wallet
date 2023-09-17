import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ThemeProvider } from '@mui/material/styles';
import  CssBaseline   from '@mui/material/CssBaseline';
import SideBar from '../src/scenes/bars/sidebar';
import Topbar from '../src/scenes/bars/TopBar';
import { ColorModeContext, useMode } from "./theme";

import DashBoard from "./scenes/dashboard/Dashboard";
import MarketOverview from "./scenes/marketOverview/marketOverview";
import Exchange from "./scenes/exchange/exchange";
import SendRecieve from "./scenes/sendRecieve/sendRecieve";
import Transactions from "./scenes/Transactions/Transactions";
import HelpSupport from "./scenes/helpSupport/helpSupport";

function App() {
const [themeMode, colorMode] = useMode()
  return ( 
    <ProSidebarProvider>
     <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={themeMode} >
        <div id="app" style={{ display:"flex" }} >
            <CssBaseline />
            <SideBar />

            <main style={{flexBasis:"100%"}}>
              <Topbar />

              <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/MarketOverview" element={<MarketOverview />} />
                <Route path="/Exchange" element={<Exchange />} />
                <Route path="/SendRecieve" element={<SendRecieve />} />
                <Route path="/Transactions" element={<Transactions />} />
                <Route path="/HelpSupport" element={<HelpSupport />} />
            </Routes>
            </main>
          </div>
       </ThemeProvider>
     </ColorModeContext.Provider>
</ProSidebarProvider>
  );
}

export default App;
