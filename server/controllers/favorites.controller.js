//controllers/favorites.controller.js


var FavoriteService = require('../services/favorite.service')

// Saving the context of this module inside the _the variable

_this = this


// Async Controller function to get the Favorite website list 

exports.getFavorites = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var favorites = await FavoriteService.getFavorites({}, page, limit)
        
        // Return the Favorites list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: favorites, message: " Successfully received favorites websites "});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createFavorite = async function(req, res, next){

    // Req.Body contains the form submit values.

    var favorite = {
        websiteName: req.body.websiteName,
        websiteURL: req.body.websiteURL
    }

    try{
        
        // Calling the Service function with the new object from the Request Body
    
        var createdFavorite = await FavoriteService.createFavorite(favorite)
        return res.status(201).json({status: 201, data: createdFavorite, message: "Successfully created favorite website"})
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Favorite creation was unsuccessful"})
    }
}

exports.updateFavorite = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var favorite = {
        id,
        websiteName: req.body.websiteName ? req.body.websiteName : null,
        websiteURL: req.body.websiteURL ? req.body.websiteURL : null
    }

    try{
        var updatedFavorite = await FavoriteService.updateFavorite(favorite)
        return res.status(200).json({status: 200, data: updatedFavorite, message: "Successfully updated favorite website"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeFavorite = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await FavoriteService.deleteFavorite(id)
        return res.status(204).json({status:204, message: "Successfully deleted favorite website"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}