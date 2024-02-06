import { 
        Button, 
        Card, 
        CardActions, 
        CardContent, 
        CardMedia, 
        Divider, 
        Typography 
    } from "@mui/material"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { addToCart } from "../../redux/slices/cart.slice"
import { useEffect, useState } from "react"
import { useAppSelector } from "../../redux/hooks"
import { setItem } from "../../utils/LocalStorage"

interface Props{
    image: string
    name:string
    species:string
    status:string
    id: number
}   

export const CardComponent=(
    {   image, 
        name, 
        species, 
        status,
        id,
    }:Props)=>{

    //creamos un nuevo estado, si la tarjeta del personaje existe debe quedar bloqueado el boton agregar de ese personaje, ya que el mismo ya existe en el array
    const [ disabledBtn, setDisabledBtn ] = useState<boolean>(false)

    //traemos el estado completo con el array a través de useAppSelector
    const itemExist = useAppSelector((state)=> state.cartReducer)
    //con el useEffect traemos 
    useEffect(()=>{
        //esto sirve para bloquear el boton en el caso de el personaje exista
        itemExist.some((item)=> item.id === id) // el some arroja si es true o false
        ? setDisabledBtn(true) // true se deshabilita el boton
        : setDisabledBtn(false)//false se habilita el boton
        // el some arroja si es true o false
        setItem("cart", itemExist)//esto es para que se guarde el store en localstorage
    },[itemExist, id])
    let navigate = useNavigate()  

    const dispatch = useDispatch()
    const handleAddToCart=()=>{
        dispatch(
        addToCart({
            id,
            name,
            image,
           info: status,
        }))
    }
    return(
        <Card sx={{mt:2}}>
            <CardMedia 
                component="img"
                height="194"
                image={image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="h6" sx={{mb:1.5}}>Nombre: {name}</Typography>
                <Divider />
                <Typography variant="h5" sx={{mb:1.5}}>Especie: {species}</Typography>
                <Typography sx={{mt:1.5}} variant="h6">Estado: {status}</Typography>
            </CardContent>
            <CardActions>
                <Button
                  onClick={()=>navigate(`/character/${id}`)}
                  fullWidth 
                  variant="outlined" 
                  size="small"
                >Learn More
                </Button>
                <Button
                  fullWidth
                  variant="outlined"
                  size="small"
                  disabled={disabledBtn}
                  onClick={handleAddToCart}
                >
                    Add Cart
                </Button>
            </CardActions>
        </Card>
    )
}