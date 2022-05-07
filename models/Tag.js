'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const TagSchema = mongoose.Schema( {
    name: String,
    tagged: {ObjectId},
    createdAt: Date,
} );

module.exports = mongoose.model( 'Tag', TagSchema );