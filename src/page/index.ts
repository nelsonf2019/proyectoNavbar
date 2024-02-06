import React from "react"

//LazyLoad
export { HomePage } from "./Home"
//CharacterPage

export const LoginPage = React.lazy(()=> import('./Login'))

export const CharacterPage = React.lazy(()=> import('./character'))