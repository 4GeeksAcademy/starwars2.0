import React, { useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Cardpeople = ({ name, height, imgSrc, uid, birth_year }) => {
    const { store, actions } = useContext(Context);

    return(
    <div className="card " style={{ width: "18rem" }}>
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
                <strong>Altura:</strong> {height}<br />
                <strong>Masa:</strong> {birth_year}<br />
            </p>
            <Link to={`/details/${uid}`} className="btn btn-primary">Ver más detalles</Link>
           
           
            <button className="btn btn-outline-danger">
                <i
                    className="fa fa-heart text-danger"
                    onClick={() => {
                        actions.guardarFavoritos(name);
                    }}
                />
            </button>


        </div>
    </div>
    )

                };