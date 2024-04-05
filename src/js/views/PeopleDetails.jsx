import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const PeopleDetails = () => {
    const { store, actions } = useContext(Context);
    const {uid} = useParams();
    const params = useParams();

    const [person, setPerson] = useState(null);

    useEffect(() => {
      const personDetail = store.listDetailsPeople.find(person => person.result.uid === uid);
      setPerson(personDetail);
  }, [store.listDetailsPeople, uid]);

    return (
         <div className="card" style={{ width: "18rem" }}>
            {person ? (
                <>
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{person.result.properties.name}</h5>
                        <p className="card-text">
                            <strong>Altura:</strong> {person.result.properties.height}<br />
                            <strong>Masa:</strong> {person.result.properties.mass}<br />
                            {/* Renderizar más detalles aquí si es necesario */}
                        </p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>

    );
};