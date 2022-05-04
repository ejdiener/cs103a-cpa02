'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const NPCSchema = mongoose.Schema( {
    userId: ObjectId,
    // Short strings
    firstName: String,
    middleName: String,
    lastName: String,
    suffixName: String,
    titleName: String,
    gender: String,
    species: String,
    home: String,
    // Number
    ageInYears: Number,
    // Textboxes
    blurb: String,
    appearance: String,
    personality: String,
    job: String,
    relationships: String,
    likes: String,
    dislikes: String,
    goals: String,
    // Date
    createdAt: Date,
} );

module.exports = mongoose.model( 'NPC', NPCSchema );