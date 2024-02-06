import { Card, CardActions, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from "@mui/material"
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useAppDispatch } from "../../redux/hooks";
import { removeToCart } from "../../redux/slices/cart.slice";

interface Props {
    id: number | undefined;
    image: string;
    name: string;
    info: string;
  }

export const HorizontalCardComponent=({id, image,name, info}:Props)=>{
    const dispatch = useAppDispatch()
    const handleRemoveToCart = () => {
        dispatch(removeToCart({ id }));
      };
    return(
        <Card sx={{ display: 'flex', my: 2 }}>
          <CardMedia 
             component="img"
             sx={{ width: 151 }}
             image={image}
             alt="Rick and Morty"
          />
            <Grid container sx={{mx:1}}>
                <Grid item xs={9}>
                    <CardContent>
                        <Typography variant="h4">{name}</Typography>
                        <Divider />
                        <Typography variant="h6">{info}</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={2}>
                    <CardActions>
                        <IconButton onClick={handleRemoveToCart}>
                        <CloseRoundedIcon />
                        </IconButton>
                    </CardActions>
                </Grid>
            </Grid>
        </Card>
    )
}