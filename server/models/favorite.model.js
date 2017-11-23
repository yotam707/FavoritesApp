///models/favorite.model.js

var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var FavoriteSchema = new mongoose.Schema({
    websiteName: String,
    websiteURL: String,
    date: Date,
})

FavoriteSchema.plugin(mongoosePaginate)
const Favorite = mongoose.model('Favorite', FavoriteSchema)

module.exports = Favorite;