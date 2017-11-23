///services/favorite.service.js

var Favorite = require('../models/favorite.model')

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the Favorites List
exports.getFavorites = async function(query, page, limit){

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var favorites = await Favorite.paginate(query, options)
        
        // Return the favorites list that was returned by the mongoose promise
        return favorites;

    } catch (e) {

        // return a Error message describing the reason 
        throw Error('Error while Paginating favorites')
    }
}

exports.createFavorite = async function(favorite){
    
    // Creating a new Mongoose Object by using the new keyword
    var newFavorite = new Favorite({
        websiteName: favorite.websiteName,
        websiteURL: favorite.websiteURL,
        date: new Date()
    })

    try{

        // Saving the favorite 
        var savedFavorite = await newFavorite.save()

        return savedFavorite;
    }catch(e){
      
        // return a Error message describing the reason     
        throw Error("Error while Creating Favorite website")
    }
}

exports.updateFavorite = async function(favorite){
    var id = favorite.id

    try{
        //Find the old Favorite Object by the Id
    
        var oldFavorite = await Favorite.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Favorite website")
    }

    // If no old Favorite Object exists return false
    if(!oldFavorite){
        return false;
    }

    console.log(oldFavorite);

    //Edit the Favorite Object
    oldFavorite.websiteName = favorite.websiteName;
    oldFavorite.websiteURL = favorite.websiteURL;


    console.log(oldFavorite);

    try{
        var savedFavorite = await oldFavorite.save()
        return savedFavorite;
    }catch(e){
        throw Error("And Error occured while updating Favorite website");
    }
}

exports.deleteFavorite = async function(id){
    
    // Delete the Favorite
    try{
        var deleted = await Favorite.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Favorite Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Favorite")
    }
}

