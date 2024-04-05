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
            <h2>Characters</h2>

            {store.listDetailsPeople.length === 0 ? (
                <p>Loading...</p>
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