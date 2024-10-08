import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import style from "../FormularioRegistro/formularioregistro.module.css"
import { Context } from "../../store/appContext";

export const FormularioRegistro = () => {

    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    const [error, setError] = useState(null);

    const signUp = async (event, email, password, username, role) => {
        event.preventDefault();

        if (!email || !password || !username || !role) {
            setError("Por favor, complete todos los campos.");
            return;
        }

        await actions.signUp(email, password, username, role);
        console.log("Rol del usuario:", store.userData.role);
        if (store.userData.role === "user") {
            navigate('/perfil-usuario')
        }
        else {
            navigate('/formulario-profesional')
        }
    }


    return (
        <form className="form p-4" onSubmit={(event) => signUp(event, email, password, username, role)}>
            {error && <div className="alert alert-danger" role="alert">{error}</div>}
            <div className="mb-3">
                <label htmlFor="email" className="form-label fs-5">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Introduce tu correo electrónico" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="usuario" className="form-label fs-5">Usuario</label>
                <input type="text" className="form-control" id="usuario" placeholder="Crea un nombre de usuario" onChange={(e) => setUsername(e.target.value)} value={username} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label fs-5">Contraseña</label>
                <input type="password" className="form-control" id="password" placeholder="Crea una contraseña segura" onChange={(e) => setPassword(e.target.value)} value={password} />
            </div>
            <div className="mb-3">
                <label htmlFor="disabledSelect" className="form-label fs-5 pb-2">Seleccione como quiere registrarse</label>
                <select id="disabledSelect" className="form-select" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="" disabled hidden>Seleccione una opción</option>
                    <option value="user">Busco un profesional</option>
                    <option value="companion">Quiero ofrecer mis servicios</option>
                </select>
            </div>
            <div className="pt-3">
                <button className={`${style.botonInicio} submit btn btn-primary fs-5`} type="submit">Registrarme</button>
                <p className="text-secondary fst-italic pt-2">¿Ya tienes una cuenta?<Link to="/login"><button className="btn text-primary fw-bold">¡Inicia sesión!</button></Link></p>
            </div>
        </form>


    )
}
