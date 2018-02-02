import { AGREGAR_USUARIO, BORRAR_USUARIO, EDITAR_USUARIO } from "./actions";


const initialState = {
  usuarios:[{
    nombre: "Agustina",
    apellido:"Gottert",
    mail:"agottert@gmail.com",
    password:"123456",
    nacimiento:"1999-09-04", 
  },
  {
    nombre: "Eugenia",
    apellido:"Rodriguez",
    mail:"ewelynda@gmail.com",
    password:"79797897",
    nacimiento:"2014-02-04", 
  },
  {
    nombre: "Hernan",
    apellido:"Rodriguez",
    mail:"hernan@gmail.com",
    password:"79797897",
    nacimiento:"1986-02-16", 
  }
  ],  
};

function appReducer(state = initialState, action) {
  console.log(action)
  switch(action.type) {
    case AGREGAR_USUARIO:
      return Object.assign({},state,{
        usuarios:[
          ...state.usuarios,
          {
            nombre:action.nombre,
            apellido:action.apellido, 
            mail:action.mail, 
            password:action.password, 
            nacimiento:action.nacimiento
          }
        ]
      });
    case EDITAR_USUARIO:
      return Object.assign({}, state, {
        usuarios: state.usuarios.map((usuario) => {
          if (usuario.mail === action.mail) {
            return {
              nombre:action.nombre,
              apellido:action.apellido, 
              mail:action.mail, 
              password:action.password, 
              nacimiento:action.nacimiento
              }
            
            // Es el usuario a editar
            } else {
            return usuario
            // Es cualquier otro usuario
          }
        })
      });
    case BORRAR_USUARIO:
      return Object.assign({},state,{
        usuarios: state.usuarios.filter((usuario)=>{
          return usuario.mail !== action.mail;
        })
      });
    default: return state;
  }

  
}
export default appReducer;


