import React, { useContext, useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext";
import styles from "./Anuncios.module.css"

export const Anuncios = ({ countFav, companionName }) => {

    const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        actions.getUserAds();
    }, []);

    const handleDelete = (id) => {
        actions.deleteAd(id);
        actions.getUserAds();
    }

    const verAnuncio = (id) => {
        navigate(`/anuncio/${id}`)
    }

    return (
        <>
            <div className={`container bg-light p-4 my-5 rounded ${styles.block_anuncios}`}>
                <ul className={`nav nav-pills ${styles.nav_pills_edit} mb-3`} id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className={`btn active fs-5 ${styles.button_tab}`} id="pills-postulaciones-tab" data-bs-toggle="pill" data-bs-target="#pills-postulaciones" type="button" role="tab" aria-controls="pills-postulaciones" aria-selected="true" >Mis anuncios</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className={`btn fs-5 ${styles.button_tab}`} id="pills-fav-tab" data-bs-toggle="pill" data-bs-target="#pills-fav" type="button" role="tab" aria-controls="pills-fav" aria-selected="false">Favoritos</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active table-responsive" id="pills-postulaciones" role="tabpanel" aria-labelledby="pills-postulaciones-tab" tabIndex="0">

                        <table className="table table-light table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Anuncio</th>
                                    <th scope="col">Solicitudes</th>
                                    <th scope="col">Fecha</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.isArray(store.adData) ? (
                                    store.adData.map((ad, index) => (

                                        <tr key={ad.id}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{ad.title}</td>
                                            <td>{ad.id}</td>
                                            <td>{new Date(ad.created_at).toLocaleDateString('es-ES', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: 'numeric'
                                            })}</td>
                                            <td>{ad.status === "pending" ? <span className={styles.pendiente}>Pendiente</span> : ad.status === "ok" ? <span className="text-success">Publicado</span> : <span className="text-danger">Rechazado</span>}</td>
                                            <td className="text-end">
                                                <span onClick={() => verAnuncio(ad.id)} className={`fa-solid fa-eye pe-3 ${styles.ad_icons}`}></span>
                                                <span className={`fa-solid fa-trash-can pb-2 ${styles.ad_icons}`} type="button" data-bs-toggle="modal" data-bs-target="#exampleModal"></span>

                                                <div className={`modal fade ${styles.modal_edit}`} data-bs-backdrop="false" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                    <div className="modal-dialog">
                                                        <div className="modal-content">
                                                            <div className="text-start modal-body fw-bold fs-4">
                                                                ¿Desea eliminar el anuncio?
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary fs-5" data-bs-dismiss="modal">Volver</button>
                                                                <button type="button" className="btn btn-danger fs-5" onClick={() => handleDelete(ad.id)}>Eliminar</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5">No tienes anuncios creados o activos</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                    </div>
                    <div className="tab-pane fade table-responsive" id="pills-fav" role="tabpanel" aria-labelledby="pills-fav-tab" tabIndex="0">
                        <table className="table table-light table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">{countFav}</th>
                                    <td>{companionName}</td>
                                    <td className="text-end">
                                        <span className="fa-solid fa-eye pe-3"></span>
                                        <span className="fa-solid fa-trash-can pb-2"></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    )
}