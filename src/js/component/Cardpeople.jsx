import React from "react";
import { Link } from "react-router-dom";

export const Cardpeople = ({ name, height, mass, imgSrc, uid, birth_year}) => (

    <div className="card " style={{ width: "18rem" }}>
        <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
                <strong>Altura:</strong> {height}<br />
                <strong>Masa:</strong> {mass}<br />
                <strong>Masa:</strong> {birth_year }<br />
            </p>
            <Link to={`/details/${uid}`} className="btn btn-primary">Ver más detalles</Link>
        </div>
    </div>

);