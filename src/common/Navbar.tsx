import { AppBar, Badge, Box, Button, Container, Grid, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../redux/hooks";
import { useState } from "react";

import { CartComponent } from "./Cart";

export const Navbar: React.FC<{}>=()=>{
  const navigate = useNavigate()
  const items = useAppSelector((state) => state.cartReducer);
  const [open, setOpen] = useState<boolean>(false);
  const handleStateViewDrawer = () => {
    setOpen((state) => !state);
  }
    return(
        <Box sx={{flexGrow: 1}}>
            <AppBar position="sticky">
                <Toolbar>
                    <Container maxWidth="xl">
                        <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Typography>Coder</Typography>
                            </Grid>
                            <Grid item>
                                <Stack direction="row" spacing={2}>
                                <IconButton
                                  color="primary"
                                  onClick={() => handleStateViewDrawer()}
                                >
                                    <Badge color="error" badgeContent={items.length}>
                                        <ShoppingCartIcon />
                                    </Badge>
                                </IconButton>
                                <Button variant="contained" onClick={() => navigate("login")}>Login</Button>
                                <Button variant="outlined">Register</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                </Toolbar>
            </AppBar>
            <CartComponent
                open={open}
                handleStateViewDrawer={handleStateViewDrawer}
            />
        </Box>
    )

}