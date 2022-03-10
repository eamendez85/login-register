import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { Boton } from './Boton';

export const FormLogin = () => {
    const axios = require('axios');
    const [dataRaw, setDataRaw] = useState({
        form:{
            "username":"",
            "password":"",
        },
        error:false,
        errorMsg:""
    })

    function postLogin(){
      console.log(dataRaw.form);
        axios.post('https://backend-edw.herokuapp.com/login', dataRaw.form)
          .then(function (response, e) {
            const errorLogin = document.getElementById('error-login');
            if(response.data.Message === 'Credenciales Invalidas'){
              dataRaw.errorMsg = "El usuario o contraseña son incorrectos."
              errorLogin.textContent=dataRaw.errorMsg
            }else {
              window.location.href="./HomePage"
            }
            console.log(response);
          })
          .catch(function (error) {
            const errorLogin = document.getElementById('error-login');
            dataRaw.errorMsg = "Error al conectarse con la base de datos."
            errorLogin.textContent=dataRaw.errorMsg
            console.log(error);
          });
    }

    //e.preventDefault(),Evita que se recargue la pagina
    const preventForm=(e) => {
      e.preventDefault();
    }

    async function inputChange(e){
      let keyName=e.target.name
      let value=e.target.value
      if(keyName==="username"){
        setDataRaw({form:{
          ...dataRaw.form,
          ["username"]:value
        }})
      }else if(keyName==="password"){
        setDataRaw({form:{
          ...dataRaw.form,
          ["password"]:value
        }})
      }
    }


  return (
    <form className='form' onSubmit={preventForm}>
      <h2 id='form-title'>LOGIN</h2>
        <p>
            <label htmlFor="userName" className='label-form' >NOMBRE DE USUARIO</label>
            <input type="text" className='input-form' id="userName" name="username" onChange={inputChange} required />
        </p>
        <p>
            <label htmlFor="password" className='label-form'>CONTRASEÑA</label>
            <input type="password" id="password" className='input-form' name="password" onChange={inputChange} required />
        </p>
        <p>
          <Boton id="btn-login" event={postLogin} className="btn-form" text="Iniciar sesion" ></Boton>
        </p>
        <p id="error-login" className='msg-form' >{dataRaw.errorMsg}</p>
        <hr />
        <p>
          <NavLink to="/RegisterPage"><Boton id="btn-registerPage" className="btn-form" text="Crear una cuenta" ></Boton></NavLink>
        </p>

    </form>
  )
}
