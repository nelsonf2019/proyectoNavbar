import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import { useNotification } from "../../context/notification.context"
import { LoginValidate } from "../../utils/validateForm"
import { useFormik } from "formik"

type LoginType = {
    username:string;
    password:string;
}

const LoginPage =()=>{
    const { getError } = useNotification()
    const formik = useFormik<LoginType>({
        initialValues: {
            username: '',
            password: '',
          },
          validationSchema: LoginValidate,
          onSubmit: (values: LoginType) => {
           getError(JSON.stringify(values))
          },
    })
    return(
        <Container  maxWidth="sm" >
            <Grid 
                container 
                direction="column"
                alignItems="center" 
                justifyContent="center"
                sx={{minHeight:"90vh"}}
            >
               <Grid item>
                    <Paper sx={{padding:"1.2em", borderRadius:"0.5em"}}>
                        <Typography sx={{mt:1, mb:1}} variant="h4">iniciar sesión</Typography>
                            <Box component="form" onSubmit={formik.handleSubmit}>
                                
                                    <TextField
                                        name="username"
                                        margin="normal" 
                                        type="text" 
                                        fullWidth
                                        label="Email"
                                        sx={{mt:2, mb:1.5}}
                                       // required
                                       value={formik.values.username}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       error={formik.touched.username && Boolean(formik.errors.username)}
                                       helperText={formik.touched.username && formik.errors.username}
                                    />
                                
                                    <TextField
                                        name="password"
                                        margin="normal" 
                                        fullWidth
                                        type="Password"
                                        label="password"
                                        sx={{mt:1.5, mb:1.5}}
                                       // required
                                       value={formik.values.password}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}
                                       error={formik.touched.password && Boolean(formik.errors.password)}
                                       helperText={formik.touched.password && formik.errors.password}
                                    />
                                
                            <Button 
                                variant="contained" 
                                fullWidth 
                                type="submit" 
                                sx={{mt:1.5, mb:3}}

                            >Aceptar</Button>
                        </Box>
                    </Paper>
               </Grid>
           </Grid>        
        </Container>     
    )
}

export default LoginPage;