const express=require('express');
const router=express.Router();
const {postIntervenant,getAllIntervenants,deleteIntervenant,updateIntervenant,getOneIntervenant}=require('../Controllers/IntervenantController')
router.post('/intervenant',postIntervenant)
router.get('/intervenant',getAllIntervenants);
router.delete('/intervenant/:id',deleteIntervenant);
router.put('/intervenant/:id',updateIntervenant);
router.get('/intervenant/:id',getOneIntervenant);
module.exports=router