import React, { useState } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { ColorModeContext, tokens } from '../../theme'

const Topbar = () => {
    const colorMode = React.useContext(ColorModeContext)
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);

    const [icon, setIcon] = useState(false)
    const switchIcon = () => {setIcon(!icon)}

    const toggle_Theme_icon = () => {
        colorMode.toggleColorMode()
        switchIcon()
    }

    return (
        <Box display="flex" justifyContent="flex-end" variant="contained">

          <IconButton onClick={toggle_Theme_icon}>
              {icon ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon /> }     
          </IconButton>

            <Box display="flex">
                <IconButton> < NotificationsOutlinedIcon /> </IconButton>
                <IconButton> < SettingsOutlinedIcon /> </IconButton>
                <IconButton> < PersonOutlinedIcon /> </IconButton>
            </Box>
        </Box>
    )
}

export default Topbar;