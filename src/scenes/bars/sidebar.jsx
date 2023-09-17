import { useState } from "react";
import { useProSidebar, Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { tokens } from "../../theme";
import { useTheme, Box, IconButton, Typography, } from "@mui/material";
import { Link } from "react-router-dom";

const SideBar = () => {
  const { collapseSidebar } = useProSidebar();
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  const [menuIcon, setMenuIcon] = useState(false)
  const switchMenuIcon = () => { setMenuIcon(!menuIcon) }

  const toggleMenu = () => {
    switchMenuIcon()
    collapseSidebar()
  }

  const [hoverItem1, setItem1] = useState(false)
  const MouseEnterItem1 = () => { setItem1(true) }
  const MouseLeaveItem1 = () => { setItem1(false) }
  const styleItem1 = {backgroundColor: hoverItem1 ? colors.primary[400] : colors.primary[400]}

  const [hoverItem2, setItem2] = useState(false)
  const MouseEnterItem2 = () => { setItem2(true) }
  const MouseLeaveItem2 = () => { setItem2(false) }
  const styleItem2 = {backgroundColor: hoverItem2 ? colors.primary[700] : colors.primary[400]}

  const [hoverItem3, setItem3] = useState(false)
  const MouseEnterItem3 = () => { setItem3(true) }
  const MouseLeaveItem3 = () => { setItem3(false) }
  const styleItem3 = {backgroundColor: hoverItem3 ? colors.primary[700] : colors.primary[400]}

  const [hoverItem4, setItem4] = useState(false)
  const MouseEnterItem4 = () => { setItem4(true) }
  const MouseLeaveItem4 = () => { setItem4(false) }
  const styleItem4 = {backgroundColor: hoverItem4 ? colors.primary[700] : colors.primary[400]}

  const [hoverItem5, setItem5] = useState(false)
  const MouseEnterItem5 = () => { setItem5(true) }
  const MouseLeaveItem5 = () => { setItem5(false) }
  const styleItem5 = {backgroundColor: hoverItem5 ? colors.primary[700] : colors.primary[400]}

  const [hoverItem6, setItem6] = useState(false)
  const MouseEnterItem6 = () => { setItem6(true) }
  const MouseLeaveItem6 = () => { setItem6(false) }
  const styleItem6 = {backgroundColor: hoverItem6 ? colors.primary[700] : colors.primary[400]}

  const [hoverItem7, setItem7] = useState(false)
  const MouseEnterItem7 = () => { setItem7(true) }
  const MouseLeaveItem7 = () => { setItem7(false) }
  const styleItem7 = {backgroundColor: hoverItem7 ? colors.primary[700] : colors.primary[400]}

  return (
    <Box>
      <Sidebar>
        <Menu
          // menuItemStyles={{}}
          style={{
            backgroundColor: colors.primary[400],
            height: "100vh", color: colors.grey[100]
          }}
        >

          <MenuItem onClick={() => { toggleMenu() }}
            icon={menuIcon ? <MenuOutlinedIcon /> : undefined}
            onMouseEnter={MouseEnterItem1}
            onMouseLeave={MouseLeaveItem1}
            style={styleItem1}
          > 

            {!menuIcon && (
              <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}> Go logo </Typography>
                <IconButton style={{ alignItems: "flex-end" }} > <MenuOutlinedIcon /> </IconButton>
              </Box>
            )}

          </MenuItem>

          {(!menuIcon &&
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img alt="profile-user" width="100px" height="100px" src={`../../assets/user.JPG`}
                  style={{ cursor: "pointer", borderRadius: "50%" }} />
              </Box>

              <Box textAlign="center">
                <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m: "11px 0 0 0" }} >
                  #username
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  #wallet address
                </Typography>
              </Box>
            </Box>
          )}

          
            <Link style={{color: colors.grey[100], textDecoration: "none"}} to="/" ><MenuItem
            icon={<HomeOutlinedIcon />}
            style={styleItem2}
            onMouseEnter={MouseEnterItem2}
            onMouseLeave={MouseLeaveItem2}
          >
            <Typography>Dashboard</Typography>
           </MenuItem>
          </Link>

          <Link style={{color: colors.grey[100], textDecoration: "none"}} to="/MarketOverview" >
            <MenuItem
            icon={<TrendingUpOutlinedIcon />}
            style={styleItem3}
            onMouseEnter={MouseEnterItem3}
            onMouseLeave={MouseLeaveItem3}
          >
            <Typography>Market Overview</Typography>
           </MenuItem>
          </Link>

         <Link style={{color: colors.grey[100], textDecoration: "none"}} to="/Exchange" > <MenuItem
            icon={<SwapHorizOutlinedIcon />}
            style={styleItem4}
            onMouseEnter={MouseEnterItem4}
            onMouseLeave={MouseLeaveItem4}
          >
            <Typography>Exchange</Typography>
          </MenuItem>
          </Link>

         <Link style={{color: colors.grey[100], textDecoration: "none"}} to="/SendRecieve" > <MenuItem
            icon={<AttachMoneyOutlinedIcon />}
            style={styleItem5}
            onMouseEnter={MouseEnterItem5}
            onMouseLeave={MouseLeaveItem5}
          >
            <Typography>Send & Recieve</Typography>
          </MenuItem>
          </Link>

         <Link style={{color: colors.grey[100], textDecoration: "none"}} to="/Transactions" >
           <MenuItem
            icon={<ReceiptOutlinedIcon />}
            style={styleItem6}
            onMouseEnter={MouseEnterItem6}
            onMouseLeave={MouseLeaveItem6}
          >
            <Typography>Transactions</Typography>
          </MenuItem>
          </Link> 

         <Link style={{color: colors.grey[100], textDecoration: "none"}} to="/HelpSupport" > 
         <MenuItem
            icon={<HelpOutlineOutlinedIcon />}
            style={styleItem7}
            onMouseEnter={MouseEnterItem7}
            onMouseLeave={MouseLeaveItem7}
          >
            <Typography>Help & Support</Typography>
           </MenuItem> 
          </Link>
        </Menu>
      </Sidebar>
    </Box>)
}

export default SideBar;
