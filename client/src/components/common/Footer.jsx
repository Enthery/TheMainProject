import React from 'react'
import { Paper, Stack, Box, Button }  from "@mui/material"
import Container from "./Container.jsx"
import Logo from "./Logo.jsx"
import menuConfigs from "../../configs/menu.configs.js"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <Container>
        <Paper square={true} sx={{ backgroundImage: "unset", padding: "2rem" }}>
            <Stack
            alignItems="center"
            justifyContent="space-between"
            direction={{ xs: "column", md: "row" }}
            sx={{ height: "max-content" }}
            >
                <Logo/>
                <Box>
                    {menuConfigs.main.map((item, index) => (
                        <Button
                        ket={index}
                        sx={{ color: "inherit"}}
                        component={Link}
                        to={item.path}
                        >
                            {item.display}
                        </Button>
                    ))}
                </Box>
            </Stack>
        </Paper>
    </Container>
  )
}

export default Footer