import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
// import { Cardpeople } from "../component/Cardpeople.jsx";

import "../../styles/home.css";
import { Cardlist } from "../component/Cardlist.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);

    
    return (
        <div >
            <Cardlist/>
        </div>
        
    );
};