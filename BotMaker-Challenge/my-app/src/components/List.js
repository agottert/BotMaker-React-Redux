import React from 'react';
import { connect } from 'react-redux'
import { borrarUsuario } from '../actions';
import Row from './Row';

const mapStateToProps = (state) => {
  return {
    usuarios: state.usuarios
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    borrar: (mail) => {
      dispatch(borrarUsuario(mail))
    }
  }
}  

const List=({ usuarios, borrar })=>(
    
    <table className="list">
     <tbody>   
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Mail</th>
        <th>Password</th>
        <th>Fecha de Nacimiento</th>
        <th></th>
        <th>Acciones</th>
        <th></th>
      </tr>
      {
        usuarios.map((usuario)=>( 
          <Row usuario={usuario} key={usuario.mail}    ></Row>
        ))
      }
      </tbody>
    </table>
  )

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(List)

  
