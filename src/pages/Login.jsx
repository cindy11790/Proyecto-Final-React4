import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import "./Login.css";


const Login = () => {

    const  [getCorreo, setCorreo]= useState(""); //siempre hay que definir el estado el valor por defecto//
    const  [getContrasena, setContrasena]= useState("");
    const [getUsuarios, setUsuarios] = useState([]);
    let redireccion = useNavigate();

    function iniciarSesion(){
        fetch('http://localhost:7714/Usuarios')
        .then((response) => response.json())
        .then((data) =>  setUsuarios(data));

        let auth = getUsuarios.some(
            (getUsuario) =>
                 getUsuario.contraseña == getContrasena &&getUsuario.correo == getCorreo
    );
    if(auth){
        let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 2000,
  timerProgressBar: true,
  icon: "success",
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
    redireccion('/Home') /* el / se pone porque si es verdadero el correo me debe redireccionar al home, y en el router el home es / solo */

    
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  };
});
    }
    }

    return (
        <form>
            <div>
                <label htmlFor="">Correo</label>
                <input onChange={(e) => setCorreo(e.target.value)} type="text" /> 
            </div>
            <div>
                <label htmlFor="">Contraseña</label>
                <input onChange={(e) => setContrasena(e.target.value)}  type="text" />
            </div>
            <button onClick={iniciarSesion} type="button">Iniciar sesion</button>
        </form>
    )
}
export default Login;