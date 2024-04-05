import React from "react";

export const Cardpeople = ({ name, height, mass, imgSrc }) => (
    <div className="card" style={{ width: "18rem" }}>
          <img src={imgSrc} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
                <strong>Altura:</strong> {height}<br />
                <strong>Masa:</strong> {mass}<br />
            </p>
            <a href="#" className="btn btn-primary">Ver más detalles</a>
        </div>
    </div>
);