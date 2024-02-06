import * as yup from "yup";
//Aqui creamos las validaciones, tambien podemos hacerlo con zod, son casi lo mismo
export const LoginValidate = yup.object().shape({
    username: yup.string().trim().required("El usuario es requerido"),
    password: yup.string().trim().min(8,"El password debe ser un mínimo de 8 carácteres").max(20, "Un máximo de 20 caracteres").required("El password es requerido"),
})