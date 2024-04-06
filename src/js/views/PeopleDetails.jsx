import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";



export const PeopleDetails = () => {
    const { store, actions } = useContext(Context);
    const { uid } = useParams();


    const [person, setPerson] = useState(null);

    useEffect(() => {
        const personDetail = store.listDetailsPeople.find(person => person.result.uid === uid);
        setPerson(personDetail);
    }, [store.listDetailsPeople, uid]);

    return (
        <div className="d-flex justify-content-center">
            <div className="card" style={{ width: "18rem" }}>
                {person ? (
                    <>
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`} className="img-fluid rounded-start" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{person.result.properties.name}</h5>
                            <p className="card-text">
                                <strong>height:</strong> {person.result.properties.height}<br />
                                <strong>Mass:</strong> {person.result.properties.mass}<br />
                                <strong>Birth year:</strong> {person.result.properties.birth_year}<br />
                                <strong>eye color:</strong> {person.result.properties.eye_color}<br />
                                <strong>gender:</strong> {person.result.properties.gender}<br />
                                <strong>hair color:</strong> {person.result.properties.hair_color}<br />
                                <strong>skin color:</strong> {person.result.properties.skin_color}<br />

                            </p>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>

    );
};