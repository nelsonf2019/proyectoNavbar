import { instance } from "./base.api"

export const endPoint = "character"
//aquí puedo obtener los números de páginas por paramtros
export const characters ={
    //trae todos los personajes
    //pasamos por parametros el número de páginas
    getAll: function({page=1}:{page?:number}){
        return instance.get(endPoint, {params:{
            page
        }})
    },
    //pasamos por parametro el id
    getId: function({id}:{id: string | undefined}){
        return instance.get(`${endPoint}/${id}`)
    }
}
