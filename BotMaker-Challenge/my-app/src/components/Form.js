import React from 'react';
import { connect } from 'react-redux'
import { agregarUsuario } from '../actions';

const mapStateToProps = (state) => {
  return {
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    agregar: (nombre, apellido, mail, password, nacimiento) => {
      dispatch(agregarUsuario(nombre, apellido, mail, password, nacimiento))
    }
  }
}

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state={ //state inicial del componente
      nombre:'', 
      apellido: '',
      mail: '', 
      password:'', 
      nacimiento:'',
    }
  }
  render(){
    return (
      <div>
        <input 
          type="text" 
          placeholder="Nombre" 
          onChange={
            (e) => {
              this.setState({nombre: e.target.value})
            }
          } 
          value={this.state.nombre}
        />
        <input type="text" placeholder="Apellido"
        placeholder="Apellido" 
        onChange={(e)=>{this.setState({apellido: e.target.value})}} 
        value={this.state.apellido}
        />
        <input type="mail" placeholder="Mail"
        placeholder="Mail" 
        onChange={(e)=>{this.setState({mail: e.target.value})}} 
        value={this.state.mail}
        />
        <input type="password" placeholder="Password"
        placeholder="Password" 
        onChange={(e)=>{this.setState({password: e.target.value})}} 
        value={this.state.password}
        />
        <input type="date" placeholder="Fecha de nacimiento"
        placeholder="Date" 
        onChange={(e)=>{this.setState({nacimiento: e.target.value})}} 
        value={this.state.nacimiento}
        />
        <button onClick={()=>{
          this.props.agregar(
            this.state.nombre,
            this.state.apellido,
            this.state.mail,
            this.state.password,
            this.state.nacimiento,
          )
          this.setState({
            nombre:'', 
            apellido: '',
            mail: '', 
            password:'', 
            nacimiento:'',
          })
        }}>Agregar</button>
      </div>
    );
  }
}

  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Form)

  