import React from 'react'
import IntervenantCard from './IntervenantCard'
import {useSelector} from "react-redux" 
 const IntervantsListe = () => {
     const intervenants=useSelector(state=>state.IntervenantReducer.intervenants)
    console.log("liste des intervenants :", intervenants)
     return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            {intervenants.map((intervenant)=> <IntervenantCard key={intervenant._id} intervenant={intervenant}/>)}

           
        </div>
    )
}
export default IntervantsListe