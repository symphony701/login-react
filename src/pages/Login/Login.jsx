import React, {useState} from "react";
import './Login.css';
import Swal from 'sweetalert2';

import Input from './Components/Input/Input';
import http from './../../common/http';

const Login = () =>{

  const validator = new http();

  const [user, setUser]= useState('');
  const [password, setPassword]= useState('');

  function handleChange(name, value){
    if(name === 'user'){
      setUser(value);
    }else{
      setPassword(value);
    }
  }

  async function handleSubmit(){
    let account = {user,password};
    if (account) {
      let val = await validator.login(account);
      if(val){
        Swal.fire({
          title: 'Bienvenido',
          text: 'Has iniciado sesión correctamente',
          icon: 'success'
        });
      }else{
        Swal.fire({
          title: 'Error',
          text: 'Usuario o contraseña incorrectos',
          icon: 'error'
        });
      }
    }
  }



  return(
    <div className="login">
      <div className="login-container">
      <h2>¡Bienvenido!</h2>
      <Input className="input" nombre='Usuario'
        attribute={{
          id: 'user',
          name: 'user',
          type:'text',
          placeholder: 'Ingrese su usuario'
        }}
        handleChange={handleChange}
      ></Input>
      <Input className="input" nombre='Usuario'
        attribute={{
          id: 'password',
          name: 'password',
          type:'password',
          placeholder: 'Ingrese su contraseña'
        }}
        handleChange={handleChange}
      ></Input>

      <button className="button" onClick={handleSubmit}>
        Ingresar
      </button>
      </div>
    </div>
  )
};

export default Login;