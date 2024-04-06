import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorito);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 d-flex justify-content-around">
			<Link to="/">
				<img
					style={{ objectFit: "cover" }}
					className="navbar-brand mb-0 h1"
					src="https://img.icons8.com/ios/50/000000/star-wars.png" />
			</Link>
			<div className="ml-auto">



				<div className="ml-auto">
					<div className="dropdown">
						<button
							className="btn btn-warning dropdown-toggle"
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
