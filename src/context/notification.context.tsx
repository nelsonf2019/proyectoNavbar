import React, { useContext, useState } from "react"
import { Notification } from "../components"
import { AlertColor } from "@mui/material"
//CON ESTO CREAMOS UN COMPONENTE PERSONALIZADO DE ALERT ERROR 

type ContextProps ={
    getError: (msg: string)=> void
    getSuccess: (msg: string) => void
}

//CREAMOS UN CONTEXT PARA EL COMPONENTE
const NotificationContext = React.createContext<ContextProps | null>(null)

export const NotificationProvider: React.FC<{children: JSX.Element}> =({children,})=>{

    //creamos un estado para cada uno de las props que se reciben 
    const [msg, setMsg] = useState("")
    const [open, setOpen] = useState(false)
    const [severity, setSeverity] = useState<AlertColor | undefined>(undefined)//o recibe un AlertColor o no recibe nada

    const handleClose=()=>{
        setOpen(false)
    }

    const getError =(msg:string)=>{
        setSeverity("error")//ejecuta el error
        setOpen(true)//abre 
        setMsg(msg)// y muestra el mensaje
    }
    const getSuccess=(msg:string)=>{
        setSeverity("success")//ejecuta el success
        setOpen(true)//abre 
        setMsg(msg)// y muestra el mensaje
    }
    const value ={
        getError,
        getSuccess,
    }
    return(
        <NotificationContext.Provider value={value}>
            <Notification 
                handleClose={handleClose} 
                open={open} 
                severity={severity} 
                msg={msg}
            />
                {children}
        </NotificationContext.Provider>
    )
};

export const useNotification =()=>{
    //uso el useContext y luego pregunto si existe el contexto de lo contrario que lo muestre, mostrando los mensjase de error
        const context = useContext(NotificationContext)
        if(!context) throw Error("No existe constexto")
        return context    
}