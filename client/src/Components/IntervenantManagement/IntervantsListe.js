import React, { useEffect } from 'react'
import IntervenantCard from './IntervenantCard'
import {useSelector} from "react-redux" 
import { useDispatch } from 'react-redux'
import {GetIntervenants} from '../../Redux/Actions/IntervenantActions'

 const IntervantsListe = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetIntervenants())
      }, [dispatch])

     const intervenants=useSelector(state=>state.IntervenantReducer.intervenants)
    console.log("liste des intervenants :", intervenants)
     return (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
            {intervenants.map((intervenant)=> <IntervenantCard key={intervenant._id} intervenant={intervenant}/>)}

           
        </div>
    )
}
export default IntervantsListe