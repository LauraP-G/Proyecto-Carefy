import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import { Jumbotron } from "../../component/Jumbotron/Jumbotron.jsx";
import { Rating } from "../../component/Rating/Rating.jsx";


export const Rate = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	useEffect(() => {
		if (!store.userData.token) {
			navigate('/login');
		}
	}, [store.userData.token, navigate])

	return (
		<>
			<Jumbotron bgImg={{ backgroundImage: "url('https://images.unsplash.com/photo-1499914485622-a88fac536970?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }} title={"Valora el servicio del profesional"} subtitle={"¿Cómo ha sido el servicio del profesional? Deja una reseña que ayude a otros usuarios."} />
			<Rating />
		</>
	);
};
