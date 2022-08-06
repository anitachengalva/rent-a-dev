const { Schema, model } = require("mongoose");

const skillsSchema = new Schema({
	skills: {
		type: String,
	},
});
