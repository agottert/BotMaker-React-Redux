import React from 'react';
import { connect } from 'react-redux'
import { borrarUsuario } from '../actions';
import { editarUsuario } from '../actions';

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    editar: (nombre, apellido, mail, password, nacimiento) => {
      dispatch(editarUsuario(nombre, apellido, mail, password, nacimiento))

    },
    borrar: (mail) => {
        dispatch(borrarUsuario(mail))
    }
  }
}  

class Row extends React.Component {
    constructor(props){
      super(props);
      this.state={
        editar: false,
        nombre: props.usuario.nombre,
        apellido: props.usuario.apellido,
        mail: props.usuario.mail,
        password: props.usuario.password,
        nacimiento: props.usuario.nacimiento,
      }
    }
    render(){
      return (
        <tr>
            <td>
                { !this.state.editar && this.state.nombre}
                { this.state.editar && <input 
                    type="text" 
                    placeholder="Nombre" 
                    onChange={(e)=>{this.setState({nombre: e.target.value})}} 
                    value={this.state.nombre}
                />}
            </td>
            <td> { !this.state.editar && this.state.apellido}
                { this.state.editar && <input 
                    type="text" 
                    placeholder="Apellido" 
                    onChange={(e)=>{this.setState({apellido: e.target.value})}} 
                    value={this.state.apellido}
                />}</td>

            <td>{ !this.state.editar && this.state.mail}
                { this.state.editar && <input 
                    type="text" 
                    placeholder="Apellido" 
                    onChange={(e)=>{this.setState({mail: e.target.value})}} 
                    value={this.state.mail}
                />}</td>
            <td>{ !this.state.editar && this.state.password}
                { this.state.editar && <input 
                    type="text" 
                    placeholder="Password" 
                    onChange={(e)=>{this.setState({password: e.target.value})}} 
                    value={this.state.password}
                />}</td>
            <td>{ !this.state.editar && this.state.nacimiento}
                { this.state.editar && <input 
                    type="date" 
                    placeholder="Nacimiento" 
                    onChange={(e)=>{this.setState({apellido: e.target.value})}} 
                    value={this.state.nacimiento}
                />}</td>
            <td><button onClick={()=>{this.props.borrar(this.state.mail)}}><span>❌</span></button></td>
            <td>
                <button onClick={()=>{
                    this.setState({editar:true});
                }}><span>✏️</span></button>
            </td>
            <td><button onClick={()=>{
                this.props.editar(
                    this.state.nombre, 
                    this.state.apellido, 
                    this.state.mail, 
                    this.state.password, 
                    this.state.nacimiento
                );
                this.setState({editar:false});
            }}><span>💾</span></button></td>
       </tr>
      )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Row)

  


