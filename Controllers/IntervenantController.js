const mongoose = require("mongoose");
const Intervenant = require("../Models/Intervenant");
//Add intervenant
//@request.body
const postIntervenant = async (request, response) => {
  const intervenant = request.body;
  try {
    const searchedIntervenant = await Intervenant.findOne({ NSS: intervenant.NSS });
    if (searchedIntervenant) {
      return response
        .status(400)
        .json({ message: "Cet intervenant est déjà enregistré" });
    }
    const newIntervenant = await new Intervenant({
        NSS: intervenant.NSS,
        Nom: intervenant.Nom,
        Prenom: intervenant.Prenom,
    });
    await newIntervenant.save();
    response.status(200).json({ intervenant: newIntervenant });
  } catch (error) {
    response.status(500).json({ error: "L'intervenant n'a pas pu être enregistré" });
  }
};
//get request
//no need to teh request body
//no nee to request.paramps
const getAllIntervenants = async (request, response) => {
  try {
    const intervenants = await Intervenant.find();
    response.status(200).json({ intervenants: intervenants });
  } catch (error) {
    console.log('erreur get all intervenants router',error)
    response.status(500).json({ error: "laffichage de tous les intervenats a échoué" });
  }
};
//delete request
//i need request.params
const deleteIntervenant = async (request, response) => {
  try {
    const id = request.params.id;
    await Intervenant.findByIdAndDelete(id);
    response
      .status(200)
      .json({ message: "L'intervenat a été effacé avec succès" });
  } catch (error) {
    response.status(500).json({ error: "la suppression de l'intervenant a échoué" });
  }
};
//update intervenant 
//I need request.params;
//I need request.body;
const updateIntervenant=async(request,response)=>{
    const id =request.params.id
    const newIntervenant=request.body
 try {
     const updateIntervenant =await Intervenant.findByIdAndUpdate(id,newIntervenant,{new:true})
     response.status(200).json({intervenant:updateIntervenant,message:'Intervenant mis à jour'})
 } catch (error) {
     response.status(500).json({error:"mis à jour de l'intervenant a échoué"})
 }
}
//get one specefic Intervenant
//I need request.params
const getOneIntervenant=async(request,response)=>{
    const id =request.params.id
    try {
        const intervenantFound=await Intervenant.findById(id);
        response.status(200).json({intervenant:intervenantFound})

    } catch (error) {
        response.status(500).json({error:"l'Intervenant n'a pas pu être trouvé"})
    }
}
module.exports = { postIntervenant, getAllIntervenants ,deleteIntervenant,updateIntervenant,getOneIntervenant};
