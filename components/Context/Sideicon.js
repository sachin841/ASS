import { useState,useContext,createContext } from "react";
export const  Icon= createContext()

export  const Iconprovider=({children})=>{
    const[iconaction,seticonaction]=useState({
        event:false,
        addstation:false,
        station:false,
        editstation:false,
        aeditstation:false,
        addsession:false,
        stationfile:false,
        mystation:false,
        direcrtsesion:false,
        fullscrenview:false,
        search:false
    })
    return (<Icon.Provider value={{iconaction,seticonaction}}>{children}</Icon.Provider>)
}
export default Iconprovider;