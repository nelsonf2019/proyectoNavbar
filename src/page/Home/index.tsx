import { Box, Button, CardHeader, CircularProgress, Container, Divider, Grid, Pagination, Stack, Typography } from "@mui/material"
import { CardComponent } from "../../components/Card"

import { HeaderComponent } from "../../components"
import React, { useEffect, useState } from "react"
import { characters } from "../../api/Character"
import { TypeCharacter } from "../character/interface/Character.interface"

 

//llamamos el useNotification y luego obtenemos el getError para ejecutar desde el boton
export const HomePage =({})=>{
    const [allcharacter, setallcharacter] = useState<Array<TypeCharacter> | null>(null)
    const [loading, setLoading] = useState(true)
    const [count, setCount] = useState(0)
    const [page, setPage] = useState(1)
    useEffect(()=>{
        setLoading(true)// se muestra en true
        characters.getAll({page}).then((r)=>{
            setCount(r.data.info.pages)
            setallcharacter(r.data.results) 
           setTimeout(()=> setLoading(false), 1000)//se pone en false en un segundo y luego se muestra
        }).catch((error)=> console.log(error.mensjase))
        // characters.getId({id:1}).then((r)=>{
        //     console.log(r.data)  
        // }).catch((error)=> console.log(error.mensjase))
    },[page])//se renderiza y carga la pagina por el número de página
    const handleChange =(event: React.ChangeEvent<unknown>, value: number)=>{
        console.log(page)
        setPage(value)
    }
    return(
        <Container 
          //sx={{mt:1}} 
          maxWidth="xl" 
        >
            {/* utilizamos este componente tantas veces que necesitemos */}
          <HeaderComponent 
            title="Hola mundo" 
            description="soy el description"
            element={<Button fullWidth variant="contained">soy boton del header componente</Button>}
          />
          {
            loading?(
                <Box sx={{display:"flex", justifyContent:"center", mt:4}}>
                    <CircularProgress />
                </Box>
            ):(
                <>
                    <Box>
                    {
                    allcharacter?.length !== 0 ? (
                        <Grid sx={{my:2}} container spacing={2} direction="row">
                            {
                                allcharacter?.map((character)=>(
                                    <Grid key={character.id} item xs={3}>
                                        <CardComponent 
                                        
                                        image={character.image}
                                        name={character.name}
                                        species={character.species}
                                        status={character.status}    
                                        id={character.id}                           
                                        />     
                                    </Grid>
                                ))
                            }
                        </Grid>
                    ):"No fount 404"
                    }
                    </Box>
                    <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
                        <Typography 
                        >Páginas: {count}</Typography>
                        <Pagination 
                            variant="outlined"
                            color="primary"
                            count={count} 
                            page={page} 
                            onChange={handleChange} 
                            sx={{mb:3}}
                            size="large"
                        />
                    </Box>
                </>
            )
          }

    
        </Container>       
    )
}