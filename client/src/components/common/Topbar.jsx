import  { useSelector, useDispatch } from "react-redux"
import  MenuIcon from "@mui/icons-material/Menu"
import  DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import  WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined"
import  { AppBar, Box, Button, IconButton, Stack, Toolbar, useScrollTrigger } from "@mui/material"
import  { cloneElement, useState } from "react"
import  { Link } from "react-router-dom"
import  menuConfigs from "../../configs/menu.configs.js"
import  { themeModes } from "../../configs/theme.configs.js"
import  { setAuthModalOpen } from "../../redux/features/authModalSlice.js"
import { setThemeMode } from "../../redux/features/themeModeSlice"
import Logo from "./Logo.jsx"

const ScrollAppBar = ({ children, window }) => {
  const { themeMode } = useSelector((state) => state.themeMode)

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined
  })

  return cloneElement(children, {
    sx: {
      color: trigger ? "text.primary" : themeMode === themeModes.dark ? "primary.contrastText" : "text.primary",
      backgroundColor: trigger ? "background.paper" : themeMode === themeModes.dark ? "transparent" : "background.paper"
    }
  })
}
const Topbar = () => {
  const { user } = useSelector((state) => state.user)
  const { appState } = useSelector((state) => state.appState)
  const { themeMode } = useSelector((state) => state.themeMode)

  const [sidebarOpen, setSidebarOpen] = useState(false)

  const dispatch = useDispatch()

  const onSwithTheme = () => {
    const theme = themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
    dispatch(setThemeMode(theme));
  };

  return (
    <>
      <ScrollAppBar>
        <AppBar elevation={0} sx={{ zIndex: 9999 }}>
          <Toolbar sx={{ alignItems: "center", justifyContent: "space-between"}}>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                color="inherit"
                sx={{ mr: 2, display: { md: "none" } }}
              >
                <MenuIcon />
                </IconButton>
                
                <Box sx={{ display: { xs: "inline-block", md: "none" } }}>
                  <Logo />
                </Box>               
            </Stack>

            {/* main menu */}
            <Box>
              
            </Box>
            {/* main menu */}
          </Toolbar>
        </AppBar>
      </ScrollAppBar>
    </>
  )
}

export default Topbar