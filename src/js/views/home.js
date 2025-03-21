import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { CardContact } from "../component/CardContact";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";




export const Home = () => {
	const {store, actions} = useContext(Context) 
	console.log(store);
	
	
	
	return (
	<div className="text-center mt-5">
	<h1>Lista de Contactos</h1>
	{store.listContacts.map((contact) =>(
	<CardContact key={contact.id} contact={contact} />
	) )}
	<div>
	<Link to="/addContact">Back Agregar Contacto</Link>
	</div>
	</div>
);}
