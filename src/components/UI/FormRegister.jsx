import React,{useState} from 'react'
import { NavLink } from 'react-router-dom';
import { Boton } from './Boton';

export const FormRegister = () => {
    const axios = require('axios');
    const [dataRaw, setDataRaw] = useState({
        form:{
            "username":"",
            "password":"",
            "name":""
        },
        error:false,
        errorMsg:""
    })

    function postRegister(){
      console.log(dataRaw.form);
        axios.post('https://backend-edw.herokuapp.com/usuario', dataRaw.form)
          .then(function (response, e) {
            const registerMsg = document.getElementById('error-register');
            if(response.data.Message === "Usuario con ese username ya esta registrado"){
              dataRaw.errorMsg = "Este nombre de usuario ya esta en uso, por favor use uno nuevo."
              registerMsg.textContent=dataRaw.errorMsg
            }else {
                dataRaw.errorMsg = ""
                registerMsg.textContent=response.data.Message
            }
            console.log(response);
          })
          .catch(function (error) {
            const registerMsg = document.getElementById('error-register');
            dataRaw.errorMsg = "Error al conectarse con la base de datos."
            registerMsg.textContent=dataRaw.errorMsg
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
      }else if(keyName==="name"){
        setDataRaw({form:{
          ...dataRaw.form,
          ["name"]:value
        }})
      }
    }


  return (
    <form className='form' onSubmit={preventForm}>
      <h2 id='form-title'>CREAR CUENTA</h2>
        <p>
            <label htmlFor="name" className='label-form' >NOMBRE</label>
            <input type="text" id="name" className='input-form' name="name" onChange={inputChange} />
        </p>
        <p>
            <label htmlFor="userName" className='label-form' >NOMBRE DE USUARIO</label>
            <input type="text" id="userName" className='input-form' name="username" onChange={inputChange} />
        </p>
        <p>
            <label htmlFor="password" className='label-form' >CONTRASEÑA</label>
            <input type="password" id="password" className='input-form' name="password" onChange={inputChange}/>
        </p>
        <p id="error-register" className='msg-form'>{dataRaw.errorMsg}</p>
        <p>
          <Boton id="btn-register" event={postRegister} className="btn-form" text="Crear cuenta" ></Boton>
        </p>
        <hr />
        <p>
            <NavLink to="/"><Boton id="btn-login" className="btn-form" text="Iniciar sesion" ></Boton></NavLink>
        </p>
    </form>
  )
}
