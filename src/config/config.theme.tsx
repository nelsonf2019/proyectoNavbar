import { ThemeProvider } from "@emotion/react"
import { CssBaseline, createTheme } from "@mui/material"

type ThemeProps ={
    children: React.ReactNode
}

export enum themePalette{
        BG="#37474f",
        LILA="#673ab7",
        FONT_GLOBAL="'JetBrains Mono', monospace",
        //ALERT STYLES
        ERROR_MAIN="#f44336",//para mostrar de forma global
        BG_ERROR_MAIN="rgba(244,67,54,0.1)",//muestra de formal global para poder usar en todo y no estar configurando en cada alert
        SUCCESS_MAIN="#66bba",
        BG_SUCCESS_MAIN="rgba(102,187,106,0.1)",
}
//creamos un theme palette para los colores y el tipo de letra a nivel global de la app web
const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default:themePalette.BG
        },
        primary:{
            main: themePalette.LILA
        }
    },
    typography:{
        fontFamily:themePalette.FONT_GLOBAL,
        
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    textTransform:"none",
                    boxShadow:"none",
                    borderRadius:"0.5em",       

                }
            }
        },
        MuiAlert:{
            defaultProps:{
                style:{
                    borderRadius:"0.8em",
                    fontSize:"1em",
                }
            },
            //apunta a los estilo de un tipo de componente alert
            styleOverrides:{
                standardError:{
                    border:`1px solid ${themePalette.ERROR_MAIN}`,
                    background: themePalette.BG_ERROR_MAIN,
                },
                standardSuccess:{
                    border:`1px solid ${themePalette.SUCCESS_MAIN}`,
                    background: themePalette.BG_SUCCESS_MAIN,
                }
            },
            
        }
    }
});

export const ThemeConfig: React.FC<ThemeProps> =({children})=>{
    return(
        <ThemeProvider theme={theme}>
        <CssBaseline />
            {children}
        </ThemeProvider>
    )
}