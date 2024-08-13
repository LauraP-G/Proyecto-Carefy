import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import style from "../FormularioFamiliar/formulariofamiliar.module.css"
import { Context } from "../../store/appContext.js";

export const FormularioFamiliar = () => {


    const { store, actions } = useContext(Context);
	const navigate = useNavigate();

    return (

        <form className={`mt-1 ${style.cajonFormulario} rounded p-3`}>
            <p className="fs-4 fw-bold">Completa tus datos como responsable del mayor que será acompañado</p>
            <div className="row">
                <div className="col">
                    <div class="mb-3">
                        <label htmlFor="nombre" className="form-label fs-5">Nombre</label>
                        <input type="text" className="form-control" id="nombre" placeholder="Escribe tu nombre" value={store.name}/>
                    </div>
                </div>
                <div className="col">
                    <div class="mb-3">
                        <label htmlFor="apellidos" className="form-label fs-5">Apellidos</label>
                        <input type="text" className="form-control" id="apellidos" aria-describedby="emailHelp" placeholder="Escribe tu apellido" value={store.lastname}/>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div class="mb-3">
                        <label htmlFor="email" className="form-label fs-5">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="nombre@email.com" value={store.email}/>
                    </div>
                </div>
                <div className="col">
                    <div class="mb-3">
                        <label htmlFor="telefono" className="form-label fs-5">Teléfono de contacto</label>
                        <input type="tel" className="form-control" id="telefono" placeholder="+34 6 123 456 78" value={store.phone}/>
                    </div>
                </div>
            </div>



            <div className="row">
                <div className="col">
                    <label htmlFor="provincia" className="form-label fs-5">Provincia</label>
                    <select className="form-select" id="provincia" aria-label="Selecciona la provincia" value={store.location}>
                        <option selected>Selecciona la provincia</option>
                        <option value="A Coruna">A Coruña</option>
                        <option value="Alava">Álava</option>
                        <option value="Albacete">Albacete</option>
                        <option value="Alicante">Alicante</option>
                        <option value="Almeria">Almería</option>
                        <option value="Asturias">Asturias</option>
                        <option value="Avila">Ávila</option>
                        <option value="Badajoz">Badajoz</option>
                        <option value="Baleares">Baleares</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Burgos">Burgos</option>
                        <option value="Caceres">Cáceres</option>
                        <option value="Cadiz">Cádiz</option>
                        <option value="Cantabria">Cantabria</option>
                        <option value="Castellon">Castellón</option>
                        <option value="Ciudad Real">Ciudad Real</option>
                        <option value="Cordoba">Córdoba</option>
                        <option value="Cuenca">Cuenca</option>
                        <option value="Girona">Girona</option>
                        <option value="Granada">Granada</option>
                        <option value="Guadalajara">Guadalajara</option>
                        <option value="Guipuzcoa">Guipúzcoa</option>
                        <option value="Huelva">Huelva</option>
                        <option value="Huesca">Huesca</option>
                        <option value="Jaen">Jaén</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Las Palmas">Las Palmas</option>
                        <option value="Leon">León</option>
                        <option value="Lleida">Lleida</option>
                        <option value="Lugo">Lugo</option>
                        <option value="Madrid">Madrid</option>
                        <option value="Malaga">Málaga</option>
                        <option value="Murcia">Murcia</option>
                        <option value="Navarra">Navarra</option>
                        <option value="Ourense">Ourense</option>
                        <option value="Palencia">Palencia</option>
                        <option value="Pontevedra">Pontevedra</option>
                        <option value="Salamanca">Salamanca</option>
                        <option value="Segovia">Segovia</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Soria">Soria</option>
                        <option value="Tarragona">Tarragona</option>
                        <option value="Santa Cruz de Tenerife">Santa Cruz de Tenerife</option>
                        <option value="Teruel">Teruel</option>
                        <option value="Toledo">Toledo</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Valladolid">Valladolid</option>
                        <option value="Vizcaya">Vizcaya</option>
                        <option value="Zamora">Zamora</option>
                        <option value="Zaragoza">Zaragoza</option>
                        <option value="Ceuta">Ceuta</option>
                        <option value="Melilla">Melilla</option>
                    </select>
                </div>
            </div>


            <div className="">
                <button type="submit" className={`${style.botonGuardar} btn fs-5 mt-4`} >Guardar datos</button>
            </div>
        </form>

    )
}