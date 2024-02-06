import { Box, Divider, Grid, Typography } from "@mui/material"

interface HeaderProps{
    title: string
    description:string
    element?: React.ReactNode | null;// en este caso le pasamos elemento hijo como un children de un componente padre a compnente hijo
}
//Primero hacemos los containers y luego dentro se ponen los box
//en el grid primero va como container y luego los items
export const HeaderComponent =({title, description, element}:HeaderProps)=>{
    return(
        <div>
            <Box sx={{width:"100%", height:"250px"}}>
                <Grid 
                    container 
                    direction="row" 
                    justifyContent="center" 
                    alignItems="center"
                    sx={{height:"100%"}}
                >
                <Grid item xs={5}>
                    <Grid 
                        container 
                        direction="column" 
                        justifyContent="center" 
                        alignItems="center"
                        sx={{height:"100%"}}
                    >
                        <Grid item>
                            <Typography variant="h1"> {title} </Typography>
                        </Grid>
                        <Grid item sx={{mt:1}}>
                            <Typography> {description} </Typography>
                        </Grid>
                        { //si es distinto que muestre undefined de lo contrario muestre la items
                            element !== undefined && <Grid sx={{mt:0.5, width:"100%"}} item> <Typography> {element} </Typography></Grid> 
                        }
                    </Grid>
                </Grid>
                </Grid>
            </Box>
            <Divider />
        </div>
    )
}