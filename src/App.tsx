 
import './App.css'
 
import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './Router'
import { NotificationProvider } from './context/notification.context'
import { Suspense } from 'react'


function App() {
  //  <Suspense fallback={"Cargando..."}> con esto evitamos que haga un flash al momento de cargar la página
 //esto es porque usamos Lazy, no abusar de lazy load porque puede probocar lentitud
  return (
    <NotificationProvider>
      <BrowserRouter>
        <Suspense fallback={"Cargando..."}>
          <AppRouter />
        </Suspense>
      </BrowserRouter>    
    </NotificationProvider>
  )
}

export default App
