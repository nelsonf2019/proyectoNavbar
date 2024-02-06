import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { characters } from "../../api/Character"
import { TypeCharacter } from "./interface/Character.interface"
 
import { Box, Button, Chip, CircularProgress, Container, Divider, Grid, Typography } from "@mui/material"
 



const CharacterPage =({})=>{
    const {id} = useParams()//para poder obtener el poramatro id 
    const [loading, setLoading] = useState<boolean>(true)
    const [character, setCharacter] = useState<TypeCharacter | null>(null)
 
    console.log(id)
    useEffect(()=>{
        characters.getId({id})
        .then((r)=> {
            console.log(r.data)
            setLoading(false)
            setCharacter(r.data)
        })
        .catch((error)=> console.log(error))
    },[])
    let navegate = useNavigate()
    return(
        
        <Box sx={{Width:"100%"}}>
             <Container maxWidth="xl">
                {
                    loading ? (
                        <Box sx={{display:"flex", justifyContent:"center", mt:4}}>
                            <CircularProgress />
                        </Box>
                    ):(
                        <Grid sx={{mt:2}} container columnSpacing={2}>
                            <Grid item xs={6}>
                                <Typography variant="h1">{character!.name}</Typography>
                                <Divider />
                                <Typography variant="h6">{character!.origin.name}</Typography>
                                <Box  sx={{display:"grid",mt:2}}>
                                <Chip
                                    label={ character!.status} color="success" variant="outlined"
                                 />

                                 <Button 
                                    variant="contained"
                                    onClick={()=> navegate("/")}
                                >Volver</Button>
                                </Box>
                            </Grid>
                            <Grid item xs={6}>
                                <img src={character!.image} style={{width:"100%", borderRadius:"0.5em"}} />
                            </Grid>
                        </Grid>
                    )
                }
             </Container>
        </Box>
        
    )
}

export default CharacterPage;