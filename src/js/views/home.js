import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Cardpeople } from "../component/Cardpeople.jsx";

import "../../styles/home.css";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomePeople();
		
    }, []);

    

    return (
        <div className="text-center mt-5">
            <h1>Hello Rigo!</h1>
            {store.listDetailsPeople.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>Detalles de las personas:</h2>
                    <div className="card-deck">
                        {/* Mapear los detalles de las personas y renderizar Cardpeople para cada persona */}
                        {store.listDetailsPeople.map((person, index) => (
                            <Cardpeople 
                                key={index}
								imgSrc={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
                                name={person.result.properties.name}
                                height={person.result.properties.height}
                                mass={person.result.properties.mass}
                            />
							
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};