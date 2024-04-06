import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Cardpeople } from "../component/Cardpeople.jsx";

export const Cardlist = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomePeople();

    }, []);
    console.log(store.listDetailsPeople);
    return (
        <div >
            <h2 className="text-warning">Characters</h2>

            {store.listDetailsPeople.length === 0 ? (
                // <p className="text-warning">Loading...</p>
                <div class="d-flex justify-content-center">
                    <div class="spinner-border text-warning" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div >

                    <div className=" d-flex flex-row overflow-scroll">

                        {store.listDetailsPeople.map((person, index) => (

                            <Cardpeople
                                key={index}
                                imgSrc={`https://starwars-visualguide.com/assets/img/characters/${person.result.uid}.jpg`}
                                name={person.result.properties.name}
                                height={person.result.properties.height}
                                mass={person.result.properties.mass}
                                uid={person.result.uid}
                                birth_year={person.result.properties.birth_year}
                            />

                        ))}
                    </div>
                </div>
            )}
        </div>


    );
};