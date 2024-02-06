import { Alert, AlertColor, Snackbar, Typography } from "@mui/material"

type NotificacionProps = {
    open: boolean
    msg: string
    severity?: AlertColor | undefined
    handleClose: () => void
}

//En este caso el ALERT trae los estilos que pusimos en config.theme.tsx
export const Notification =({ open, msg, severity, handleClose }: NotificacionProps)=>{

    return(
        <Snackbar 
            anchorOrigin={{vertical:"top", horizontal:"center"}} 
            autoHideDuration={2000}
            open={open}
            onClose={handleClose}
        >
            <Alert
                onClose={handleClose}
                severity={severity}
            ><Typography>{msg}</Typography></Alert>
        </Snackbar>
    )
}