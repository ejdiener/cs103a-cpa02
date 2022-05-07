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

    species: String,
    tags: [ObjectId],
    // Number
    ageInYears: Number,
    // Textboxes
    blurb: String,
    appearance: String,
    personality: String,
    home: String,
    job: String,
    relationships: String,

    likes: String,
    dislikes: String,
    goals: String,
    // Checkboxes
    pronouns: [String],
    // Select
    gender: String,
    // Date
    createdAt: Date,
    lastEdited: Date,
} );

module.exports = mongoose.model( 'NPC', NPCSchema );