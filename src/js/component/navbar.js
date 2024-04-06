import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorito);
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
				


				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-danger dropdown-toggle"
							type="button"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Favorites {store.favorito.length}
						</button>
						<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
							{store.favorito.map((item, index) => {
								return <li key={index} className="dropdown-item"> <span onClick={() => { actions.eliminaFavorito(item.id) }} className={"fa fa-trash"}></span>{item.name}</li>
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
