const mongoose=require('mongoose');

//user = company (client)
//username = name of the company
//SelectedFile = company's logo or picture
const userSchema=mongoose.Schema({
    SelectedFile: {
        type: String,
        default:
          "https://images.unsplash.com/photo-1481026469463-66327c86e544?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=608&q=80",
      },
    role: {
        type: Number,
        default: 0,
      },
    username:{
        type:String,
        required:true
    },
    NumSiret:{
        type:Number,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    SiegeSocialAdresse:{
        type:String,
    },
    SiegeSocialTelephone:{
        type:Number,
    },
    SiegeSocialEmail:{
        type:String,
    },
    RepresentantNom:{
        type:String,
    },
    RepresentFonction:{
        type:String,
    },
    RepresentantTelephone:{
        type:Number,
    },
    RepresentantEmail:{
        type:String,
    },
    RepresentantNumHabilitation:{
        type:Number,
    },
    SISERINumProtocole:{
        type:Number,
    },
    SISERINomCle:{
        type:Number,
    },
    SISERIUpdate:{
        type:Date,
    },
    MDTNom:{
        type:String,
    },
    MDTPrenom:{
        type:String,
    },
    MDTNumHabilitation:{
        type:Number,
    },
    MDTSiret:{
        type:Number,
    },
    MDTTelephone:{
        type:Number,
    },
    MDTEmail:{
        type:String,
    },
    ContratNum:{
        type:String,
    },
    ContratDateDebut:{
        type:Date,
    },
    ContratDateFin:{
        type:Date,
    },


})
module.exports=mongoose.model('User',userSchema)

