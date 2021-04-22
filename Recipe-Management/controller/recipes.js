
const recipes_data = require('../recipes.json')

module.exports.getShopingList = async(req, res, next)=>{
  try {
    
    if (!req.query.ids || req.query.ids.length == 0 || req.query.ids[0] == ''){
      res.status(400).json({success : false, data : null, message : `recepe ids can't be empty`})
    }else{
    let recipes_ids = req.query.ids.split(',');
    let ingredients = []
    recipes_data.map(recepe =>{
      return recipes_ids.map(id=>{
        if (recepe.id == id) {
          ingredients.push(recepe.ingredients);
        }
      })
    });
    if(ingredients.length == 0) {
      res.status(404).json({success : false, data : null, message : `RECIPE NOT_FOUND`})
    } else {
      let aggregated_ingredients = [];
      ingredients.map(ingredient=>{ aggregated_ingredients.push(...ingredient)})   // aggregating all ingredients for multiple ids
      res.status(200).json({success : true, data : aggregated_ingredients, message : `shoping list fetched successfully`})
    }
    }
  } catch (error) {
    // console.log(error);
    res.status(500).json({success : false, data : null, message : error.message})
  }
}