import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { getItem } from '../../utils/LocalStorage'


// definimos el interface del estado para agregar con los datos que vamos a pasar
interface CardAddStore {
  id: number | undefined
  name: string
  image: string
  info: string
}
// y para quitar
interface CartRemoveState {
    id: number | undefined
  }
  

// inicializamos el estado como un array de objetos, porque manipulamos un array de objetos desde Rick and Morty
const initialState: CardAddStore[] = getItem("cart") || [] //esto es para el local storage, si existe algo lo toma del local storage sino que me muestre el array vacío

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    //agrega
   addToCart:(state, action: PayloadAction<CardAddStore>)=>{
    const {id} = action.payload //desestructuramos
    //mostrame los id que voy agregando al array
    if(state.length === 0 || state.filter((item)=> item.id === id).length === 0){
        state.push(action.payload)
    }
   },
   //elimina
   removeToCart: (state, action: PayloadAction<CartRemoveState>)=>{
        const { id } = action.payload;
        if(state.some((item)=> item.id === id)){
            return state = state.filter((item)=> item.id !== id)// piso el estado y muestro todos los id que se sean diferentes al igualado, es decir que muestre todos menos el id que no necesitamos
            // y de ahí los elimina
        }
   }
  },
})

export const { addToCart, removeToCart  } = cartSlice.actions// se exportan los actions

