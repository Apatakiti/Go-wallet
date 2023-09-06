import { useProSidebar, Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import { Link } from "react-router-dom";
// import { colorTokens } from "../../theme";
import { useTheme, Box, IconButton,Typography,  } from "@mui/material";
    
const SideBar = () => {
    const { collapseSidebar } = useProSidebar();
    return ( 
    <Box>
     <Sidebar >
        <Menu  style={{ height: "100vh", backgroundColor: "yellow", color: "green" }}>
          <MenuItem onClick={() => { collapseSidebar() }}
                    icon={ collapseSidebar ? <MenuOutlinedIcon /> : undefined }>  
              <h2 style={{ color: "Red", textAlign: "center" }} >Admin</h2> 
          </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}>Home</MenuItem>
          <MenuItem icon={<PeopleOutlinedIcon />}>Team</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>Contacts</MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Profile</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>FAQ</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Calendar</MenuItem>
        </Menu>
      </Sidebar>
     </Box> )
}

export default SideBar;
