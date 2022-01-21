const mongoose = require("mongoose");
const User = require("../Models/User");
//post Request
//@request.body
const postUser = async (request, response) => {
  const user = request.body;
  try {
    const searchedUser = await User.findOne({ email: user.email });
    if (searchedUser) {
      return response
        .status(400)
        .json({ message: "you are alredey registered" });
    }

    const newUser = await new User({
      username: user.username,
      email: user.email,
      password:user.password,
      SelectedFile:user.SelectedFile,
      NumSiret:user.NumSiret,
      role:user.role,
      SiegeSocialAdresse:user.SiegeSocialAdresse,
      SiegeSocialTelephone:user.SiegeSocialTelephone,
      SiegeSocialEmail:user.SiegeSocialEmail,
      RepresentantNom:user.RepresentantNom,
      RepresentFonction:user.RepresentFonction,
      RepresentantTelephone:user.RepresentantTelephone,
      RepresentantEmail:user.RepresentantEmail,
      RepresentantNumHabilitation:user.RepresentantNumHabilitation,
      SISERINumProtocole:user.SISERINumProtocole,
      SISERINomCle:user.SISERINomCle,
      SISERIUpdate:user.SISERIUpdate,
      MDTNom:user.MDTNom,
      MDTPrenom:user.MDTPrenom,
      MDTNumHabilitation:user.MDTNumHabilitation,
      MDTSiret:user.MDTSiret,
      MDTTelephone:user.MDTTelephone,
      MDTEmail:user.MDTEmail,
      ContratNum:user.ContratNum,
      ContratDateDebut:user.ContratDateDebut,
      ContratDateFin:user.ContratDateFin,
    });
    await newUser.save();
    response.status(200).json({ user: newUser });
  } catch (error) {
    response.status(500).json({ error: "user is not registred" });
  }
};
//get request
//no need to teh request body
//no nee to request.paramps
const getAllUsers = async (request, response) => {
  try {
    const users = await User.find();
    response.status(200).json({ users: users });
  } catch (error) {
    response.status(500).json({ error: "failed to get all users" });
  }
};
//delete request
//i need request.params
const deleteUser = async (request, response) => {
  try {
    const id = request.params.id;
    await User.findByIdAndDelete(id);
    response
      .status(200)
      .json({ message: "the user has been succeffly deleted" });
  } catch (error) {
    response.status(500).json({ error: "delete has been  failed" });
  }
};
//update user 
//I need request.params;
//I need request.body;
const updateUser=async(request,response)=>{
    const id =request.params.id
    const newUser=request.body
 try {
     const updatedUser =await User.findByIdAndUpdate(id,newUser,{new:true})
     response.status(200).json({user:updatedUser, message:'Mise à jour du client effectuée avec succès'})
 } catch (error) {
   console.log("la mise à jour n'a pas pu être effectuée")
     response.status(500).json({error:'update failed'})
 }
}
//get one specefic
//I need request.params
const getOneUser=async(request,response)=>{
    const id =request.params.id
    try {
        const userFound=await User.findById(id);
        response.status(200).json({user:userFound})

    } catch (error) {
      console.log("failed to get one user")
        response.status(500).json({error:'failed to get one user'})
    }
}
module.exports = { postUser, getAllUsers ,deleteUser,updateUser,getOneUser};
