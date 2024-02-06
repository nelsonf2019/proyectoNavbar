import axios from "axios"

export const BASE_URL ="https://rickandmortyapi.com/api/"
//creo una instancia de base url
export const instance =  axios.create({
    baseURL: BASE_URL,

})

// 
