import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext"

import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomePeople();
    }, []);

    console.log(store.listDetailsPeople?.result);

    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!</h1>
            {store.listDetailsPeople.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>Detalles de las personas:</h2>
                    <ul>
                        {/* Mapear los detalles de las personas */}
                        {store.listDetailsPeople.map((person, index) => (
                            <li key={index}>
                                {/* Acceder a las propiedades dentro de "properties" */}
                                <strong>Nombre:</strong> {person.result.properties.name}<br />
                                <strong>Altura:</strong> {person.result.properties.height}<br />
                                <strong>Masa:</strong> {person.result.properties.mass}<br />
                                
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};