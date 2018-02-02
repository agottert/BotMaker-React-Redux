const AGREGAR_USUARIO='AGREGAR_USUARIO' 
// {
//     type: AGREGAR_USUARIO,
//     nombre: "Agustina",
//     apellido:"Gottert",
//     mail:"agottert@gmail.com",
//     password:"123456",
//     nacimiento:"06/02/1987", 
// }
const agregarUsuario=(nombre, apellido, mail, password, nacimiento)=>{
    return {
        type: AGREGAR_USUARIO,
        nombre, 
        apellido,
        mail,
        password,
        nacimiento,
    }

}

const BORRAR_USUARIO='BORRAR_USUARIO'
// {
//     type: BORRAR_USUARIO,
//     mail:"agottert@gmail.com",
// }
const borrarUsuario=(mail)=>{
    return {
        type: BORRAR_USUARIO,
        mail,
        
    }
}

const EDITAR_USUARIO='EDITAR_USUARIO'
// {   
//     mail:"agottert@gmail.com",
//     type: EDITAR_USUARIO,
//     nombre: "Agustina",
//     apellido:"Gottert",
//     password:"123456",
//     nacimiento:"06/02/1987", 
// }
const editarUsuario=(nombre, apellido, mail, password, nacimiento)=>{
    return {
        type: EDITAR_USUARIO,
        nombre, 
        apellido,
        mail,
        password,
        nacimiento,
    }
}

export { 
    AGREGAR_USUARIO, 
    BORRAR_USUARIO,
    EDITAR_USUARIO,
    agregarUsuario,
    editarUsuario,
    borrarUsuario,
};