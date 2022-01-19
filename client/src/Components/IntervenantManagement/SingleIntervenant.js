import React ,{ useEffect}from "react";
import { useSelector ,useDispatch} from "react-redux";
import {getOneIntervenant} from "../../Redux/Actions/IntervenantActions"
import { useParams } from "react-router";

const SingleIntervenant = () => {
  console.log("hello from singleuser")
    const dispatch=useDispatch()
    const {id}=useParams();
    console.log("IntervenantID",id)
    const intervenant=useSelector(state=>state.IntervenantReducer.intervenant)
    console.log("intervenant: from single intervenant",intervenant)

    useEffect(()=>{
      
  dispatch(getOneIntervenant(id)) 
    },[])

   if(!intervenant){
       return 'loading';
   }
  return (
    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <p className="card-title">{intervenant.Nom}</p>
        <p className="card-text">
          {intervenant.Prenom}
        </p>
        <p>{intervenant.NSS}</p>
     
      </div>
    </div>
  );
};

export default SingleIntervenant
