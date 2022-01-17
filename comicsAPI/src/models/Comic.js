'use strict';
var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var ComicSchema = new Schema({
    title: {
        type: String, 
        required: "Type the name of the Comic"
    },
    issue: {
        type: String, 
        required: "Type the issue number"
    },
    character: { 
        type: String, 
    },
    series: {
        type: String,
    },
    publisher: {
        type: String,
        required: "Type the name of the publisher, (DC, Marvel, Dark Horse, etc.."
    },
    imprint:{
        type: String,
    },
    releaseData: {
        type: Date,
        min:'1900-01-01',
        max: '2100-01-28'
    },
    year: {
        type: Number,
        required: "Type the year the issue was released"
    },
    cover: {
        type: String, 
    },
    coverArtist: {
        type: String
    },
    artist: {
        type: String
    },
    writer: {
        type: String
    },
    coverImage:{
        type: String
    },
    quantity: {
        type: Number,
        required: true
    }

})
module.exports = mongoose.model('Comic', ComicSchema);