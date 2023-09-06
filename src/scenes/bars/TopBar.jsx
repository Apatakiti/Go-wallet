import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { colorTokens, globalColorContext } from '../../theme'

const Topbar = () => {
    const colorMode = React.useContext(globalColorContext)
    const theme = useTheme()
    // const color = colorTokens(theme.palette.mode)

    return (
        <Box display="flex" justifyContent="flex-end">

          <IconButton onClick={colorMode.toggleColorMode}>
               {theme.palette.mode === "dark" ? ( <DarkModeOutlinedIcon /> ) : ( <LightModeOutlinedIcon /> )}
          </IconButton>

            <Box  display="flex"  >
                <IconButton> < NotificationsOutlinedIcon /> </IconButton>
                <IconButton> < SettingsOutlinedIcon /> </IconButton>
                <IconButton> < PersonOutlinedIcon /> </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar;