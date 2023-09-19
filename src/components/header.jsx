import { tokens } from "../theme";
import { useTheme, Typography } from "@mui/material";

const Header = ({text}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    
    return (
        <Typography variant="h2"
                    color={colors.grey[100]} 
                    fontWeight="bold"
                    fontSize={"20px"}
                    sx={{ m: "0 0 8px 0" }} > {text} </Typography>
       )
}

export default Header;